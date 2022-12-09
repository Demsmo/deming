import styled from "styled-components";

export const CalculatorContainer = styled.div `
    box-sizing: border-box;
    margin: 0;
    display: grid;
    height: 100vh;
    justify-content: center;
    grid-template-columns: repeat(4, 8rem);
    grid-template-rows: minmax(11rem, auto) repeat(5, 8rem);
    background-color: rgba(0, 0, 0, .75);
`

export const OutputContainer = styled.div `
    grid-column: 1 / -1;
    flex-direction: column;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: .75rem;
    word-wrap: break-word;
    word-break: break-all;
    background-color: rgba(0, 0, 0, .75);
    border-radius: 50px;
`

export const PreviousOperand = styled.div  `
    color: rgba(225, 225, 225, .75);
    font-size: 4.5rem;
`

export const CurrentOperand = styled.div `
    color: white;
    font-size: 6.5rem;
`

const button = () => {
    return `
        cursor: pointer;
        font-size: 2rem;
        border-radius: 50px;
        padding: 5px;
        margin: 5px;
        background-color: #B179EB;
        transition: transform .3s;
        &:hover {
            background-color: #CFB6EA;
            transform: scale(1.2)
        }
        &:active {
            background-color: #CFB6EA;
            transform: scale(.8)
        }
    `
}

export const ButtonDouble = styled.button `
    grid-column: span 2;
   ${button()}
`

export const Button = styled.button `
    ${button()}
`