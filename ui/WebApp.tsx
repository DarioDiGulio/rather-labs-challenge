export class WebApp {
    constructor(private config: WebAppConfig) {}

    private onUnhandledError = (e: Error) => {
        switch (true) {
            default: {
                console.error(e)
            }
        }
    }

    render = (PageComponent, pageProps = {}) => <PageComponent {...pageProps} />
}

export interface WebAppConfig {
}

export const defaultWebAppConfig = (): WebAppConfig => {
    return {

    }
}