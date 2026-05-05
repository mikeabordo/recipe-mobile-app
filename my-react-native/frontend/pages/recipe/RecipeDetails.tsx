import { useLocalSearchParams } from "expo-router";
import FullDetailsCard from "../../components/FullDetailsCard";

// --- Mock data: in a real app, you'd fetch this from an API using the `id` ---
const RECIPES: Record<string, any> = {
  "1": {
    id: "1",
    title: "Spaghetti Carbonara",
    description:
      "A classic Italian pasta dish made with eggs, cheese, cured pork, and black pepper. Rich, creamy, and utterly satisfying.",
    duration: "25 min",
    category: "Lunch",
    cuisine: "Italian",
    rating: 4.5,
    servings: 2,
    calories: 620,
    image: require("../../assets/images/sample-food.jpg"),
    ingredients: [
      "200g spaghetti",
      "100g pancetta or guanciale",
      "2 large eggs",
      "50g Pecorino Romano, grated",
      "50g Parmesan, grated",
      "2 cloves garlic",
      "Black pepper to taste",
      "Salt for pasta water",
    ],
    steps: [
      "Bring a large pot of salted water to a boil and cook spaghetti until al dente.",
      "Meanwhile, fry the pancetta in a large pan over medium heat until crispy. Add garlic and cook for 1 minute, then discard garlic.",
      "Whisk together eggs, Pecorino, and Parmesan in a bowl. Season generously with black pepper.",
      "Reserve 1 cup of pasta water before draining. Add hot pasta to the pancetta pan off the heat.",
      "Pour the egg mixture over the pasta, tossing quickly. Add pasta water a splash at a time until you get a creamy sauce.",
      "Serve immediately topped with extra cheese and black pepper.",
    ],
  },
};

export default function RecipeDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();

  // Fallback if the recipe ID isn't found in our mock data
  const recipe = RECIPES[id as string] ?? {
    id,
    title: `Recipe #${id}`,
    description: "Details for this recipe are not yet available.",
    duration: "—",
    category: "Unknown",
    cuisine: "Unknown",
    rating: 0,
    servings: 0,
    calories: 0,
    image: require("../../assets/images/sample-food.jpg"),
    ingredients: [],
    steps: [],
  };

  return <FullDetailsCard recipe={recipe} />;
}
