import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const Container = styled.div`
    position: fixed;
    width: 32px;
    height: 32px;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    right: 32px;
    bottom: 32px;
    border-radius: 8px;
    box-shadow: 0 0 16px rgba(0, 0, 30, 0.1);
`

export const Content = styled.div`
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    animation: 0.4s ${rotate} infinite linear;
    svg {
        color: ${props => props.theme.colors.primary};
    }
`
