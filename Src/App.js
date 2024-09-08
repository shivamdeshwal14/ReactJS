
import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import RestaurantMenu from "./Components/RestaurantMenu";

import Body from "./Components/Body";
import { Route, RouterProvider,Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import AboutClass from "./Components/AboutClass";
import Contactus from "./Components/Contactus";
import Error from "./Components/Error";
const AppLayout=()=>{
    return (
       
        <div className="app">
        <Header/>   
        <Outlet/>
        </div>
    );

}
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<AboutClass/>
        },
        {
            path:"/contact", 
            element:<Contactus/>
        },{
            path:"/restaurant/:resId",
            element:<RestaurantMenu/>

        }
    ]


    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)