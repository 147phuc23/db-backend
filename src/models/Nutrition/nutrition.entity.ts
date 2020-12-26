import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Nutrition"})
export class Nutrition extends BaseEntity {
    @Column()
    depiction: string;

    @PrimaryColumn()
    nutrition_name: string;


}