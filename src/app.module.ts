import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Photo } from "./photo/photo.entity";
import { PhotoModule } from "./photo/photo.module";
import { LocationModule } from "./location/location.module";
import { Location } from "./location/location.entity";
import { UserModule } from "./user/user.module";
import { User } from "./user/user.entity";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: ".",
      database: "demo",
      entities: [Photo, Location, User],
      synchronize: true,
      dropSchema: false,
    }),
    PhotoModule,
    LocationModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
