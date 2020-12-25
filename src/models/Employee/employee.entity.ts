import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
export class Employee extends BaseEntity {
    @PrimaryGeneratedColumn()
    ssn: string;

    @Column()
    ename: string;

    @Column()
    bdate: number;
    @Column()
    gender: string;
    @Column()
    phone_number: string;
    @Column()
    salary: number;
}