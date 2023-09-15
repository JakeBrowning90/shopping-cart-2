import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './components/NavBar'
import PageError from './components/PageError'
import PageHome from './components/PageHome'
import PageShop from './components/PageShop'
import "./styles/reset.css"
import "./styles/styles.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
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
  return (
    <>
      <RouterProvider router={router} />
      <footer>Footer</footer>
    </>
  )
}

export default App
