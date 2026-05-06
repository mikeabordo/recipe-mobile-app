import { apiRequest } from "./apiClient";

export interface Recipe {
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
}

export interface SearchResult {
  id: number;
  title: string;
  image: string;
  imageType: string;
}

interface SearchResponse {
  results: SearchResult[];
  totalResults: number;
  page: number;
  totalPages: number;
}

// Search recipes — maps to GET /api/recipes/search
export const searchRecipes = (
  query: string,
  mealType?: string,
  page = 1
): Promise<SearchResponse> => {
  const params = new URLSearchParams({ query, page: String(page) });
  if (mealType && mealType !== "All") params.append("mealType", mealType);
  return apiRequest<SearchResponse>(`/recipes/search?${params}`);
};

// Get random recipes for the home feed — maps to GET /api/recipes/random
export const getRandomRecipes = (
  number = 6,
  mealType?: string
): Promise<{ recipes: Recipe[] }> => {
  const params = new URLSearchParams({ number: String(number) });
  if (mealType && mealType !== "All") params.append("mealType", mealType);
  return apiRequest<{ recipes: Recipe[] }>(`/recipes/random?${params}`);
};

// Get full recipe details — maps to GET /api/recipes/:id
export const getRecipeById = (id: number): Promise<Recipe> =>
  apiRequest<Recipe>(`/recipes/${id}`);
