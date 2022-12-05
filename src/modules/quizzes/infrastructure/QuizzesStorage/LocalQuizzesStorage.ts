import { QuizzesStorage } from '@/modules/quizzes/infrastructure/QuizzesStorage/QuizzesStorage'
import { Quizz } from '@/modules/quizzes/models/Quizz'

export class LocalQuizzesStorage implements QuizzesStorage {
    getIds(): string[] {
        return []
    }

    getQuizzes(): Quizz[] {
        return []
    }
}