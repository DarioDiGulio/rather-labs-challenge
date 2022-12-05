import { DefaultPresenter } from '@/modules/common/base/presenters/DefaultPresenter'
import { ChangeFunc } from '@/modules/common/base/presenters/ChangeFunc'
import { Core } from '@/modules/common/infrastructure/Core'
import { NextJsRouter } from '@/ui/services/router/NextJsRouter'
import { GetQuizzesIds } from '@/modules/quizzes/app/GetQuizzesIds'

export class HomePresenter extends DefaultPresenter<HomeVM> {
    constructor(private changeFunc: ChangeFunc, private core: Core, private router: NextJsRouter) {
        super(changeFunc)
    }

    async start() {
        const ids = await this.core.execute(new GetQuizzesIds())
        console.log(ids)
    }

    toQuiz(id: number) {
        this.router.navigate(`quizzes/${id}`)
    }
}

export class HomeVM {
    isLoading = false
    quizzes = []
}