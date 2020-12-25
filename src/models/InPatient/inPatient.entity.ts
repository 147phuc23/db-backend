import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class InPatient extends BaseEntity {
    @PrimaryGeneratedColumn()
    issn: string;

    @Column()
    room: number;

    @Column()
    position: string;
    @Column()
    indoctorssn: string;
    @Column()
    outdoctorssn: string;
}