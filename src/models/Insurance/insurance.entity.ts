import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Insurance"})
export class Insurance extends BaseEntity {
    @PrimaryColumn()
    id: number;

    @Column()
    expiry_date: number;

}