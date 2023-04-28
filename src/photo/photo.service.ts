import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Photo } from "./photo.entity";

@Injectable()
export class PhotoService {
  constructor(@InjectRepository(Photo) private photoRepo: Repository<Photo>) {}

  async create(data: Photo) {
    const result = await this.photoRepo.save({
      name: data.name,
      location: data.location,
      user: data.user,
    });
    console.log(result);

    return result;
  }

  async getAll(): Promise<Photo[]> {
    const result = await this.photoRepo.find({
      relations: {
        location: true,
        user: true,
      },
    });
    return result;
  }

  async getOne(id): Promise<Photo | null> {
    const result = await await this.photoRepo.findOne({
      where: {
        id: id,
      },
      relations: {
        location: true,
        user: true,
      },
    });
    return result;
  }
}
