// Mapper. Mapeja la representació de la capa de persistència a la capa de domini.

import { Video } from "../../domain/entities/Video";
import { VideoRecord } from "../dataSources/inMemory/models/VideoRecord";

/**
 * @class VideoMapper
 * Clase estática para mapear entre la entidad de dominio `Video y le modelo de persistencia `VideoRecords`.
 * Encargada de convertir la representación de la capa de persistencia a la capa de dominio y viceversa.
 */
export class VideoMapper {
    /**
     * Convierte un `VideoRecord` (q es el modelo de persistencia) a una entidad `Video` (dominio).
     * Excluye lso campos que son especificos de la persistencia y no forma parte del dominio, como `createAt`
     * @param {VideoRecord} record - El registro de video de la capa de persistencia. 
     * @returns {Video} La entidad de cominio Video.
     */
    static toDomain(record: VideoRecord): Video {
        // Desestructuración de objetos.
        const { createdAt, ...domainData } = record;
        // Devolver solamente los datos q se correspondan con la entidad de dominio.
        return domainData;
    }

    /**
     * Convierte una entidad de dominio (Video) a un modelo de persistencia (VideoRecord).
     * Su trabajo es añadir los campos necesarios para la persistencia que no existen, como `createAt`
     * en el dominio.
     * @param {Video} video - La entidad de jdominio Video.
     * @returns {VideoRecord} El modelo de persistencia Video Record.
     */
    static toRecord(video: Video): VideoRecord {
        return {
            ...video,
            createdAt: new Date().toISOString()
        };
    }
}
