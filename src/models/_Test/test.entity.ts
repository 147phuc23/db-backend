import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity({name: "Test"})
export class Test extends BaseEntity {
    @PrimaryGeneratedColumn()
    test_name: string;

    @Column()
    min: number;

    @Column()
    max: number;
    @Column()
    normal: number;
}