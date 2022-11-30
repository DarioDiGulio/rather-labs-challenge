import { Question } from '@/modules/quizzes/models/Question'

export class Quizs {
    constructor(public title: string, public image: string, public questions: Question[]) {}
}