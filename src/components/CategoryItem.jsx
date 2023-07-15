import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"


const Container = styled.div`
    margin: 15px;
    width: 216px;
    height: 216px;
    background: #D9D9D9;
    border-radius: 50%; 
    display: flex;
    justify-content: center;
    align-items: center;
    ${tablet({height: "50vh"})}
`
const Image = styled.img`
    width: 70%;
    height: 70%;
    object-fit: contain;
    ${mobile({height: "30vh"})}
    `
// const Info = styled.div`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// `
// const Title = styled.h1`
//     margin-bottom: 20px;
//     -webkit-text-fill-color: white; 
//     -webkit-text-stroke-width: .5px;
//     -webkit-text-stroke-color: black;
//     ${tablet({fontSize: "24px"})}
// `
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
        <Image src={item.img}/>
    </Container>
  )
}
