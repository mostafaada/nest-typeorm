import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Location } from "./location.entity";

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location) private locationRepo: Repository<Location>
  ) {}

  async create(data): Promise<Location | null> {
    const result = await this.locationRepo.save(data);
    return result;
  }

  async getAll(): Promise<Location[] | null> {
    return await this.locationRepo.find();
  }

  async getOne(id): Promise<Location | null> {
    const result = await this.locationRepo.findOneBy({ id: id });
    return result;
  }
}
