import { Question } from '@/modules/quizzes/models/Question'

export class Quizz {
    constructor(public title: string, public image: string, public questions: Question[]) {}
}