import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
export class Nutrition extends BaseEntity {
    @Column()
    description: string;

    @PrimaryColumn()
    nutritionname: string;


}