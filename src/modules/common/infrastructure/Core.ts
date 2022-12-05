import { ExecutionContext } from 'asimov-cqbus/dist/ExecutionContext'
import { CQBus, RequestResult } from 'asimov-cqbus/dist/CQBus'
import { Middleware } from 'asimov-cqbus/dist/Middleware'
import { Request } from 'asimov-cqbus/dist/requests/Request'
import { QuizzesModule } from '@/modules/quizzes/infrastructure/QuizzesModule'
import { QuizzesStorage } from '@/modules/quizzes/infrastructure/QuizzesStorage/QuizzesStorage'

export class Core {
    private readonly services: Services

    constructor(private config: CoreConfig) {
        this.services = { config }
        new QuizzesModule(this.services, this.config.quizzesStorage)
    }

    async execute<T extends Request<any>>(request: T, context = ExecutionContext.empty()): Promise<RequestResult<T>> {
        return this.config.cqBus.execute(request, context)
    }

    registerMiddleware(middleware: Middleware) {
        this.config.cqBus.registerMiddleware(middleware)
    }
}

export interface Services {
    config: CoreConfig,
}

export interface CoreConfig {
    cqBus: CQBus,
    quizzesStorage: QuizzesStorage
}
