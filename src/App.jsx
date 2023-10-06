import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar'
import PageError from './components/PageError'
import PageHome from './components/PageHome'
import PageShop from './components/PageShop'
import "./styles/reset.css"
import "./styles/styles.css"

//TODO - Make router a separate module
//TODO - Move cartCount state higher to prevent reset to 0

function App() {

  const [cartTotal, setCartTotal] = useState(0);
  const addToCart = (e) => {
      const qtyToAdd = parseFloat(e.target.dataset.key);
      setCartTotal(cartTotal => cartTotal + qtyToAdd);
  }


  const testInventory = [
    {key: uuidv4(), productName: "eggs", cardCount: 0},
    {key: uuidv4(), productName: "burgers", cardCount: 0},
    {key: uuidv4(), productName: "buns", cardCount: 0},
  ]

  const [inventory, setInventory] = useState( testInventory );

  const handleQtyChange = (e) => {
    console.log(e.target.dataset.key);
    const targetItem = inventory.find(item => item.key === e.target.dataset.key);
    const value = parseFloat(e.target.value);
    console.log(targetItem);
    setInventory(inventory.map(item => {
      if (item.key === targetItem.key) {
        // Create a *new* object with changes
        return { ...item, cardCount: value };
      } else {
        // No changes
        return item;
      }
    }));
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar cartTotal={cartTotal}/>,
      errorElement: <PageError />,
      children: [
        {
          path:"", 
          element: <PageHome />,
        },
        {
          path:"/shop", 
          element: <PageShop handleQtyChange={handleQtyChange} addToCart={addToCart} inventory={testInventory}/>
        },
      ]
    },
  ])

  return (
    <>
      <RouterProvider router={router} cartTotal={cartTotal} addToCart={addToCart}/>
      <footer>Made by Jake Browning for The Odin Project, 2023.</footer>
    </>
  )
}

export default App
