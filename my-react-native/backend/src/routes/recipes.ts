import { Router } from "express";
import { search, getRandom, getById } from "../controllers/recipeController";

const router = Router();

// GET /api/recipes/search?query=pasta&mealType=lunch
router.get("/search", search);

// GET /api/recipes/random?mealType=breakfast&number=6
router.get("/random", getRandom);

// GET /api/recipes/:id
router.get("/:id", getById);

export default router;
