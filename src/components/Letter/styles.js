import styled from 'styled-components'

export const Wrapper = styled.div ` 
@import url('https://fonts.googleapis.com/css2?family=Allerta&display=swap');
    height: 100vh;
    width: 100%;
    background: linear-gradient(180deg, #000945, #815627);
    background-size: 400%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    font-family: 'Allerta', sans-serif;
    animation: colors 5s ease infinite;
    
    
    @keyframes colors{
        0%{
            background-position: 0% 50%;
        }
        50%{
            background-position: 100% 50%;
        }
        100%{
            background-position: 0% 50%;
        }
    }

    h1{
        text-align: center;
        margin-top : -450px;
        font-size: 150px;
        color: rgba(255,255,255,0.4);
    }
    div{
        display: flex;
        justify-content: center;
    }


`