import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Insurance extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    expiry_date: number;

}