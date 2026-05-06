import { Request, Response, NextFunction } from "express";
import * as spoonacular from "../services/spoonacular";

// GET /api/recipes/search?query=pasta&mealType=lunch&page=1
export const search = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { query = "", mealType, page = "1" } = req.query;
    const pageNum = Math.max(1, parseInt(page as string));
    const number = 12;
    const offset = (pageNum - 1) * number;

    const data = await spoonacular.searchRecipes(
      query as string,
      mealType as string | undefined,
      number,
      offset
    );

    return res.json({
      results: data.results,
      totalResults: data.totalResults,
      page: pageNum,
      totalPages: Math.ceil(data.totalResults / number),
    });
  } catch (error) {
    next(error);
  }
};

// GET /api/recipes/random?mealType=breakfast
export const getRandom = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { mealType, number = "6" } = req.query;
    const data = await spoonacular.getRandomRecipes(
      parseInt(number as string),
      mealType as string | undefined
    );
    return res.json(data);
  } catch (error) {
    next(error);
  }
};

// GET /api/recipes/:id
export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    const recipe = await spoonacular.getRecipeById(id);
    return res.json(recipe);
  } catch (error: any) {
    // Spoonacular returns 404 if recipe not found
    if (error?.response?.status === 404) {
      return res.status(404).json({ error: "Recipe not found" });
    }
    next(error);
  }
};
