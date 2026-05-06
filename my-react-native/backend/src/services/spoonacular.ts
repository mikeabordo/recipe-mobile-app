import axios from "axios";

const BASE_URL = "https://api.spoonacular.com";
const API_KEY = process.env.SPOONACULAR_API_KEY!;

const spoonacularClient = axios.create({
  baseURL: BASE_URL,
  params: { apiKey: API_KEY },
});

export interface SpoonacularRecipe {
  id: number;
  title: string;
  image: string;
  readyInMinutes: number;
  servings: number;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  instructions: string;
  extendedIngredients: {
    id: number;
    name: string;
    amount: number;
    unit: string;
    original: string;
  }[];
  nutrition?: {
    nutrients: { name: string; amount: number; unit: string }[];
  };
}

export interface SearchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
  readyInMinutes?: number;
}

// Search recipes by query and optional meal type (breakfast, lunch, dinner, etc.)
export const searchRecipes = async (
  query: string,
  mealType?: string,
  number = 12,
  offset = 0
): Promise<{ results: SearchResult[]; totalResults: number }> => {
  const { data } = await spoonacularClient.get("/recipes/complexSearch", {
    params: {
      query,
      type: mealType,
      number,
      offset,
      addRecipeInformation: false,
    },
  });
  return data;
};

// Get full recipe details by Spoonacular recipe ID
export const getRecipeById = async (id: number): Promise<SpoonacularRecipe> => {
  const { data } = await spoonacularClient.get(
    `/recipes/${id}/information`,
    { params: { includeNutrition: true } }
  );
  return data;
};

// Get a list of random popular recipes (used for Home page feature section)
export const getRandomRecipes = async (
  number = 6,
  tags?: string
): Promise<{ recipes: SpoonacularRecipe[] }> => {
  const { data } = await spoonacularClient.get("/recipes/random", {
    params: { number, tags },
  });
  return data;
};
