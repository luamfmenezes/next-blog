import styled, { css } from 'styled-components'

interface OptionParams {
    selected: boolean
}

export const Container = styled.div`
    width: 140px;
    height: 54px;
    display: flex;
    border-radius: 8px;
    overflow: hidden;
`

export const Option = styled.button<OptionParams>`
    width: 70px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0;
    transition: 0.2s;

    svg {
        transition: 0.2s;
        color: #999;
    }
    p {
        transition: 0.2s;
        color: #999;
    }

    ${props =>
        props.selected &&
        css`
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
