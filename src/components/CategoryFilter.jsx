import styled from "styled-components"
import Image from "./Image"

const Container = styled.div`
    margin: 0px 20px;
    width: 150px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function CategoryFilter({item}){
    return(
        <Container>
           <Image source={item.img}/>
        </Container>
    )
}