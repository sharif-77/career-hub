import { createBrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
import JobDetails from "../JobDetails/JobDetails";
import AppliedJobs from "../AppliedJob/AppliedJobs";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Header />,
        children:[
            {
                path:'/',
                loader:()=>fetch(`/jobs.json`),
                element:<Home/>
            },
            {
                path:'/appliedJob',
                loader:()=>fetch(`/jobs.json`),
                element:<AppliedJobs/>

            },
           
            {
                path:'/jobDetails/:id',
                loader:()=>fetch(`/jobs.json`),
                element:<JobDetails/>
            },
        ]
    }
])
export default router