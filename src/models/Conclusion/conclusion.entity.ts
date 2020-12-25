import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Conclusion extends BaseEntity {
    @PrimaryGeneratedColumn()
    Illness: string;

    @Column()
    diagnose: string;

}