import { defaultWebAppConfig, WebApp } from '@/ui/WebApp'
import { render, screen } from '@testing-library/react'
import { HomePage } from '@/ui/screens/home/HomePage'

test('Home', async () => {
    const application = new WebApp(defaultWebAppConfig())

    render(application.render(HomePage))

    const text = screen.getByText('Rather Labs Challenge')
    expect(text).toBeInTheDocument()
})
