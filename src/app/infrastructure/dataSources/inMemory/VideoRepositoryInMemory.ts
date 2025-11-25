import { IVideoRepository } from "../../../domain/repositories/IVideoRepository";
import { Video } from "../../../domain/entities/Video";
import { VideoMapper } from "../../mappers/VideoMapper";
import { VideoRecord } from "./models/VideoRecord";
import { videos } from "../../../data/dades";

/**
 * Repositorio en memoria para la gestión de videos.
 * Implementa la intefaz IVideoRepository para desacoplar
 * la lógica de negocio de la persistencia de datos.
 * @class VideoRepositoryInMemory
 * @implements {IVideoRepository}
 */
export class VideoRepositoryInMemory implements IVideoRepository {

  /**
   * @private
   * @type {VideoRecord[]}
   * Almacena los registro de video sen memoria.
   */
  private records: VideoRecord[] = videos.map(v => ({
    ...v,
    createdAt: new Date().toISOString()
  }));

  /**
   * 
   * @param video Crea un nuevo video y lo almacen en el repositorio en memoria.
   * @returns {Promise<Video>} Una promesa que resuelve con el Video creado.
   */
  async create(video: Video): Promise<Video> {
    const newRecord: VideoRecord = VideoMapper.toRecord(video);

    this.records.push(newRecord);

    return video;
  }

  /**
   * Busca un video po su ID en el repositorio en memoria.
   * @param {String} id - El ID del video a buscar.
   * @returns {Promise<Video | null>} Una promesa que resuelve con el Video encontrado o null si no existe.
   */
  async findById(id: string): Promise<Video | null> {
    const record = this.records.find(v => v.id === id);
    return record ? VideoMapper.toDomain(record) : null;
  }

  /**
   * Devuelve todos los videos del repositorio en memoria
   * @returns {Promise<Video[]>} Una promesa que resuelve con una lista de todos los videos.
   */
  async findAll(): Promise<Video[]> {
    return this.records.map(VideoMapper.toDomain);
  }

  /**
   * Busca videos por tema (case) en le repositorio en memoria.
   * @param topic - El tema por el cual buscar videos.
   * @returns {Promise<Video[]>} Una promesa que resuelve con una lista de videos que coinciden con el tema.
   */
  async findByTopic(topic: string): Promise<Video[]> {
    const records = this.records.filter(record => record.topic.toLowerCase() === topic.toLowerCase()
    );
    return records.map(VideoMapper.toDomain);
  }
}
