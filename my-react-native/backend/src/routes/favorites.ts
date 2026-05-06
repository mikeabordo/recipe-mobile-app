import { Router } from "express";
import { getFavorites, addFavorite, removeFavorite } from "../controllers/favoriteController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

// All favorites routes require authentication
router.use(authMiddleware);

router.get("/", getFavorites);
router.post("/", addFavorite);
router.delete("/:recipeId", removeFavorite);

export default router;
