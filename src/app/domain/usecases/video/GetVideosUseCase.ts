import { IVideoRepository } from "../../repositories/IVideoRepository";

export class GetVideosUseCase {
  constructor(
    private videoRepository: IVideoRepository
  ) {}

  async execute() {
    return this.videoRepository.findAll();
  }
}