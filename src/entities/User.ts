import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: "text", unique: true }) 
    username!: string;

    @Column({ type: "text", unique: true })
    email!: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt!: Date;
}