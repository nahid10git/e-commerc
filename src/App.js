
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main/Main';
import Shop from './Components/Shop/Shop'
import Order from './Components/Orders/Order';
import Inventory from './Components/Inventory/Inventory';
import { loadersAndCart } from './Loaders/LoadersAndCart';

function App() {
  const route = createBrowserRouter([
    {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/shop',
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
