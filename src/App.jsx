import { useEffect, useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';
import NavBar from './components/NavBar'
import PageError from './components/PageError'
import PageHome from './components/PageHome'
import PageShop from './components/PageShop'
import "./styles/reset.css"
import "./styles/styles.css"
import testPic from './components/img/roseRed.png'

//TODO - Make router a separate module
//TODO - Move cartCount state higher to prevent reset to 0

function App() {
  // const [inventory, setInventory] = useState( testInventory );
  const [cartTotal, setCartTotal] = useState(0);
  const [apiData, setApiData] = useState([])
  const [inventory, setInventory] = useState([]);

  const addToCart = (e) => {
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

  const displayCart = () => {
    alert("You have " + cartTotal + " items in your cart!")
  }

  // const testInventory = [
  //   {key: uuidv4(), title: "product1", image: testPic, price: 5.00, cardCount: 0},
  //   {key: uuidv4(), title: "product2", image: testPic, price: 5.00, cardCount: 0},
  //   {key: uuidv4(), title: "product3", image: testPic, price: 5.00, cardCount: 0},
  //   {key: uuidv4(), title: "product4", image: testPic, price: 5.00, cardCount: 0},
  //   {key: uuidv4(), title: "product5", image: testPic, price: 5.00, cardCount: 0},
  //   {key: uuidv4(), title: "product6", image: testPic, price: 5.00, cardCount: 0},
  // ]

  useEffect(() => {
    const getAPI = async () => {
      let response = await fetch('https://fakestoreapi.com/products?limit=20')
      let data = await response.json();
      console.log(data);
      // setApiData(data);
      data.forEach((item, i) => {
        setInventory((inventory) => [...inventory, {key: uuidv4(), title: item.title, image: item.image, price: item.price, cardCount: 0}])
      })
    }
    getAPI();
  }, [])

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar cartTotal={cartTotal} displayCart={displayCart}/>,
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
