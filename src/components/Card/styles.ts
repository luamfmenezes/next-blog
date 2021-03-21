import styled from 'styled-components'

export const Container = styled.div`
    max-width: calc(50% - 32px);
    background: #fff;
    box-shadow: 0 0 16px rgba(0, 0, 30, 0.1);
    display: flex;
    flex-direction: column;
    margin: 16px;
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
    button {
        border: 0;
        background-color: transparent;
        padding: 0 8px;
        transition: 0.2s;
        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const User = styled.div`
    display: flex;
    align-items: center;
`

export const UserIcon = styled.div`
    background: linear-gradient(-135deg, #39aeeb, #6acbff);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 50%;
`

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    h1 {
        font-size: 14px;
    }
    p {
        font-size: 12px;
        margin-top: 4px;
        opacity: 0.6;
    }
`
