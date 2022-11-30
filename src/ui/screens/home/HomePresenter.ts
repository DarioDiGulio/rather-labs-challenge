import { DefaultPresenter } from '@/modules/common/base/presenters/DefaultPresenter'
import { ChangeFunc } from '@/modules/common/base/presenters/ChangeFunc'
import { Core } from '@/modules/common/infrastructure/Core'
import { NextJsRouter } from '@/ui/services/router/NextJsRouter'

export class HomePresenter extends DefaultPresenter<HomeVM> {
    constructor(private changeFunc: ChangeFunc, private core: Core, private router: NextJsRouter) {
        super(changeFunc)
    }

    async start() {

    }

    toQuiz(id: number) {
        this.router.navigate(`quizzes/${id}`)
    }
}

export class HomeVM {
    isLoading = false
}