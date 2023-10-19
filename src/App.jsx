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
      // const qtyToAdd = 1;
      const targetItem = inventory.find(item => item.key === e.target.dataset.key);
      setCartTotal(cartTotal => cartTotal + targetItem.cardCount);

      setInventory(inventory.map(item => {
        if (item.key === targetItem.key) {
          // Create a *new* object with changes
          return { ...item, cardCount: 0 };
        } else {
          // No changes
          return item;
        }
      }));
  }

  const testInventory = [
    {key: uuidv4(), productName: "apple", price: 5.00, cardCount: 0},
    {key: uuidv4(), productName: "banana", price: 10.00, cardCount: 0},
    {key: uuidv4(), productName: "cherry", price: 15.00, cardCount: 0},
    {key: uuidv4(), productName: "durian", price: 20.00, cardCount: 0},
    {key: uuidv4(), productName: "eggplant", price: 25.00, cardCount: 0},
    {key: uuidv4(), productName: "fig", price: 30.00, cardCount: 0},
    {key: uuidv4(), productName: "grape", price: 35.00, cardCount: 0},
    {key: uuidv4(), productName: "hot sauce", price: 40.00, cardCount: 0},
    {key: uuidv4(), productName: "ice cream", price: 45.00, cardCount: 0},
    {key: uuidv4(), productName: "jam", price: 50.00, cardCount: 0},
    {key: uuidv4(), productName: "kale", price: 55.00, cardCount: 0},
    {key: uuidv4(), productName: "lemons", price: 60.00, cardCount: 0},
  ]

  const [inventory, setInventory] = useState( testInventory );

  const handleQtyChange = (e) => {
    // console.log(e.target.dataset.key);
    const targetItem = inventory.find(item => item.key === e.target.dataset.key);
    // console.log(targetItem);
    const value = parseFloat(e.target.value);
    // console.log(value);
 
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
          element: <PageShop handleQtyChange={handleQtyChange} addToCart={addToCart} inventory={inventory}/>
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
