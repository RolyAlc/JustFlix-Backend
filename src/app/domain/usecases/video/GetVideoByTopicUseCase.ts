import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

/**
 * Caso de uso: Obtener un video por su Topic.
 */
export class GetVideoByTopicUseCase {
  constructor(private videoRepository: IVideoRepository) { }

  /**
   * Obtenr todos los videos que coinciden con el topic dado.
   * @param {string} topic - Topic para filtrar los videos.
   * @returns {Promise<Video[]>} Lista de videos encontrados. Puede estar vacía si no hay registros.
   */
  async execute(topic: string): Promise<Video[]> {
    try {
      const videos = await this.videoRepository.findByTopic(topic);
      return videos ?? []; // Evitar q devuelva undefined.
    } catch (error) {
      throw new Error("Error al obtener videos: " + error); // Pierde el contenido del error
    }
  }
}