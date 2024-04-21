import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from '../componet/Layout'
import {Home , Categoris , About , Portfolio , List ,  Cart} from 'view'

export default function index() {
  
  
  
    let router =  createBrowserRouter([
        {path: "" , element:<Layout/>  , children:[
          {path: "home" , element:<Home/>},
          {path: "categoris" , element:<Categoris/>},
          {path: "cart" , element:<Cart/>},
          {path: "about" , element:<About/>},
          {path: "list" , element:<List/>},
          {path: "portfolio" , element:<Portfolio/>}
        ]}
      ]) 
     
  
  
  
  
  
    return (
        <RouterProvider router={router}/>
   
       
  )
}
