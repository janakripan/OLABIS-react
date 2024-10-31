import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter,  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './routes/Root.jsx'
import About from './routes/About'
import ErrorPage from './ErrorPage.jsx'
import Home from './routes/Home.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,

    children: [
      {
        path: "/",
        element: <Home/> ,
      },
      {
        path: "/about",
        element: <About/> ,
      },
    ],
   

  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
