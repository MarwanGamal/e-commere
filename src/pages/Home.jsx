import {useEffect} from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import styled from 'styled-components'
import useProductBySearch from '../hooks/useProductBySearch'
import {  mobile } from '../responsive'

const Header = styled.div`
  font-weight: bold;
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
  ${mobile({margin: "24px 60px"})}
`
const H1 = styled.h1`
  fontSize: 48px;
  textAlign: center;
  ${mobile({fontSize: "36"})}
`

export default function Home() {

  const data =  useProductBySearch('wear')
  let topProducts
  if(data){
    topProducts = data.products.slice(0, 20)
  }

  return (
    <div style={{boxSizing: "border-box"}}>
        <Navbar />  
        <Slider />
        <Categories page={"home"}/>
        <Divider>
          <Header>
            <H1>Top Picks</H1>
          </Header>
        </Divider>
        <Products items={topProducts} page={"home"}/>
        <Newsletter />
        <Footer />
    </div>
  )
}
