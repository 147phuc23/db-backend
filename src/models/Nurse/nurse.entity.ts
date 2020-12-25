import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Nurse extends BaseEntity {
    @PrimaryGeneratedColumn()
    nssn: string;

    @Column()
    isFoodNurse: numbers;

}