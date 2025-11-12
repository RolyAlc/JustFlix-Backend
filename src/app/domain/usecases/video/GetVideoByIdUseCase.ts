import { IVideoRepository } from "../../repositories/IVideoRepository";

export class GetVideoByIdUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) {}

  async execute(id: string) {
    return this.videoRepository.findById(id);
  }
}