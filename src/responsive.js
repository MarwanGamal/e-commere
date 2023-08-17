import {css} from "styled-components"

export const mobile = (props) =>{
    return css`
        @media only screen and (max-width: 600px){
            ${props}
        }
    `
}
export const tablet = (props) =>{
    return css`
        @media only screen and (max-width: 900px){
            ${props}
        }
    `
}
export const noteBook = (props) =>{
    return css`
        @media only screen and (max-width: 1200px){
            ${props}
        }
    `
}
export const laptop = (props) =>{
    return css`
        @media only screen and (max-width: 1400px){
            ${props}
        }
    `
}