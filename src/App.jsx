import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import PageError from './components/PageError'
import PageHome from './components/PageHome'
import PageShop from './components/PageShop'
import "./styles/reset.css"
import "./styles/styles.css"

//TODO - Make router a separate module
//TODO - Move cartCount state higher to prevent reset to 0

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <PageError />,
    children: [
      {
        path:"", 
        element: <PageHome />,
      },
      {
        path:"/shop", 
        element: <PageShop />
      },
    ]
  },
])

function App() {

  const [cartTotal, setCartTotal] = useState(0);
  const addToCart = () => {
      setCartTotal(cartTotal => cartTotal + 1)
  }
  return (
    <>
      <RouterProvider router={router} cartTotal={cartTotal} addToCart={addToCart}/>
      <footer>Made by Jake Browning for The Odin Project, 2023.</footer>
    </>
  )
}

export default App
