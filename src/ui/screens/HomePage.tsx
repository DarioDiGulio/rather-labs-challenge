import React from 'react'
import styled from 'styled-components'
import { usePresenterFactory } from '../components/context/PresentersContext'
import { usePresenter } from '@/modules/common/base/react/usePresenter'

export const HomePage: React.FC = () => {
    const presenters = usePresenterFactory()
    const presenter = usePresenter(presenters.home)

    return <Container>
        <h1>Rather Labs Challenge</h1>
        <h2>Quizzes</h2>

    </Container>
}

const Container = styled.div`
  margin: auto;
`
