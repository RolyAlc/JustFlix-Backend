import { Router } from "express";
import { CreateVideoUseCase } from "../../domain/usecases/video/CreateVideoUseCase";
import { GetVideoByIdUseCase } from "../../domain/usecases/video/GetVideoByIdUseCase";
import { GetVideosUseCase } from "../../domain/usecases/video/GetVideosUseCase";
import { VideoRepositoryInMemory } from "../../infrastructure/dataSources/inMemory/VideoRepositoryInMemory";
import { VideoController } from "../controllers/video.controller";
import { GetVideoByTopicUseCase } from "../../domain/usecases/video/GetVideoByTopicUseCase";

// Creem una implementació del repositori
const repository = new VideoRepositoryInMemory();

/**
 * Creem el Controlador per als videos, proporcionant-li
 * instàncies dels casos d'ús, que al seu temps hem inicialitzat
 * amb el repositori (injecció de dependències)
 */
const controller = new VideoController(
  new CreateVideoUseCase(repository),
  new GetVideosUseCase(repository),
  new GetVideoByIdUseCase(repository),
  new GetVideoByTopicUseCase(repository)
);

const VideoRouter = Router();
// Definim les rutes dins aquest router i enllacem amb les funcions corresponents del controlador.
VideoRouter.post("/", controller.create);
VideoRouter.get("/", controller.getAll);
VideoRouter.get("/:id", controller.getById);
VideoRouter.get("/topic/:topic", controller.getByTopic);

// Exportem el router
export default VideoRouter;
