import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { getCustomRepositoryToken } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {
  constructor(private service: UserService) {}

  @Post()
  async createUser(@Body() data: User): Promise<User | null> {
    const new_user = await this.service.create(data);
    return new_user;
  }

  @Get()
  async getAll(): Promise<User[] | null> {
    return await this.service.getAllUsers();
  }

  @Get("/:id")
  async getOne(@Param("id") id: string): Promise<User | null> {
    const user = await this.service.getOneUser(id);
    return user;
  }
}
