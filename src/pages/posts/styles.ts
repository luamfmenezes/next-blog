import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1120px;
    margin: 0 auto;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;
    > h1 {
        font-size: 40px;
    }
    img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
    }
    article {
        margin-top: 28px;
    }
`

export const Infos = styled.div`
    margin: 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 24px;
    button {
        transition: 0.2s;
        border: 0;
        border-radius: 4px;
        width: 40px;
        height: 40px;
        background: #e7e7e7;
        &:hover {
            color: ${props => props.theme.colors.primary};
        }
    }
`
