import { Video } from "../entities/Video";

// Definim el comportament del repositori de video
export interface IVideoRepository {
  /**
   * Mètode create: Crea un nou video. Retorna una promesa amb el video creat
   */
  create(video: Video): Promise<Video>;
  
  /**
   * Mètode per buscar un video per id. Retorna una promesa amb el video
   */
  findById(id: string): Promise<Video | null>;
  
  /**
   * Mètode per Obtenir tots el videos. També torna la llista de Videos en un Promise
   */
  findAll(): Promise<Video[]>;

  /**
   * Mètode per buscar un video per topic. Retorna una promesa lista con el/los video/s
   */
  findByTopic(topic: string): Promise<Video[]>;
}