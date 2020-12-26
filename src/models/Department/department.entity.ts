import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Department"})
export class Department extends BaseEntity {
    @PrimaryColumn()
    dname: string;

    @Column()
    depiction: string;

}