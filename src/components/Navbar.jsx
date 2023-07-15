import { Search, ShoppingCartOutlined, PersonOutline, FavoriteBorderOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import svg from '../imgs/searchnormal1.svg'

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
`
const Wrapper = styled.div`
    padding: 10px 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0" })}
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
    ${mobile({width: "50px"})}
`

const SearchContainer = styled.div`
    border: .5px solid lightgrey;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    width:80%;
`

const Center = styled.div`
    flex: 1;
    display:flex;
`
const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    ${mobile({fontSize: "24px"})}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex:"2"})}
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
    background-color: teal;
    border:none;
    border-radius: 0 10px 10px 0;
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
                    <Search style={{fontSize: '24px',margin:'0px 7px' }} />
                    <Input placeholder='Search'/>
                </SearchContainer>
                <Button>Search</Button>
            </Center>
            <Right>
                <PersonOutline style={{fontSize: '30px',marginLeft:"25px"}} />
                <FavoriteBorderOutlined style={{fontSize: '26px',marginLeft:"25px"}} />
                {/* {<MenuItem  to={'/login'}>Sign in</MenuItem>
                <MenuItem to={'/register'} >Register</MenuItem>} */}
                <MenuItem to={'/cart'}>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined style={{fontSize: '26px',}}/>
                    </Badge>
                </MenuItem>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar