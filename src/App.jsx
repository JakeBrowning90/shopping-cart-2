import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar'
import PageError from './components/PageError'
import PageHome from './components/PageHome'
import PageShop from './components/PageShop'
import "./styles/reset.css"
import "./styles/styles.css"

function App() {
  const [apiData, setApiData] = useState([])
  const [cartTotal, setCartTotal] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);
  const [inventory, setInventory] = useState([]);

  // Update item's cardCount to match value in input
  const handleQtyChange = (e) => {
    const targetItem = inventory.find(item => item.key === e.target.dataset.key);
    const value = parseFloat(e.target.value);
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

  // Update cartTotal with value from and reset input to zero
  const addToCart = (e) => {
      const targetItem = inventory.find(item => item.key === e.target.dataset.key);
      setCartPrice(cartPrice => cartPrice + (targetItem.cardCount * targetItem.price))
      setCartTotal(cartTotal => cartTotal + targetItem.cardCount);
      // Refresh inventory with target object's cardCount set to zero
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

  // Placeholder for Cart button functionality
  const displayCart = () => {
    alert("You have " + cartTotal + " items in your cart, totaling $" + cartPrice + "!");
  }

  // Get store items for API on page mount, pass to inventory array with keys and cardCount
  useEffect(() => {
    const getAPI = async () => {
      let response = await fetch('https://fakestoreapi.com/products?limit=20')
      let data = await response.json();
      data.forEach((item, i) => {
        setInventory((inventory) => [...inventory, {key: uuidv4(), title: item.title, image: item.image, price: item.price, cardCount: 0}])
      })
    }
    getAPI();
  }, [])

  // Router component containing NavBar, Error page, and paths to Home and Shop
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar cartTotal={cartTotal} cartPrice={cartPrice} displayCart={displayCart}/>,
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
      <footer>
        <div>Made by Jake Browning for The Odin Project, 2023. | <a href="https://jakebrowning90.github.io/personal-portfolio/" target="_blank">Portfolio</a></div>
        <div><a href='https://fakestoreapi.com/' target="_blank">Fake Store API</a> by MohammadReza Keikavousi</div>
      </footer>
    </>
  )
}

export default App
