import { IVideoRepository } from "../../repositories/IVideoRepository";
import { Video } from "../../entities/Video";

export class GetVideoByTopicUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) {}

  async execute(topic: string): Promise<Video[]> {
    const videos = await this.videoRepository.findByTopic(topic);
    return videos;
  }
}