import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white; 
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 24px;
`

export default function Announcement() {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Above $50
    </Container>
  )
}
