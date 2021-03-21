import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 480px;
    display: flex;
    img {
        flex: 1;
        width: 50%;
        object-fit: cover;
        box-shadow: 0 0 16px rgba(0, 0, 30, 0.1);
    }
    margin-bottom: 32px;
`

export const Content = styled.div`
    flex: 1;
    width: 50%;
    padding: 64px;
    height: 480px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    h1 {
        margin-top: 24px;
        font-size: 48px;
    }
`

export const Star = styled.div`
    display: flex;
    align-items: center;
    border-radius: 8px;
    background: #ffee00;
    padding: 8px 16px;
    p {
        margin-left: 8px;
        font-size: 12px;
        font-weight: bold;
    }
`
