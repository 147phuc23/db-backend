import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Nutrition extends BaseEntity {
    @Column()
    description: string;

    @PrimaryGeneratedColumn()
    nutritionname: string;


}