import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile} from '../responsive'
import Categories from '../components/Categories'
import RangeSlider from '../components/RangeSlider'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import useProductBySearch from '../hooks/useProductBySearch'
import IconCheckboxes from '../components/Checkbox'


const Container = styled.div`

`
const FilterContainer = styled.div`
    display: flex;
    margin: 48px 120px 0;
`
const Filter = styled.div`
    margin: 0 24px;
    background-color: #1F304C;
    color: #1F304C;
    border-radius: 10px;
    position: relative;
    @media (max-width: 650px) {
        margin: 10px;
    }
    ${mobile({margin: "0 20px", display: "flex", flexDirection:"column"})}
`

const Select = styled.select`
    border-radius: 10px;
    width: 224px;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    ${mobile({margin: "10px 0px"})}
`

const Option = styled.option`
    border-radius: 10px;
`

const Button = styled.button`
    border-radius: 10px;
    width: 224px;
    background-color: #1F304C;
    color: #DDB698;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    text-align: left;
    border: 1px solid grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        cursor: pointer;
    }
`
const RangeContainer = styled.div`
    display:${(props) => props.$show ? "flex" : "none"};
    // justify-content: center;
    flex-wrap: wrap;
    background-color: #DDB698;
    width: 224px;
    padding: 10px 0;
    z-index: 10;
    border: 1px solid grey;
    position: absolute;
    top: 95%;
    left: 0%;
    border-radius: 10px;
`
const FlexContainer = styled.div`
    display: flex;
    margin-left: 12px;
    flex-direction: column;
    justify-self: start;
`
const RadioContainer = styled.div`
    display: flex;
    align-items: center;
`
const Label = styled.label`
    font-size: 20px;
    font-weight: bold;
    margin-left: 6px;
`

const ApplyBtn = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1F304C;
    background-color: #DDB698;
    width: 180px;
    padding: 5px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`

const SizeRadio = styled.input`
    background-color: transparent;
    border-radius: 50%;
    margin: 10px;
`

const ProductList = () => {
    const [isPriceShown, setIsPriceShown] = useState(false)
    const [isColorShown, setColorShown] = useState(false)
    const [isSizeShown, setIsSizeShown] = useState(false)

    const location = useLocation()
    const {id} = location.state
    console.log(id)
    const data =  useProductBySearch(id)
    let topProducts
    if(data){
      topProducts = data.products
    }

    return (
        <Container>
            <Navbar />
            <Categories page={"productList"}/>
            <FilterContainer>
                <Filter>
                    <RangeContainer $show={isColorShown}>
                        <RangeSlider />
                    </RangeContainer>
                    <Button onClick={()=>setColorShown(!isColorShown)} >Color <KeyboardArrowDownIcon /></Button>
                </Filter>
                <Filter>
                    <RangeContainer $show={isSizeShown}>
                        <FlexContainer>
                            <RadioContainer>
                                <IconCheckboxes  id="xs" name="xs"/>
                                <Label for="xs">XS</Label>
                            </RadioContainer>
                            <RadioContainer>
                                <IconCheckboxes id="s" name="s"/>
                                <Label for="s">S</Label>
                            </RadioContainer>
                            <RadioContainer>
                                <IconCheckboxes id="m" name="m"/>
                                <Label for="m">M</Label>
                            </RadioContainer>
                            <RadioContainer>
                                <IconCheckboxes id="l" name="l" />
                                <Label for="l">L</Label>
                            </RadioContainer>
                            <RadioContainer>
                                <IconCheckboxes id="xl" name="xl"/>
                                <Label for="xl">XL</Label>
                            </RadioContainer>
                            <RadioContainer>
                                <IconCheckboxes id="2xl" name="2xl"/>
                                <Label for="2xl">2XL</Label>
                            </RadioContainer>
                        </FlexContainer>
                    </RangeContainer>
                    <Button onClick={()=>setIsSizeShown(!isSizeShown)} >Size <KeyboardArrowDownIcon /></Button>
                </Filter>
                <Filter>
                    <RangeContainer $show={isPriceShown}>
                        <RangeSlider />
                    </RangeContainer>
                    <Button onClick={()=>setIsPriceShown(!isPriceShown)} >Price <KeyboardArrowDownIcon /></Button>
                </Filter>
                <ApplyBtn onClick={()=>{
                    setIsPriceShown(false) 
                    setIsSizeShown(false) 
                    setColorShown(false)
                
                }}>Apply</ApplyBtn>
            </FilterContainer>
            <Products items={topProducts} page={"home"}/>
            <Newsletter />
            <Footer />
        </Container>
    )
}

export default ProductList