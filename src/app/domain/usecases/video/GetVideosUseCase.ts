import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

/**
 * Caso de uso: Obtener todos los videos.
 */
export class GetVideosUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) { }

  /**
   * Recupera todos los vídeos disponibles en el repositorio.
   * @returns {Promise<Video[]>} Lista de videos encontrados. Puede estar vacía si no hay registros.
   */
  async execute(): Promise<Video[]> {
    try {
      const videos = await this.videoRepository.findAll();
      return videos ?? []; // Evitar q devuelva undefined.
    } catch (error) {
      throw new Error("Error al obtener videos: " + error); // Pierde el contenido del error
    }
  }
}