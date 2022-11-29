import { DefaultPresenter } from '../../modules/common/base/presenters/DefaultPresenter'
import { ChangeFunc } from '../../modules/common/base/presenters/ChangeFunc'

export class HomePresenter extends DefaultPresenter<HomeVM> {
    constructor(private changeFunc: ChangeFunc) {
        super(changeFunc)
    }
}

export class HomeVM {
    isLoading = false
}