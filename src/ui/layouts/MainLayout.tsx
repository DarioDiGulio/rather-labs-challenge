import { FC, ReactNode } from 'react'
import { PresentersContext } from '../components/context/PresentersContext'
import { PresenterFactory } from '../PresenterFactory'

export const MainLayout: FC<Props> = (props) => (
    <PresentersContext.Provider value={ props.presenters }>
        { props.children }
    </PresentersContext.Provider>
)

interface Props {
    presenters: PresenterFactory,
    children: ReactNode;
}
