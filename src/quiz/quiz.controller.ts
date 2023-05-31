import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common'
import { QuizService } from './quiz.service'
import { CreateQuiz } from './dto/CreateQuiz.dto';
import { UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz(){
        return this.quizService.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData:CreateQuiz) {
        return await this.quizService.createQuiz(quizData);
    }
}
