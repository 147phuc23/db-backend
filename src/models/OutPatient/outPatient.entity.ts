import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"OutPatient"})
export class OutPatient extends BaseEntity {
    @PrimaryColumn()
    ossn: string;

    @Column()
    next_examinate_date: Date;
}