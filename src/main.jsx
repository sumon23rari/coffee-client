import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Adduser from './components/Adduser.jsx'
import UpdateUser from './components/UpdateUser.jsx'
import Register from './components/Register.jsx'
import LogIn from './components/LogIn.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import Users from './components/Users.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    loader:()=>fetch('http://localhost:7000/coffee')
  },
  {
    path:'/addUser',
    element:<Adduser></Adduser>
  },
  {
path:'/register',
element:<Register></Register>
  },
  {
    path:'/login',
    element:<LogIn></LogIn>
  },
  {
    path:'/users',
    element:<Users></Users>,
    loader:()=>fetch(`http://localhost:7000/user`)
  },
 
  {
    path:'updateCoffee/:id',
    element:<UpdateUser></UpdateUser>,
    loader:({params})=>fetch(`http://localhost:7000/coffee/${params.id}`)
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProviders>
   <RouterProvider router={router}></RouterProvider>
   </AuthProviders>
  </React.StrictMode>,
)
