import {useState} from 'react'
import {useLocation} from 'react-router-dom'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import {mobile, tablet} from '../responsive'
import Categories from '../components/Categories'
import RangeSlider from '../components/RangeSlider'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import useProductBySearch from '../hooks/useProductBySearch'
import IconCheckboxes from '../components/Checkbox'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const Container = styled.div`

`
const FilterContainer = styled.div`
    display: flex;
    margin: 48px 120px 0;
    ${mobile({margin: "12px", flexWrap:"wrap", justifyContent:"center", alignItems:"center"})}
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
    ${mobile({margin: "12px", display: "flex", flexDirection:"column"})}
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

const FilterButton = styled.button`
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
    ${mobile({padding: "10px", marginTop:"12px"})}
`
const ModalContainer = styled.div`
    
`
const BigViewFilters = styled.div`
    ${mobile({display:"none"})}
`

const ModalButton = styled.button`
    display: none;
    ${mobile({
        display: "flex",
        justifyContent: "center",
        alignItems:"center",
        border: "none",
        padding: "8px 48px",
        margin: "24px 12px 0",
        backgroundColor: "#1F304C",
        color: "#DDB698",
        borderRadius: "5px",
        fontSize: "18px",
        fontWeight: " bold",
        
    })}
`

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

const ProductList = () => {
    const [isPriceShown, setIsPriceShown] = useState(false)
    const [isColorShown, setColorShown] = useState(false)
    const [isSizeShown, setIsSizeShown] = useState(false)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
            <ModalButton onClick={handleOpen}>Filters <FilterAltIcon/></ModalButton>
            <BigViewFilters>
                <FilterContainer>
                    <Filter>
                        <RangeContainer $show={isColorShown}>
                            <RangeSlider />
                        </RangeContainer>
                        <FilterButton onClick={()=>setColorShown(!isColorShown)} >Color <KeyboardArrowDownIcon /></FilterButton>
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
                        <FilterButton onClick={()=>setIsSizeShown(!isSizeShown)} >Size <KeyboardArrowDownIcon /></FilterButton>
                    </Filter>
                    <Filter>
                        <RangeContainer $show={isPriceShown}>
                            <RangeSlider />
                        </RangeContainer>
                        <FilterButton onClick={()=>setIsPriceShown(!isPriceShown)} >Price <KeyboardArrowDownIcon /></FilterButton>
                    </Filter>
                    <ApplyBtn onClick={()=>{
                        setIsPriceShown(false) 
                        setIsSizeShown(false) 
                        setColorShown(false)
                    
                    }}>Apply</ApplyBtn>
                </FilterContainer>
            </BigViewFilters>
            <Products items={topProducts} page={"home"}/>
            <Newsletter />
            <Footer />
            <ModalContainer>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                    <FilterContainer>
                        <Filter>
                            <RangeContainer $show={isColorShown}>
                                <RangeSlider />
                            </RangeContainer>
                            <FilterButton onClick={()=>setColorShown(!isColorShown)} >Color <KeyboardArrowDownIcon /></FilterButton>
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
                            <FilterButton onClick={()=>setIsSizeShown(!isSizeShown)} >Size <KeyboardArrowDownIcon /></FilterButton>
                        </Filter>
                        <Filter>
                            <RangeContainer $show={isPriceShown}>
                                <RangeSlider />
                            </RangeContainer>
                            <FilterButton onClick={()=>setIsPriceShown(!isPriceShown)} >Price <KeyboardArrowDownIcon /></FilterButton>
                        </Filter>
                        <ApplyBtn onClick={()=>{
                            setIsPriceShown(false) 
                            setIsSizeShown(false) 
                            setColorShown(false)
                        
                        }}>Apply</ApplyBtn>
                    </FilterContainer>
                    </Box>
                </Modal>
            </ModalContainer>
        </Container>
    )
}

export default ProductList