import { IVideoRepository } from "../../../domain/repositories/IVideoRepository";
import { Video } from "../../../domain/entities/Video";
import { VideoMapper } from "../../mappers/VideoMapper";
import { VideoRecord } from "./models/VideoRecord";
import { videos } from "../../../data/dades";

export class VideoRepositoryInMemory implements IVideoRepository {
  private records: VideoRecord[] = videos.map(v => ({
    ...v,
    createdAt: new Date().toISOString()
  }));

  async create(video: Video): Promise<Video> {
    const newRecord: VideoRecord = VideoMapper.toRecord(video);

    this.records.push(newRecord);

    return video;
  }

  async findById(id: string): Promise<Video | null> {
    const record = this.records.find(v => v.id === id);
    return record ? VideoMapper.toDomain(record) : null;
  }

  async findAll(): Promise<Video[]> {
    return this.records.map(VideoMapper.toDomain);
  }

  async findByTopic(topic: string): Promise<Video[]> {
    const records = this.records.filter(record => record.topic.toLowerCase() === topic.toLowerCase()
  );
  return records.map(VideoMapper.toDomain);
  }
}
