import { Photo } from "src/photo/photo.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  country: string;

  @OneToMany(() => Photo, (photo) => photo.location)
  photos: Photo[];
}
