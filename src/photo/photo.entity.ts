import { Location } from "src/location/location.entity";
import { User } from "src/user/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Location, (location) => location.photos)
  location: Location;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
