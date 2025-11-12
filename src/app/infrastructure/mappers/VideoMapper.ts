// Mapper. Mapeja la representació de la capa de persistència a la capa de domini.

import { Video } from "../../domain/entities/Video";
import { VideoRecord } from "../dataSources/inMemory/models/VideoRecord";

export class VideoMapper {
    static toDomain( record: VideoRecord ): Video {
        // Desestructuración de objetos.
        const { createdAt, ...domainData } = record;
        // Devolver solamente los datos q se correspondan con la entidad de dominio.
        return domainData;
    }

    /**
     * Convierte una entidad de dominio (Video) a un modelo de persistencia (VideoRecord).
     * Su trabajo es añadir los campos necesarios para la persistencia que no existen
     * en el dominio.
     */
    static toRecord(video: Video): VideoRecord {
        return {
            ...video,
            createdAt: new Date().toISOString()
        };
    }
}
