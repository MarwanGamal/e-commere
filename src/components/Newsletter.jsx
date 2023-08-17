import { Send } from '@mui/icons-material'
import styled from 'styled-components'
import { mobile, tablet } from '../responsive'

const Container = styled.div`
    padding: 48px 0 68px 0;
    background-color: #DDB698;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`
const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
    color: #101826;
    ${tablet({fontSize:"50px"})}
`
const Description = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    color: #101826;
    ${tablet({fontSize:"20px"})}
    ${mobile({textAlign: "center"})}
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    ${mobile({width: "80%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #1F304C;
    color: white;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
`

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from your favorite products.</Description>
        <InputContainer>
            <Input placeholder='your email'/>
            <Button>
                <Send style={{color:"DDB698"}}/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter