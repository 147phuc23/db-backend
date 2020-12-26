import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"InPatient"})
export class InPatient extends BaseEntity {
    @PrimaryColumn()
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