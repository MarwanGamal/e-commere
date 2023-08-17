import styled from "styled-components"
import {mobile} from "../responsive"
const Img = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
    ${mobile({height: "80%",width:"80%"})}
    `

export default function Image({source}){
    return(
        <Img src={source} />
    )
}