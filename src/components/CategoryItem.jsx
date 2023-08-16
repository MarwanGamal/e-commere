import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"
import Image from "./Image"


const Container = styled.div`
    margin: 15px 25px;
    width: 216px;
    height: 216px;
    background: #D9D9D9;
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    ${tablet({height: "50vh"})}
    ${mobile({height: "30vh"})}
`

const Button = styled(Link)`
    border: none;
    padding: 10px;
    background-color: white;
    color: grey;
    cursor: pointer;
    font-weight: 600;
    text-decoration: none;
`

export default function CategoryItem({item}) {
  return (
    <Container>
        <Image source={item.img}/>
    </Container>
  )
}
