import { Video } from "../../domain/entities/Video";
import { VideoRecord } from "../dataSources/inMemory/models/VideoRecord";

/**
 * Clase estática para mapear entre la entidad de dominio
 * `Video y le modelo de persistencia `VideoRecords`.
 */
export class VideoMapper {
    /**
     * Convierte un `VideoRecord` (q es el modelo de persistencia) a una entidad `Video` (dominio).
     * @param {VideoRecord} record - El registro de video de la capa de persistencia. 
     * @returns {Video} La entidad de cominio Video.
     */
    static toDomain(record: VideoRecord): Video {
        // Desestructuración de objetos.
        return {
            ...record
        };
    }

    /**
     * Convierte una entidad de dominio (Video) a un modelo de persistencia (VideoRecord).
     * @param {Video} video - La entidad de jdominio Video.
     * @returns {VideoRecord} El modelo de persistencia Video Record.
     */
    static toRecord(video: Video): VideoRecord {
        return {
            ...video,
        };
    }
}
