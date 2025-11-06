import express, { Request, Response, NextFunction } from "express";

// Importem els routers de videos
import VideoRouter from "./routes/video.routes";

export function buildServer() {
  // Creem l'aplicació Express
  const app = express();

  // Utilitzem el middleware express.json per entende 
  // els JSON al cos de les peticions
  app.use(express.json());


  // Configurem l'aplicació per usar els routers/miniaplicacions
  // Tindrem un router (miniaplicació) para videos
  app.use("/api/videos", VideoRouter);

  app.use("*", function (req: Request, res: Response, next: NextFunction) {
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
