
import {
  createBrowserRouter,

} from "react-router-dom";
import Roots from "../Main/Roots";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Details from "../COMPONENTS/Header/Details";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/homejsoncard.json')
        
      },
      {
        path:'/details',
        element:<Details></Details>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regi',
        element:<Registration></Registration>
      }
    ]
  },
]);


export default router;