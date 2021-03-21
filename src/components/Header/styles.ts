import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    padding: 64px 0;
    justify-content: space-between;
    img {
        width: 48px;
        cursor: pointer;
    }
`
export const WriteArticleButton = styled.button`
    border: 0;
    border-radius: 4px;
    height: 48px;
    display: flex;
    align-items: center;
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.1);
    transition: 0.2s;
    div {
        width: 54px;
        height: 54px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.1);
        svg {
            color: #fff;
        }
    }

    p {
        color: #fff;
        padding: 0 24px;
    }
    &:hover {
        filter: brightness(1.1);
    }
`
export const Logo = styled.div`
    display: flex;
    align-items: center;
`

export const BackButton = styled.button`
    transition: 0.2s;
    border: 0;
    border-radius: 4px;
    width: 40px;
    margin: 8px;
    height: 40px;
    background: #e7e7e7;
    margin-left: 24px;
    svg {
        color: #334;
    }
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`
