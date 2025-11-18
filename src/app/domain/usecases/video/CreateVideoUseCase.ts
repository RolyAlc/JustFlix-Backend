import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

/**
 * Caso de uso: Creación de un nuevo vídeo.
 */
export class CreateVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) { }

  /**
   * Crea un vídeo en el repositorio.
   * 
   * @param id - Identificador único del vídeo.
   * @param topic - Categoría del vídeo.
   * @param description - Descripción detallada del vídeo.
   * @param duration - Duración del vídeo en segundos.
   * @param thumbnail - URL de la miniatura del vídeo.
   * @param videoUrl - URL del archivo de reproducción HLS del vídeo.
   * @returns {Promise<Video>} Una promesa que resuelve con el objeto Video creado.
   */
  async execute(
    id: string,
    topic: string,
    description: string,
    duration: number,
    thumbnail: string,
    videoUrl: string,
  ): Promise<Video> {
    // Validad parámetros obligatorios.
    if (!id || !topic || !description || !duration || !thumbnail || !videoUrl) {
      throw new Error("Todos los campos son obligatorios para crear el video.");
    }

    try {
      // Validar que no existe un vídeo con el mismo id.
      const existingVideo = await this.videoRepository.findById(id);

      if (existingVideo) {
        throw new Error(`El vídeo con el id '${id} ya existe'`);
      }

      // Crear video.
      const video = await this.videoRepository.create({
        id,
        topic,
        description,
        duration,
        thumbnail,
        videoUrl
      });

      return video;
    } catch (error) {
      throw new Error("Error al crear el video: " + error); // Pierde el contenido del error
    }
  }
}
