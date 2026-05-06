import { apiRequest } from "./apiClient";

export interface Favorite {
  id: string;
  recipeId: number;
  recipeTitle: string;
  recipeImage?: string;
  savedAt: string;
}

// GET /api/favorites
export const getFavorites = (): Promise<{ favorites: Favorite[] }> =>
  apiRequest<{ favorites: Favorite[] }>("/favorites", { requiresAuth: true });

// POST /api/favorites
export const addFavorite = (
  recipeId: number,
  recipeTitle: string,
  recipeImage?: string
): Promise<{ favorite: Favorite }> =>
  apiRequest<{ favorite: Favorite }>("/favorites", {
    method: "POST",
    body: { recipeId, recipeTitle, recipeImage },
    requiresAuth: true,
  });

// DELETE /api/favorites/:recipeId
export const removeFavorite = (recipeId: number): Promise<void> =>
  apiRequest<void>(`/favorites/${recipeId}`, {
    method: "DELETE",
    requiresAuth: true,
  });
