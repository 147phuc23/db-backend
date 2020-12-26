import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Manager"})
export class Manager extends BaseEntity {
    @PrimaryColumn()
    mssn: string;

    @Column()
    departmentName: string;

}