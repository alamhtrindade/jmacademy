/*#966856; #FCF5F5; #B7FDB6; #B9C9AF; #4F544C;*/


import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 20px;
`

export const ClassLogo = styled.div`
    img{
        width: 100%;
        max-width: 10vw;
    }
`

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width:80%;
        max-width: 90vw;
        margin-top: -4vw;
        margin-bottom: 1rem;
    }

    @media (min-width: 1024px) {
        img{
            margin-top: -8vw;
        } 
    }
   

`

export const WhoContent = styled.div`
    margin-top: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3{
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 24px;
        font-weight: lighter;
        color: #966856;
        text-decoration: none;
    }

    p{
        font-family: 'Open Sans';
        font-style: normal;
        font-size: 16px;
        font-weight: normal;
        line-height: 50px;
        color: #4F544C;
        text-decoration: none;
        margin: 2rem 5% 2rem 5%;
    }
`