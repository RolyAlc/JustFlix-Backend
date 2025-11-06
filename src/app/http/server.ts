import express, { Request, Response, NextFunction } from "express";
import VideoRouter from "./routes/video.routes";

export function buildServer() {
  const app = express();

  app.use(express.json());

  app.get('/', (req, res) => {
    res.send("Servidor activo.");
  });

  app.use("/api/videos", VideoRouter);

  app.use(function (req: Request, res: Response, next: NextFunction) {
    res.status(404).json({ message: "Resource not found" });
  });

  app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err); // Log per consola (o logger a futur)

    // Si ja té codi d'estat assignat; l’utilitzem
    const status = err.status || 500;

    res.status(status).json({
      error: true,
      message: err.message || "Internal server error",
    });
  });

  return app;
}
