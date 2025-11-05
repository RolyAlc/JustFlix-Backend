import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

export class CreateVideoUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) {}

  async execute(
    id: string,
    topic: string,
    description: string,
    duration: number,
    thumbnail: string
  ): Promise<Video> {
    // Validar que no existe un vídeo con el mismo id
    const existingVideo = await this.videoRepository.findById(id);
    
    if (existingVideo) {
      throw new Error(`El vídeo con el id '${id} ya existe'`);
    }

    const video = await this.videoRepository.create({
      id,
      topic,
      description,
      duration,
      thumbnail
    });

    return video;
  }
}
