import { PresenterFactory } from './PresenterFactory'
import React from 'react'
import { MainLayout } from './layouts/MainLayout'
import { Router } from '@/ui/services/router/Router'
import { NextJsRouter } from '@/ui/services/router/NextJsRouter'
import { Core } from '@/modules/common/infrastructure/Core'
import { CQBus } from 'asimov-cqbus/dist/CQBus'

export class WebApp {
    private readonly presenters: PresenterFactory

    constructor(private config: WebAppConfig) {
        this.presenters = new PresenterFactory(config)
    }

    render = (PageComponent, pageProps = {}) => (
        <MainLayout presenters={ this.presenters }>
            <PageComponent { ...pageProps } />
        </MainLayout>
    )
}

export interface WebAppConfig {
    core: Core,
    router: Router,
}

export const defaultWebAppConfig = (): WebAppConfig => {
    return {
        core: new Core({
            cqBus: new CQBus(),
        }),
        router: new NextJsRouter(),
    }
}