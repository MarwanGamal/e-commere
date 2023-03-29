import Home from "./pages/Home"
import ProductList from "./pages/ProductList"
import Product from "./pages/Product"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Cart from "./pages/Cart"
import{createBrowserRouter, RouterProvider,createHashRouter} from 'react-router-dom'

const router = createHashRouter([
  {
    path: "/",
    element:<Home />,
  },
  ,
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/productList",
    element: <ProductList />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  }
])

function App () {
  return (
    <div>
      <RouterProvider router={router}/>
      <p>hello</p>
    </div>
  )
}

export default App