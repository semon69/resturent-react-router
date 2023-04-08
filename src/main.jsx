import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import About from './components/About/About';
import Posts from './components/Posts/Posts';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Restuarent from './components/Restuarent/Restuarent';
import ItemDetails from './components/ItemDetails/ItemDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element: <Home></Home>
      },
      {
        path:"/about",
        element: <About></About>
      },
      {
        path:'/posts',
        element: <Posts></Posts>
      },
      {
        path: "/meals",
        element:<Restuarent></Restuarent>,
        loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
      },
      {
        path: "meals/:id",
        element:<ItemDetails></ItemDetails>,
        loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
