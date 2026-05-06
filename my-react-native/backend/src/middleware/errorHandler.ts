import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error("[Error]", err);

  // Axios errors from Spoonacular
  if (err?.response?.data) {
    return res.status(err.response.status || 502).json({
      error: "Upstream API error",
      detail: err.response.data,
    });
  }

  const status = err.status ?? err.statusCode ?? 500;
  const message = err.message ?? "Internal server error";

  return res.status(status).json({ error: message });
};
