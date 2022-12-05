import { Services } from '@/modules/common/infrastructure/Core'
import { GetQuizzesIds } from '@/modules/quizzes/app/GetQuizzesIds'
import { LocalGetQuizzesIds } from '@/modules/quizzes/infrastructure/LocalGetQuizzesIds'
import { QuizzesStorage } from '@/modules/quizzes/infrastructure/QuizzesStorage/QuizzesStorage'

export class QuizzesModule {
    constructor(private services: Services, public quizzesStorage: QuizzesStorage) {
        services.config.cqBus.registerHandler(GetQuizzesIds, () => new LocalGetQuizzesIds(quizzesStorage))
    }
}
