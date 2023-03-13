
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import Shop from './Components/Shop/Shop'
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import { loadersAndCart } from './Loaders/LoadersAndCart';
import About from './Components/About/About';
import SignIn from './Components/SignIn/Signin';
import SignUp from './Components/SignUp/Singup';

function App() {
  const route = createBrowserRouter([
    {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:"/",
        loader: ()=>fetch("products.json"),
        element: <Shop></Shop>

      },
      {
        path: 'order',
        loader: loadersAndCart,
        element:<Order></Order>
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>
      },
      
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'signin',
        element: <SignIn></SignIn>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
      
  ]
    }
  ])
  return (
    <div >
     <RouterProvider router = {route}></RouterProvider>
    </div>
  );
}

export default App;
