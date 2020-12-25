import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Illness extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    illnessname: string;

    @Column({name: 'illness_ssn'})
    illnessSsn: number
}