import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
`

export const Icon = styled.div`
    background: linear-gradient(-135deg, #39aeeb, #6acbff);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px;
    border-radius: 50%;
`

export const Info = styled.div`
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
