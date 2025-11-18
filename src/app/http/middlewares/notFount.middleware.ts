import { Request, Response, NextFunction } from "express";

/**
 * Middleware para rutas no encontradas.
 * Se ejecuta si ningúna ruta previa coincide.
 */
export function notFoundMiddleware(
    req: Request,
    res: Response,
) {
    res.status(404).json({ message: "Resource not found" });
}