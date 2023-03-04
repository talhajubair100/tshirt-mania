import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Main from './layouts/Main';
import GrandPa from './components/Grandpa/GrandPa';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch('tshirt.json'),
          element: <Home></Home>,
        },
        {
          path: '/orders',
          element: <Orders></Orders>,
        },
        {
          path: '/grandpa',
          element: <GrandPa></GrandPa>
        }
      ]
    },
    {
      path: "*",
      element: <div>Not Found</div>
    }
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
