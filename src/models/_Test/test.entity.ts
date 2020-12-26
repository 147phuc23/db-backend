import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";

@Entity()
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