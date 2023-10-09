
import {
  createBrowserRouter,

} from "react-router-dom";
import Roots from "../Main/Roots";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Details from "../Pages/Details";
import Privaterout from "./Privaterout";
import Youridea from "../Pages/Youridea";
import Contact from "../Pages/Contact";
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
        path:'/details/:id',
        element:<Privaterout><Details></Details></Privaterout>,
        loader:()=>fetch('/homejsoncard.json')
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/regi',
        element:<Registration></Registration>
      },
      {
        path:'/ideas',
        element:<Privaterout><Youridea></Youridea></Privaterout>
      },
      {
        path:'/contact',
        element:<Privaterout><Contact></Contact></Privaterout>
      },
    ]
  },
]);


export default router;