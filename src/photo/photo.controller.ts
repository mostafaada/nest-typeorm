import { Controller, Get, Post, Patch, Body, Param } from "@nestjs/common";
import { Photo } from "./photo.entity";
import { PhotoService } from "./photo.service";

@Controller("photo")
export class PhotoController {
  constructor(private service: PhotoService) {}

  @Post()
  async createPhoto(@Body() data: Photo): Promise<Photo | null> {
    const res = await this.service.create(data);
    return res;
  }

  @Get()
  async getAllPhotos(): Promise<Photo[] | null> {
    return await this.service.getAll();
  }

  @Get("/:id")
  async getOnePhoto(@Param("id") id: string): Promise<Photo | null> {
    const res = await this.service.getOne(id);
    return res;
  }
}
