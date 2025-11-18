import { Request, Response, NextFunction } from "express";

/**
 * Middleware global para manejo de errores.
 * 
 */
export function errorMiddleware(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.error("[ERROR] - ", error.stack);

    const statusCode = error.status ?? 500;

    res.status(statusCode).json({
        error: true,
        message: error.message || "Internal server error",
    });
}
