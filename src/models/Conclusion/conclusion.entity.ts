import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Diagnose } from "../Diagnose/diagnose.entity";
import { Illness } from "../Illness/illness.entity";

@Entity({name:"Conclusion"})
export class Conclusion extends BaseEntity {
    @PrimaryColumn()
    Illness: string;
    @Column()
    diagnose: string;

}