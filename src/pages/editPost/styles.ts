import styled from 'styled-components'

export const Container = styled.div``

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    background: #fff;
    box-shadow: 0 0 16px rgba(0, 0, 30, 0.1);
    padding: 48px;
    margin-bottom: 48px;
    h1 {
        font-size: 20px;
    }
    form {
        width: 100%;
        margin-top: 28px;
        display: flex;
        flex-direction: column;
        input {
            height: 48px;
            border: 1px solid #ddd;
            border-radius: 4px;
            margin-bottom: 8px;
            padding-left: 14px;
        }
        textarea {
            min-width: 100%;
            border: 1px solid #ddd;
            border-radius: 4px;
            padding-left: 14px;
            min-height: 230px;
            padding: 14px;
        }
        button {
            align-self: flex-end;
            height: 54px;
            background: ${props => props.theme.colors.primary};
            padding: 0 32px;
            margin-top: 12px;
            border: 0;
            border-radius: 4px;
            color: #fff;
            font-weight: bold;
        }
    }
`
