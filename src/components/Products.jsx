import styled from 'styled-components'
import { categories } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 48px 120px;
    display: grid;
    justify-content: center;
    grid-gap: 48px 60px;
    grid-template-columns: repeat(1, 280px);
    @media (min-width: 900px) {
      grid-template-columns: repeat(2, 280px);
    }

    @media (min-width: 1260px) {
      grid-template-columns: repeat(3, 280px);
    }

    @media (min-width: 1620px) {
      grid-template-columns: repeat(4, 280px);
    }
    
    @media (min-width: 1920px) {
      grid-template-columns: repeat(5,280px);
    }

    @media (min-width: 2320px) {
      grid-template-columns: repeat(6,280px);
    }
    justify-items: center;
    
`

export default function Products({page, items}) {

  const products = items ? 
  items.map(item=>(
    <Product item={item} key={item.id} page={page} />
  )):
  <h1>Loading</h1>

  return (
    <div>
        <Container>
            {products}
        </Container>
    </div>
  )
}
