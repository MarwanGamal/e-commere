import styled from '@emotion/styled'
import { Add, Remove, FavoriteBorderOutlined, LocalShippingOutlined } from '@mui/icons-material'
import {useEffect,useState} from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import {mobile, tablet} from '../responsive'
import ControlledAccordions from '../components/Accordion'
import Products from '../components/Products'
import { useLocation } from 'react-router-dom'
import useProductDetail from '../hooks/useProductDetail'
import useProductSimilarities from '../hooks/useProductSimilarities'

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
    color: #26201A;
    margin-bottom: 12px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 24px;
    color: #DDB698;
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
    flex-wrap: wrap;
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
    border: 2px solid #CCCCCC;
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
    border: 2px solid #1F304C;
    padding: 10px;
`
const Amount = styled.span`
    font-size: 24px;
    border-radius: 10px;
    display: flex;
    color: #DDB698;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 10px;
    font-size: 24px;
    margin-left: 24px;
    width: 560px;
    color: #1F304C;
    background-color: #DDB698;
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

    const location = useLocation()
    const {url} = location.state
    const data = useProductDetail(url)
    const similarItems = useProductSimilarities(url)
    console.log(similarItems)
    if(data){
        var productName = data.name.slice(data.brandName.length)
        var price = data.price[0].productPrice.current.text        
        var available 
        if(data.price[0].isInStock){
            available = "In stock"
        }else{
            available = "out of stock"
        }
    }
    return (
        <Container >
            <Navbar />
            {data ? 
            <Wrapper>
                <ImagesContainer>
                    <ImageList>
                        {data.images.map(img =>(
                            <ImgContainer>
                                <Image src={img.url} />
                            </ImgContainer>
                        ))}
                    </ImageList>
                </ImagesContainer>
                <InfoContainer>
                    <ProductName>{productName}</ProductName>
                    <Price>{price}</Price>
                    <ProductInfo>
                        <Info>Type: {data.productType.name}</Info>
                        <Info>Availability: {available}</Info>
                        <Info>Manufacture: {data.brandName}</Info>
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
                            {data.variants.map( variant =>(
                                <FilterSize>{(variant.size.split("-"))[0]}</FilterSize>
                            ))}
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove style={{color:"497DAA"}}/>
                            <Amount>1</Amount>
                            <Add style={{color:"497DAA"}}/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                        <FavoriteBorderOutlined style={{color: "DDB698",fontSize: '26px',marginLeft:"24px", padding:"10px", border:"2px solid #1F304C", borderRadius:"5px"}} />
                    </AddContainer>
                    <ShippingDetails>
                        <LocalShippingOutlined style={{color: "#afafaf",fontSize: '26px',marginRight:"24px"}}/>
                        Shipping Within 3 to 5 work days
                    </ShippingDetails>
                    <ProductDetails>
                        <ControlledAccordions description={data.description}/>
                    </ProductDetails>
                </InfoContainer>
            </Wrapper>:
            <h1>Loading</h1>}
            <PeopleAlsoLiked>
                <Divider>
                    <Header>Customers Also Viewed</Header>
                </Divider>
                {similarItems && <Products items={similarItems} page={"product"}/>}
            </PeopleAlsoLiked>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default Product