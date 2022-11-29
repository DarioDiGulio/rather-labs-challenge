import { HomePresenter } from './screens/HomePresenter'

export class PresenterFactory {

    home = (onChange) => new HomePresenter(onChange)
}
