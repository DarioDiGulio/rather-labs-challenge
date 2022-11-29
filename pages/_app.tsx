import 'asimov-javascript-extensions'
import type { AppProps } from 'next/app'
import { defaultWebAppConfig, WebApp } from '../ui/WebApp'

const application = new WebApp(defaultWebAppConfig())

export default ({ Component, pageProps }: AppProps) => application.render(Component, pageProps)
