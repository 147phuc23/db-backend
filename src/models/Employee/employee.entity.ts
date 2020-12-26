import {Entity, PrimaryGeneratedColumn, Column, BaseEntity, PrimaryColumn} from "typeorm";

@Entity({name:"Employee"})
export class Employee extends BaseEntity {
    @PrimaryColumn()
    ssn: string;

    @Column({nullable: true})
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