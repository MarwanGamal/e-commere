import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { laptop, mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    padding: 20px;
    margin: 20px 170px;
    justify-content: space-between;
    ${laptop({flexWrap: "wrap", justifyContent:"center"})}
`

export default function Categories() {
  return (
    <Container>
        {categories.map(item=> (
            <CategoryItem item={item} key={item.id} />
        ))}
    </Container>
  )
}
