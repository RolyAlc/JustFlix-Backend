import { videos } from "../../../data/dades";
import { Video } from "../../../domain/entities/Video";
import { IVideoRepository } from "../../../domain/repositories/IVideoRepository";
import { VideoRecord } from "./models/VideoRecord";
import { VideoMapper } from "../../mappers/VideoMapper";

/**
 * Repositorio en memoria para la gestión de videos.
 * Implementa la intefaz IVideoRepository para desacoplar
 * la lógica de negocio de la persistencia de datos.
 * @implements {IVideoRepository}
 */
export class VideoRepositoryInMemory implements IVideoRepository {
  // Alamcenamiento en memoria
  private Video: VideoRecord[] = videos;

  /**
   * Almacena los registro de videos en memoria.
   */
  async create (Video: Video){
    const record = VideoMapper.toRecord(Video);
    this.Video.push(record);
    return VideoMapper.toDomain(record);
  }

  /**
   * Busca un video po su ID en el repositorio en memoria.
   * @param {String} id - El ID del video a buscar.
   * @returns {Promise<Video | null>} Una promesa que resuelve con el Video encontrado o null si no existe.
   */
  async findById(id: string): Promise<Video | null> {
    const record = this.Video.find(v => v.id === id);
    return record ? VideoMapper.toDomain(record) : null;
  }

  /**
   * Devuelve todos los videos del repositorio en memoria
   * @returns {Promise<Video[]>} Una promesa que resuelve con una lista de todos los videos.
   */
  async findAll(): Promise<Video[]> {
    return this.Video.map(v => VideoMapper.toDomain(v));
  }

  /**
   * Busca videos por tema (case) en le repositorio en memoria.
   * @param topic - El tema por el cual buscar videos.
   * @returns {Promise<Video[]>} Una promesa que resuelve con una lista de videos que coinciden con el tema.
   */
  async findByTopic(topic: string): Promise<Video[]> {
    const records = this.Video.filter(record => record.topic.toLowerCase() === topic.toLowerCase());
    return records.map(VideoMapper.toDomain);
  }
}
