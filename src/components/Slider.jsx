import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"
import { mobile, tablet, laptop } from "../responsive"
import { Link } from "react-router-dom"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${tablet({height: "60vh"})}
    ${mobile({height: "90vh"})}
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
    ${mobile({display:"none"})}
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props=> props.slideIndex * -100}vw);
    transition: transform .85s ease-in-out;
    ${mobile({flexDirection:"column", transform: "translateX(0)"})}
`
const Slide = styled.div`
    display: flex;
    align-items: start;
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${props=> props.bg});
    background-position: center;
    ${tablet({backgroundPosition: "right"})}
    ${mobile({backgroundPosition: "center",backgroundSize: "100%",height: "33%"})}
    
`
const ImageContainer = styled.div`
    height: 100%;
    // flex: 1;
    margin-right: 60px;
    margin-top: 42px;
    text-align: center;
`
const Image = styled.img`
    height: 80%;
`

const InfoContainer = styled.div`
    // flex: 1;
    // padding: 50px;
    margin: 280px 240px;
    max-width: 34%;
    margin-right: 20px;
    text-algin: center;
    ${laptop({maxWidth: "50%", margin:"180px 120px"})}
    ${tablet({maxWidth: "100%",justifyContent:"center", alignItems:"center"})}
    ${mobile({maxWidth: "65%", margin:"0"})}
`
const Title = styled.h1`
    text-transform: uppercase;
    color: #1F304D;
    font-size: 70px;
    -webkit-text-stroke: 1.5px #DDB698;
    ${tablet({fontSize: "40px",maxWidth: "85%", margin:"0 auto"})}
    ${mobile({fontSize: "20px", margin:"48px 12px 12px 12px", WebkitTextStroke:" .3px #1F304D", color: "#DDB698"})}
`
const Description = styled.p`
    text-transform: uppercase;
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    
    ${tablet({fontSize: "18px"})}
    ${mobile({margin: "0"})}
`
const Button = styled(Link)`
    padding: 15px 0;
    display: flex;
    algin-items: center;
    max-width: 90%;
    justify-content: center;
    font-size: 36px;
    font-weight: bold;
    background-color: #1F304D;
    cursor: pointer;
    text-decoration: none;
    // border: 2px solid black;
    color: #FAF7F5;
    border-radius: 10px; 
    box-shadow: -3px 3px 10px 3px rgba(0, 0, 0, 0.5); 
    box-shadow: inset -3px 3px 10px 2px rgba(255, 255, 255, 0.15); 
    ${tablet({fontSize: "24px", maxWidth: "50%", margin:"0 auto"})}
    ${mobile({fontSize: "16px", maxWidth: "50%", margin:"12px", padding:"8px",borderRadius: "5px"})}
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
                    <Slide bg={item.img} key={item.id}>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button to={'productList'} state={{id: item.id}}>Show now</Button>
                        </InfoContainer>
                    </Slide>
                )) 
            }
            
        </Wrapper>
        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}
