import express, { Request, Response, NextFunction } from "express";
import VideoRouter from "./routes/video.routes";
import { errorMiddleware } from "./middlewares/error.middleware";
import { notFoundMiddleware } from "./middlewares/notFound.middleware";
import cors from "cors";

/**
 * Inicializa y configura la aplicaicón Express
 * 
 * @returns {express.Application} Instancia de la aplicación configurada.
 */
export function buildServer(): express.Application {
  const app = express();

  // Middlewares globales
  app.use(express.json());
  app.use(cors());

  // Servir archivos estáticos
  app.use(express.static('public'));

  // Endpoint base para verificar el estaod del servidor.
  app.get('/', (req, res) => {
    res.send("Servidor activo.");
  });

  // Rutas principales
  app.use("/api/videos", VideoRouter);

  // Middleware para recursos no encontrados.
  app.use(notFoundMiddleware);
  // Middleware de manejo global de errores.
  app.use(errorMiddleware);

  return app;
}
