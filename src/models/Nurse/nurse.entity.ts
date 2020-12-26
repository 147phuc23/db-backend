import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Nurse"})
export class Nurse extends BaseEntity {
    @PrimaryColumn()
    nssn: string;

    @Column()
    isFoodNurse: number;

}