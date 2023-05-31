import {Entity, BaseEntity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('quiz')
export class Quiz extends BaseEntity{
    @PrimaryGeneratedColumn({
        comment: 'quiz id',
    })
    id: number;

    @Column({type: 'varchar'})
    title: string;

    @Column({type: 'text'})
    description: string; 

}
