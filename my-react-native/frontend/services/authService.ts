import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiRequest } from "./apiClient";

export interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthResponse {
  token: string;
  user: User;
}

// POST /api/auth/register
export const register = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const data = await apiRequest<AuthResponse>("/auth/register", {
    method: "POST",
    body: { name, email, password },
  });
  await AsyncStorage.setItem("auth_token", data.token);
  return data;
};

// POST /api/auth/login
export const login = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const data = await apiRequest<AuthResponse>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
  await AsyncStorage.setItem("auth_token", data.token);
  return data;
};

// GET /api/auth/me
export const getMe = async (): Promise<User> => {
  const data = await apiRequest<{ user: User }>("/auth/me", {
    requiresAuth: true,
  });
  return data.user;
};

// Logout — just clears the local token
export const logout = async (): Promise<void> => {
  await AsyncStorage.removeItem("auth_token");
};

// Check if a token exists in storage (for app startup auth check)
export const isLoggedIn = async (): Promise<boolean> => {
  const token = await AsyncStorage.getItem("auth_token");
  return !!token;
};
