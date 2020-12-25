import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Doctor extends BaseEntity {
    @Column()
    year_exp: number;

    @Column()
    departmentName: string;

    @PrimaryGeneratedColumn({name: 'dssn'})
    dssn: number
}