import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Illness"})
export class Illness extends BaseEntity {
    @PrimaryColumn()
    illness_name: string;

    @Column()
    depiction: string
}