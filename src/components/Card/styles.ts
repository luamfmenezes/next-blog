import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from{
        transform:scale(0.8);
        opacity:0;
    }
    to{
        transform:scale(1);
        opacity:1;
    }
`

export const Container = styled.div`
    width: calc(50% - 32px);
    max-height: 660px;
    background: #fff;
    box-shadow: 0 0 16px rgba(0, 0, 30, 0.1);
    display: flex;
    flex-direction: column;
    margin: 16px;
    animation: 0.5s ${fadeIn} both;
    position: relative;
    img {
        width: 100%;
        height: 220px;
        object-fit: cover;
    }
`

export const Content = styled.div`
    padding: 28px;
    flex: 1;
    h1 {
        font-size: 21px;
        line-height: 31px;
        margin-bottom: 28px;
        font-weight: 500;
    }
    p {
        font-size: 14px;
        line-height: 19px;
        opacity: 0.6;
    }
`

export const Footer = styled.div`
    margin: 0 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #f5f5f8;
    padding: 28px 0;
`

export const Controllers = styled.div`
    display: flex;
    align-items: center;
    a {
        padding: 0 8px;
        margin-right: 8px;
        transition: 0.2s;
        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
    button {
        transition: 0.2s;
        border: 0;
        border-radius: 4px;
        margin: 8px;
        background: transparent;
        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`
