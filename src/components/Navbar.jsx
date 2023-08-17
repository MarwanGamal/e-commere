import { Search, ShoppingCartOutlined, PersonOutline, FavoriteBorderOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import styled from 'styled-components'
import { mobile, noteBook, tablet } from '../responsive'
import { Link } from 'react-router-dom'
import svg from '../imgs/searchnormal1.svg'

const Container = styled.div`
    background-color: #1F304C;
    border-bottom: 5px solid #DDB698;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    height: 72px;
    padding: 0 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${tablet({ padding: "0 60px" })}
    ${mobile({ padding: "10px 0",height: "24px"})}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;  
`
// const Language = styled.span`
//     font-size: 14px;
//     cursor: pointer;

//     ${mobile({ display: "none" })}

// `
const Input = styled.input`
    border: none;
    width: 100%;
    padding: 8px;
    outline: none;
    ${mobile({width: "50px"})}
`

const SearchContainer = styled.div`
    border: .5px solid lightgrey;
    border-radius: 5px 0 0 5px;
    display: flex;
    background-color: white;
    align-items: center;
    margin-left: 25px;
    width:80%;
`

const Center = styled.div`
    flex: 2;
    display:flex;
`
const Logo = styled.h1`
    font-weight: bold;
    color: #DDB698;
    text-align: center;
    ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({display:"none"})}
`

const MenuItem = styled(Link)`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize: "12px", marginLeft: "10px"})}
    text-decoration: none;
    color: black;
`

const Button = styled.button`
    background-color: #DDB698;
    border:none;
    border-radius: 0 5px 5px 0;
    padding: 10px; 
    width: 20%;
    color: white;
`

function Navbar() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Logo>OUTLET</Logo>
            </Left>
            <Center>
                <SearchContainer>
                    <Search style={{fontSize: '24px',margin:'0px 7px'}} />
                    <Input placeholder='Search'/>
                </SearchContainer>
                <Button>Search</Button>
            </Center>
            <Right>
                <PersonOutline style={{fontSize: '30px',marginLeft:"25px",color:"#DDB698"}} />
                <FavoriteBorderOutlined style={{fontSize: '26px',marginLeft:"25px",color:"#DDB698"}} />
                {/* {<MenuItem  to={'/login'}>Sign in</MenuItem>
                <MenuItem to={'/register'} >Register</MenuItem>} */}
                <MenuItem to={'/cart'}>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined style={{fontSize: '26px',color:"#DDB698"}}/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar