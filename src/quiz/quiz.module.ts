import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { Quiz } from './quiz.entity';
import { TypeOrmModule} from '@nestjs/typeorm';

@Module({
    controllers: [QuizController],
    imports: [TypeOrmModule.forFeature([Quiz])],
    providers: [QuizService],
})
export class QuizModule {}
