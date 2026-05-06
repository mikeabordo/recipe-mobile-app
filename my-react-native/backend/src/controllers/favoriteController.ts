import { Request, Response, NextFunction } from "express";
import { prisma } from "../lib/prisma";
import { z } from "zod";

const addFavoriteSchema = z.object({
  recipeId: z.number().int().positive(),
  recipeTitle: z.string().min(1),
  recipeImage: z.string().url().optional(),
});

// GET /api/favorites  — list all favorites for the logged-in user
export const getFavorites = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).userId as string;

    const favorites = await prisma.favorite.findMany({
      where: { userId },
      orderBy: { savedAt: "desc" },
    });

    return res.json({ favorites });
  } catch (error) {
    next(error);
  }
};

// POST /api/favorites  — save a recipe
export const addFavorite = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).userId as string;

    const parsed = addFavoriteSchema.safeParse(req.body);
    if (!parsed.success) {
      return res.status(400).json({ error: parsed.error.flatten().fieldErrors });
    }

    const { recipeId, recipeTitle, recipeImage } = parsed.data;

    // upsert so duplicate saves don't throw an error
    const favorite = await prisma.favorite.upsert({
      where: { userId_recipeId: { userId, recipeId } },
      update: {},
      create: { userId, recipeId, recipeTitle, recipeImage },
    });

    return res.status(201).json({ favorite });
  } catch (error) {
    next(error);
  }
};

// DELETE /api/favorites/:recipeId  — remove a saved recipe
export const removeFavorite = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = (req as any).userId as string;
    const recipeId = parseInt(req.params.recipeId);

    if (isNaN(recipeId)) {
      return res.status(400).json({ error: "Invalid recipe ID" });
    }

    await prisma.favorite.deleteMany({
      where: { userId, recipeId },
    });

    return res.status(204).send();
  } catch (error) {
    next(error);
  }
};
