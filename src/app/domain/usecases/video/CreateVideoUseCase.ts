import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

interface CreateVideoDTO {
  id: string,
  topic: string,
  description: string,
  duration: number,
  thumbnail: string,
  videoUrl: string,
}

/**
 * Caso de uso: Creación de un nuevo vídeo.
 */
export class CreateVideoUseCase {
  constructor(private videoRepository: IVideoRepository) { }

  /**
   * Crea un vídeo en el repositorio.
   */
  async execute({ id, topic, description, duration, thumbnail, videoUrl }: CreateVideoDTO) {
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
      const video = await this.videoRepository.create({ id, topic, description, duration, thumbnail, videoUrl });
      return video;
    }
    catch (error) {
      throw new Error("Error al crear el video: " + error); // Pierde el contenido del error
    }
  }
}
