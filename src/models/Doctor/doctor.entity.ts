import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name: "Doctor"})
export class Doctor extends BaseEntity {
    @Column()
    year_exp: number;

    @Column()
    departmentName: string;

    @PrimaryColumn({name: 'dssn'})
    dssn: number
}