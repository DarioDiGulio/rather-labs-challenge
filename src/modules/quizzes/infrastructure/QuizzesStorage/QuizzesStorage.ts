import { Quizz } from '@/modules/quizzes/models/Quizz'

export interface QuizzesStorage {
    getIds(): string[]
    getQuizzes(): Quizz[]
}