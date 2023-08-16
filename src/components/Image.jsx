import styled from "styled-components"

const Img = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
    `

export default function Image({source}){
    return(
        <Img src={source} />
    )
}