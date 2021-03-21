import React from 'react'

import { Container, Option } from './styles'

import { FaLaptop, FaCloud } from 'react-icons/fa'

interface SwitchPostTypeParas {
    onChange: (data: 'local' | 'remote') => void
    value: string
}

const SwitchPostType: React.FC<SwitchPostTypeParas> = ({ onChange, value }) => {
    return (
        <Container>
            <Option
                onClick={() => onChange('remote')}
                selected={value === 'remote'}
            >
                <FaCloud />
                <p>remote</p>
            </Option>
            <Option
                selected={value === 'local'}
                onClick={() => onChange('local')}
            >
                <FaLaptop />
                <p>local</p>
            </Option>
        </Container>
    )
}

export default SwitchPostType
