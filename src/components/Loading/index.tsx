import React from 'react'

import { Container, Content } from './styles'

import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const Loading: React.FC = () => {
    return (
        <Container>
            <Content>
                <AiOutlineLoading3Quarters />
            </Content>
        </Container>
    )
}

export default Loading
