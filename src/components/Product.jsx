import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useState} from 'react'

const Container = styled.div`

`

const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0, 0.2);
    transition: all .5s ease;
    border-radius: 10px;
`
const Image = styled.img`
    height: 100%;
    border-radius: 10px;
    width: 100%;
    z-index: 2;
    object-fit: cover;
    transition: all .75s ease;
`

const ImageContainer = styled.div`
    flex: 1;
    border-radius: 10px;
    max-width: 288px;
    min-width: 240;
    justify-self: center;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    &:hover ${Info}{
        opacity: 1;
    }
    &:hover ${Image}{
        transform: scale(1.1);
        object-fit: cover;
    }
`

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        cursor: pointer;
    }
`
const SearchIcon = styled(Link)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all .5s ease;
    text-decoration: none;
    color: black;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        cursor: pointer;
    }
`
const H1 = styled.h1`
    margin-top: 24px;
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 900;
`
const Description = styled.p`
    margin-top: 12px;
    font-weight: 700;
    font-size: 20px;
`
const Price = styled.p`
    margin-top: 12px;
    color: #D9D9D9;
    font-weight: 700;
    font-size: 20px;
`


export default function Product({item}) {

    const [ishovered, setIsHovered] = useState(false)

    const description = item.name.slice(item.brandName.length)

    return (
        <Container>
            <ImageContainer onMouseOver={()=>setIsHovered(true)} onMouseOut={()=>setIsHovered(false)}>
                <Image src={ishovered ? "https://" + item.additionalImageUrls[0] : "https://" + item.imageUrl}/>
                <Info>
                    <Icon>
                        <ShoppingCartOutlined />
                    </Icon>
                    <SearchIcon to={'/product'}>
                        <SearchOutlined />
                    </SearchIcon>
                    <Icon>
                        <FavoriteBorderOutlined />
                    </Icon>
                </Info>
            </ImageContainer>
            <H1>{item.brandName}</H1>
            <Description>{description}</Description>
            <Price>{item.price.currency} {item.price.current.text}</Price>
        </Container>
    )
}
