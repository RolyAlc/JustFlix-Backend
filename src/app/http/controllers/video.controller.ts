import { Request, Response, NextFunction } from "express";
import { CreateVideoUseCase } from "../../domain/usecases/video/CreateVideoUseCase";
import { GetVideoByIdUseCase } from "../../domain/usecases/video/GetVideoByIdUseCase";
import { GetVideosUseCase } from "../../domain/usecases/video/GetVideosUseCase";

/**
 * Controlador dels productes: S'encarrega de rebre les peticions, proporcionar-li
 * als diferents casos d'ús la informació que necessiten per executar-se, i a partir 
 * de la resposta dels casos d'us, "presentar" la resposta per a l'usuari o aplicació client.
 */

export class VideoController {
    constructor(
        private createVideo: CreateVideoUseCase,      // Les funcions del controlador seran els casos d'ús
        private getVideos: GetVideosUseCase,
        private getVideoById: GetVideoByIdUseCase
    ) { }

    create = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.createVideo.execute(
                req.body.id,
                req.body.topic,
                req.body.description,
                req.body.duration,
                req.body.thumbnail,
            );
            res.status(201).json(result);
        } catch (err) { next(err); }
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            res.json(await this.getVideos.execute());
        } catch (err) { next(err); }
    }

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const id = req.params.id;

            if (!id) {
                return res.status(400).json({ message: "Video Id is required"})
            }
            const video = await this.getVideoById.execute(id);
            
            if (!video) {
                return res.status(404).json({ message: "Video not found" });
            } 
            
            res.json(video);
        } catch (err) { next(err); }
    }
}

