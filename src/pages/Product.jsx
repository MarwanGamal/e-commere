import styled from '@emotion/styled'
import { Add, Remove, FavoriteBorderOutlined, LocalShippingOutlined } from '@mui/icons-material'
import React from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile, tablet} from '../responsive'
import ControlledAccordions from '../components/Accordion'
import Products from '../components/Products'

const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 60px 120px;
    display: flex;
    align-items: start;
    ${mobile({padding:"10px", flexDirection:"column"})}
    ${tablet({padding:"20px"})}
`
const ImagesContainer = styled.div`
    display: flex;
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
    ${tablet({height:"50vh"})}
    ${mobile({height:"40vh"})}
    object-fit: cover;
`
const ImageList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
`
const ImgContainer = styled.div`
    width: 314px;
    height: 400px;
    margin-bottom: 24px;
    margin-right: 24px;
`

const InfoContainer = styled.div`
    flex: 1;
    ${tablet({padding:"0 0 20px 20px"})}
    ${mobile({padding:"10px"})}
`
const ProductName = styled.div`
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 12px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 24px;
`
const ProductInfo = styled.div`
    margin-top: 24px ;
`
const Info = styled.p`
    font-size: 18px;
    margin: 12px 0px;
`

const FilterContainer = styled.div`
    margin-top: 36px;
    ${mobile({width:"100%",margin:"20px 0"})}
`
const Filter = styled.div`
    display: flex;
`
const FilterTitle = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 24px;
`
const FilterColor = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 5px;
    background-color: ${props => props.color};
    margin-right: 24px;
    cursor: pointer;
`


const FilterSize = styled.div`
    width: 48px;
    height: 48px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 24px;
    cursor: pointer;
    border: 1px solid #CCCCCC;
`
const AddContainer = styled.div`
    margin: 36px 0;
    display: flex;
    align-items: center;
    ${tablet({width:"100%"})}
    ${mobile({width:"100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 5px;
    width: 192px;
    font-weight: 700;
    border: 2px solid #afafaf;
    padding: 10px;
`
const Amount = styled.span`
    font-size: 24px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 10px;
    font-size: 24px;
    margin-left: 24px;
    width: 560px;
    background-color: #afafaf;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background-color: #f8f4f4;
    }
`
const ShippingDetails = styled.div`
    font-size: 18px;
    display: flex;
    align-items: center;
    color: #afafaf;

`
const ProductDetails = styled.div`
    margin-top: 48px;

`
const PeopleAlsoLiked = styled.div`
    margin-top: 72px;
`
const Header = styled.div`
    font-weight: bold;
    font-size: 40px;
    display: inline-block;
    border-bottom: 5px solid black;
    margin-bottom: -5px;
    border-radius: 5px;
    padding-bottom: 26.5px;
`
const Divider = styled.div`
    border-bottom: 5px solid #DBDADA;  
    margin: 10px 120px;
    display:flex;
    justify-content: center;
    border-radius: 5px;
`

const Product = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImagesContainer>
                    <ImageList>
                        <ImgContainer>
                            <Image src={"http://" + "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-1-ecru"} />
                        </ImgContainer>
                        <ImgContainer>
                            <Image src={"http://" + "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-2"}  />
                        </ImgContainer>
                        <ImgContainer>
                            <Image src={"http://" + "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-3"} />
                        </ImgContainer>
                        <ImgContainer>
                            <Image src={"http://" + "images.asos-media.com/products/asos-design-regular-fit-smart-linen-shirt-with-mandarin-collar-in-ecru/203632617-4"} />
                        </ImgContainer>
                    </ImageList>
                </ImagesContainer>
                <InfoContainer>
                    <ProductName>Essentials short sleeve linen shirt in navy</ProductName>
                    <Price>USD $20</Price>
                    <ProductInfo>
                        <Info>Type:</Info>
                        <Info>Availability:</Info>
                        <Info>Manufacture:</Info>
                    </ProductInfo>
                    <FilterContainer>
                        <FilterTitle>Color:</FilterTitle>
                        <Filter>
                            <FilterColor color="black" ></FilterColor>
                            <FilterColor color="blue" ></FilterColor>
                            <FilterColor color="grey" ></FilterColor>
                        </Filter>
                        </FilterContainer>
                        <FilterContainer>
                        <FilterTitle>Size:</FilterTitle>
                        <Filter>
                            <FilterSize>XS</FilterSize>
                            <FilterSize>S</FilterSize>
                            <FilterSize>M</FilterSize>
                            <FilterSize>L</FilterSize>
                            <FilterSize>xl</FilterSize>
                            <FilterSize>xxl</FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove />
                            <Amount>1</Amount>
                            <Add />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                        <FavoriteBorderOutlined style={{color: "grey",fontSize: '26px',marginLeft:"24px"}} />
                    </AddContainer>
                    <ShippingDetails>
                        <LocalShippingOutlined style={{color: "#afafaf",fontSize: '26px',marginRight:"24px"}}/>
                        Shipping Within 3 to 5 work days
                    </ShippingDetails>
                    <ProductDetails>
                        <ControlledAccordions />
                    </ProductDetails>
                </InfoContainer>
            </Wrapper>
            <PeopleAlsoLiked>
                <Divider>
                    <Header>Customers Also Viewed</Header>
                </Divider>
                <Products page={"product"}/>
            </PeopleAlsoLiked>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product