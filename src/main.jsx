import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './config/redux/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import Cart from './cart.jsx'


const router = createBrowserRouter([{
  path:"/",
  element:<Layout/>,
  children:[{
      path:"",
      element:<App/>
  },
  {
   path:"cart",
   element:<Cart/>
  }
]

}])

createRoot(document.getElementById('root')).render(

    <Provider store={store}>
    <RouterProvider router={router}>
      
      <App />
    </RouterProvider>
      </Provider>
    
 ,
)
