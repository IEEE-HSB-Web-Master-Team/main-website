import { useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Home from './components/Home/Home';

let routers = createBrowserRouter([
  {
    path: '' , element:<Layout/> , children:[
      {index:true, element:<Home/>},
      {path:'about' , element:<About/>},
      {path:'home' , element:<Home/>}
    ]
  }
])

function App() {

  


  return (
    <>
      <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
