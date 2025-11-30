import { Request, Response, NextFunction } from "express";
import { CreateVideoUseCase } from "../../domain/usecases/video/CreateVideoUseCase";
import { GetVideoByIdUseCase } from "../../domain/usecases/video/GetVideoByIdUseCase";
import { GetVideosUseCase } from "../../domain/usecases/video/GetVideosUseCase";
import { GetVideoByTopicUseCase } from "../../domain/usecases/video/GetVideoByTopicUseCase";

/**
 * Controlador de vídeos: Se encarga de recibir las peticiones, proporcionar
 * a los diferentes casos de uso la información que necesitan para ejecutarse,
 * y a partir de la respuesta de los casos de uso, "presentar" la respuesta
 * para el usuario o aplicación cliente.
 */

export class VideoController {
    constructor(
        private createVideo: CreateVideoUseCase,      // Les funcions del controlador seran els casos d'ús
        private getVideos: GetVideosUseCase,
        private getVideoById: GetVideoByIdUseCase,
        private getVideoByTopic: GetVideoByTopicUseCase
    ) { }

    /**
     * Crea un nuevo video a parti de los datos proporcioandos en el cueerpo de la peticio.
     * @returns {Promise<void>} Promesa que resuelve cuando se ha creado el video y enviado la respuesta.
     */
    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.createVideo.execute(req.body);
            res.status(201).json(result);
        } catch (err) {
            next(err);
        }
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.getVideos.execute());
        } catch (err) {
            next(err);
        }
    }

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ message: "Video ID is required" })
            }

            const video = await this.getVideoById.execute(id);

            if (!video) {
                return res.status(404).json({ message: "Video not found" });
            }

            res.json(video);
        } catch (err) { next(err); }
    }

    getByTopic = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const topic = req.params.topic;

            if (!topic) {
                return res.status(400).json({ message: "Topic is required" })
            }

            const video = await this.getVideoByTopic.execute(topic);

            res.json(video);
        } catch (err) { next(err); }
    }
}

