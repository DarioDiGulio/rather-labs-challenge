import { QuizzesStorage } from '@/modules/quizzes/infrastructure/QuizzesStorage/QuizzesStorage'
import { Quizz } from '@/modules/quizzes/models/Quizz'
import fs from 'fs'

export class LocalQuizzesStorage implements QuizzesStorage {
    getIds(): string[] {
        fs.readdir(`${ global.appRoot }/resources/quizzes/`, (err, files) => {
            files.forEach(file => {
                console.log(file)
            })
        })
        return []
    }

    getQuizzes(): Quizz[] {
        return []
    }
}