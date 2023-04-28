import { Controller, Get, Post, Patch, Body, Param } from "@nestjs/common";
import { Location } from "./location.entity";
import { LocationService } from "./location.service";

@Controller("location")
export class LocationController {
  constructor(private service: LocationService) {}

  @Post()
  async createLocation(@Body() data: Location): Promise<Location | null> {
    const loc = await this.service.create(data);
    return loc;
  }

  @Get()
  async getAllLocations(): Promise<Location[] | null> {
    return await this.service.getAll();
  }

  @Get("/:id")
  async getOneLocation(@Param("id") id: string): Promise<Location | null> {
    const res = await this.service.getOne(id);
    return res;
  }
}
