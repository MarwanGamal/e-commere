import { Facebook, Instagram, LocalPhone, LocationOn, MailOutline, Pinterest, Twitter } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    display: flex;
    background-color: #1F304C;
    color: white;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 42px 120px 0 120px;
`
const Logo = styled.h1`
    color: #DDB698;
`

const Desc = styled.p`
    margin: 20px 0;

`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})}
    ${tablet({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
    color: #DDB698;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px; 
`


const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "#fff8f8"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`
const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>OUTLET</Logo>
            <Desc>
                There are many variations of passages of Lorem Ipusm available, but the majority have suffered alteration in some form, by injected humor, or randomized words which don't look even slightly believable.
            </Desc>
            <SocialContainer>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405f">
                    <Instagram />
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter />
                </SocialIcon>
                <SocialIcon color="E60023">    
                    <Pinterest />
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <LocationOn style={{marginRight: "10px"}}/>
                622 Dixie Path , south tobinchester 98336
            </ContactItem>
            <ContactItem>
                <LocalPhone style={{marginRight: "10px"}}/>
                +02 234 56733
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight: "10px"}}/>
                contact@lama.dev
            </ContactItem>
            <Payment src="http://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer