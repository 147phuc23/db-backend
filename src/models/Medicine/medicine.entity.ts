import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity()
export class Medicine extends BaseEntity {
    @PrimaryColumn()
    mname: string;

    @Column()
    expiry_date: number;

}