import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
export class Illness extends BaseEntity {
    @PrimaryColumn()
    illnessname: string;

    @Column({name: 'illness_ssn'})
    illnessSsn: number
}