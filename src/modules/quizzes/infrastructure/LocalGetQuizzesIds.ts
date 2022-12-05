import { RequestHandler } from 'asimov-cqbus/dist/requests/handlers/RequestHandler'
import { GetQuizzesIds, GetQuizzesIdsResponse } from '@/modules/quizzes/app/GetQuizzesIds'
import { QuizzesStorage } from '@/modules/quizzes/infrastructure/QuizzesStorage/QuizzesStorage'

export class LocalGetQuizzesIds implements RequestHandler<GetQuizzesIds, GetQuizzesIdsResponse> {
    constructor(private quizzesStorage: QuizzesStorage) {}

    async handle(request: GetQuizzesIds): Promise<GetQuizzesIdsResponse> {
        return { ids: this.quizzesStorage.getIds() }
    }
}
