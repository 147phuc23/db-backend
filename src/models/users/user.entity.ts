import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity("User")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column({name: 'user_ssn'})
    password: string;
}