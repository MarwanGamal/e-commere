import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { laptop, mobile } from "../responsive"
import CategoryFilter from "./CategoryFilter"

const Container = styled.div`
    background: ${props => props.$page === "home" ? "" : "#cccccc"};
    display: flex;
    padding: 20px 170px;
    justify-content: center;
    align-items: center;
    ${laptop({flexWrap: "wrap", justifyContent:"center"})}
`

export default function Categories({page}) {
  return (
    <Container $page={page}>
        {categories.map(item=> (
            page === "home" ?
            <CategoryItem item={item} key={item.id} />:
            <CategoryFilter item={item} key={item.id} />
        ))}
    </Container>
  )
}
