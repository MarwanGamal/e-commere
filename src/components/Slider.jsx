import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile, tablet } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({display: "none"})}
    ${tablet({height: "60vh"})}
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: transform .85s ease-in-out;
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${props=> props.bg};
    ${tablet({height: "60vh"})}
`
const ImageContainer = styled.div`
    height: 100%;
    flex: 1;
    text-align: center;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    margin-right: 20px;
`
const Title = styled.h1`
    text-transform: uppercase;
    font-size: 70px;
    ${tablet({fontSize: "40px"})}
`
const Description = styled.p`
    text-transform: uppercase;
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${tablet({fontSize: "18px"})}
`
const Button = styled(Link)`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    text-decoration: none;
    border: 2px solid black;
    color: black;
    border-radius: 10px; 
`

export default function Slider() {
    const [slideIndex, setSlideIndex] = useState(0)
    function handleClick (direction){
        if(direction === "left"){
            setSlideIndex(prevSlideIndex => prevSlideIndex > 0 ? (prevSlideIndex-1) : (2))
        }else{
            setSlideIndex(prevSlideIndex => prevSlideIndex < 2 ? (prevSlideIndex+1) : (0))
        }
    }
    return (
    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {
                sliderItems.map(item=>(
                    <Slide bg={item.color} key={item.id}>
                        <ImageContainer> 
                            <Image src={item.img} />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button to={'productList'}>Show now</Button>
                        </InfoContainer>
                    </Slide>
                )
                 )
            }
            
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}
