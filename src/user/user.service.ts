import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Location } from "src/location/location.entity";
import { Photo } from "src/photo/photo.entity";
import { Repository } from "typeorm";
import { resourceLimits } from "worker_threads";
import { User } from "./user.entity";

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(data) {
    const new_user = await this.userRepo.save(data);
    return new_user;
  }

  async getAllUsers(): Promise<User[] | null> {
    const all = await this.userRepo.find({
      relationLoadStrategy: "join",
      relations: {
        photos: true,
      },
    });
    //
    const users = await this.userRepo
      .createQueryBuilder("user")
      .select()

      .innerJoinAndSelect("user.photos", "photo", "photo.userId = user.id")
      //.where("photo.userId = user.id")
      .innerJoinAndSelect("photo.location", "loc", "photo.locationId = loc.id")
      .getMany();

    //
    return users;
  }

  async getOneUser(id): Promise<User | null> {
    return await this.userRepo.findOneBy({ id: id });
  }
}
