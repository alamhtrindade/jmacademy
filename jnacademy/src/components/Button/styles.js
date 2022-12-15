import styled,{css} from "styled-components";

export const ButtonContainer = styled.button`
    
    background: #B9C9AF;
    color: #E3DEDC;
    
    border-radius: 22px;
    width: 50%;
    max-width: 250px;
    height: 30px;

    border: 0;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        border: 2px solid #B9C9AF;
        top: -7px;
        left: -7px;
        width: calc(100% + 10px);
        height: calc(100% + 10px);
        border-radius: 22px;
    }

    ${({variant}) => variant === "header" && css`
        color: #4f544c;
        background: #FCF5F5;
        &::after {
          border: 2px solid #FCF5F5;  
        }
    `}

    ${({variant}) => variant === "forms" && css`
        background: #966856;
        &::after {
            border: 2px solid #966856
    `}
    
`
