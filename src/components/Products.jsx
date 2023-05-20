import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    @media (max-width: 1400px) {
      grid-template-columns: repeat(5, 1fr);
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 700px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 550px) {
      grid-template-columns: repeat(1, 1fr);
    }
    justify-items: center;
    
`

export default function Products() {

  const products = popularProducts.map(item=>(
    <Product item={item} key={item.id} />
  ))

  console.log(products)
  return (
    <div>
        <Container>
            {products}
        </Container>
    </div>
  )
}
