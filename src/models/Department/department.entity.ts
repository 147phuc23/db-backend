import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
export class Department extends BaseEntity {
    @PrimaryColumn()
    dname: string;

    @Column()
    depiction: string;

}