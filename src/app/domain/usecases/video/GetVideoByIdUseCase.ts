import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

/**
 * Caso de uso: Obtener un video por su ID.
 */
export class GetVideoByIdUseCase {
  constructor(private videoRepository: IVideoRepository) { }

  /**
   * Ejecuta la lógica para obtener un video por su ID.
   * @param {string} id - Identificador único dle video.
   * @returns {Promise<Video | null>} El vidoe encontrado o null si no existe.
   */
  async execute(id: string): Promise<Video | null> {
    try {
      const video = await this.videoRepository.findById(id);
      return video ?? null;
    } catch (error) {
      throw new Error("Error al obtener el video: " + error); // Pierde el contenido del error
    }
  }
}