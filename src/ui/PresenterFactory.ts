import { HomePresenter } from './screens/home/HomePresenter'
import { WebAppConfig } from '@/ui/WebApp'

export class PresenterFactory {
    constructor(private config: WebAppConfig) {}

    home = (onChange) => new HomePresenter(onChange, this.config.core, this.config.router)
}
