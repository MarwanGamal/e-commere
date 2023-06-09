import { Link } from "react-router-dom"
import styled from "styled-components"
import { mobile, tablet } from "../responsive"


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
    ${tablet({height: "50vh"})}
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({height: "30vh"})}
    `
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    margin-bottom: 20px;
    -webkit-text-fill-color: white; 
    -webkit-text-stroke-width: .5px;
    -webkit-text-stroke-color: black;
    ${tablet({fontSize: "24px"})}
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
        <Image src={item.img}/>
        <Info>
            <Title>{item.title}</Title>
            <Button to={'productList'}>Shop now</Button>
        </Info>
    </Container>
  )
}
