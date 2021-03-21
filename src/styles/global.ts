import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        background:${props => props.theme.colors.background};
        font: 400 14px 'Nunito', sans-serif;
    }

    h1, p, button {
        color:${props => props.theme.colors.text};
        font-weight:400;
        font-family: 'Nunito', sans-serif;
    }

    button{
        outline:0;
        cursor:pointer;
    }

    a{
        text-decoration:none;
        color:${props => props.theme.colors.text};
        transition:0.2s;
        &:hover{
            opacity:0.8;
        }
    }

`
//@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
