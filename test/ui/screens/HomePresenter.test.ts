import { HomePresenter } from '@/ui/screens/home/HomePresenter'
import { Core } from '@/modules/common/infrastructure/Core'
import { instance, mock, verify } from 'ts-mockito'
import { NextJsRouter } from '@/ui/services/router/NextJsRouter'

test('on click on some quiz title should navigate to this page', () => {
    presenter.toQuiz(1)

    verify(router.navigate('quizzes/1')).called()
})

beforeEach(() => {
    core = mock<Core>()
    router = mock<NextJsRouter>()
    presenter = new HomePresenter(() => {}, instance(core), instance(router))
})

let core: Core
let router: NextJsRouter
let presenter: HomePresenter