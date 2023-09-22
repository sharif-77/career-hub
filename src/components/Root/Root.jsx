import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import AppliedJob from "../AppliedJob/AppliedJob";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Header />,
        children:[
            {
                path:'/',
                loader:()=>fetch(`./jobs.json`),
                element:<Home/>
            },
            {
                path:'/appliedJob',
                element:<AppliedJob/>
            }
        ]
    }
])
export default router