import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuiz } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService{

    constructor(@InjectRepository(Quiz) private quizRepository: QuizRepository){}
    getAllQuiz(){
        return [1,2,3];
    }

    async createQuiz(quiz: CreateQuiz){
        return await this.quizRepository.save(quiz);
    }
}