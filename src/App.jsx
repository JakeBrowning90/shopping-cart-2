import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavBar from './NavBar'
import PageHome from './PageHome'
import PageShop from './PageShop'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    children: [
      {path:"/", element: <PageHome />},
      {path:"/shop", element: <PageShop />},
    ]
  },
])

function App() {
  return (
    <>
      <header>Header</header>
      <RouterProvider router={router} />
      <footer>Footer</footer>
    </>
  )
}

export default App
