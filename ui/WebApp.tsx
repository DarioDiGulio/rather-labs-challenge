import { PresenterFactory } from './PresenterFactory'
import React from 'react'
import { MainLayout } from './layouts/MainLayout'

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
}

export const defaultWebAppConfig = (): WebAppConfig => {
    return {}
}