import { createBrowserRouter } from "react-router"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Mainlayout from "../layouts/Mainlayout"
import CardDatails from "../pages/CardDatails"
import MyProfile from "../pages/MyProfile"
import Blogs from "../pages/Blogs"
import PrivateProvider from "../provider/PrivateProvider"
import ErrorPages from "../pages/ErrorPages"
import Items from "../pages/Items"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Support from "../pages/Support"

const router =createBrowserRouter(
    [
        {
            path:"/",
            element:<Mainlayout></Mainlayout>,
            errorElement: <ErrorPages />, 
            children:[
                {
                    index: true,
                    element: <Home></Home>
                },
                {
                    path: "/blogs",
                    element: <Blogs></Blogs>,
                    
                },
                {
                    path: "/about",
                    element: <About/>,
                    
                },
                {
                    path: "/support",
                    element: <Support/>,
                    
                },
                {
                    path: "/contact",
                    element: <Contact/>,
                    
                },
                {
                    path: "/auth/login",
                    element: <Login></Login>,
                    
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>,
                    
                },
                {
                    path: "/details/:id",
                    element: 
      
       <PrivateProvider><CardDatails /></PrivateProvider>
      
    
                },
                {
                    path: "/myProfile",
                    element: <PrivateProvider>
                        <MyProfile></MyProfile>
                    </PrivateProvider>,
                    
                },
                {
                    path: "/items",
                    element: <Items/>
                        
                    
                },
                
            ]
        }
        
         
        
    ]
)
export default router