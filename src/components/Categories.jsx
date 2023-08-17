import styled from "styled-components"
import { categories } from "../data"
import CategoryItem from "./CategoryItem"
import { laptop, mobile, tablet } from "../responsive"
import CategoryFilter from "./CategoryFilter"

const Container = styled.div`
    background: ${props => props.$page === "home" ? "" : "#DDB698"};
    display: flex;
    padding: 36px 120px 0;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${laptop({flexWrap: "wrap", justifyContent:"center"})}
    ${tablet({padding:" 36px 42px 0"})}
    ${mobile({padding:" 24px 12px 0"})}
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
