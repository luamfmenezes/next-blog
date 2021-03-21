import styled, { css } from 'styled-components'

interface OptionParams {
    selected: boolean
}

export const Container = styled.div`
    display: flex;
`

export const Option = styled.button<OptionParams>`
    width: 70px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid #ddd;
    transition: 0.2s;

    svg {
        transition: 0.2s;
        color: #999;
    }
    p {
        transition: 0.2s;
        color: #999;
    }

    &:nth-child(1) {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    &:nth-child(2) {
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
    }

    ${props =>
        props.selected &&
        css`
            border-color: ${props => props.theme.colors.primary};
            background: #fff;
            svg {
                color: ${props => props.theme.colors.primary};
            }
            p {
                color: ${props => props.theme.colors.primary};
            }
        `}

    p {
        font-size: 12px;
        margin-top: 4px;
    }
`
