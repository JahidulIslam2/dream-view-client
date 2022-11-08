import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/page/home/Home';
import ServiceDetails from '../components/share/serviceDetails/ServiceDetails';
import Services from '../components/share/services/Services';
import Root from '../root/Root';


 export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element: <Home/>,
                    loader: ()=> fetch('http://localhost:5000/service')
                },
                {
                    path:'/services',
                    element: <Services></Services>,
                    loader: ()=> fetch('http://localhost:5000/services')
                },
                {
                    path:'/serviceDetails/:id',
                    element:<ServiceDetails></ServiceDetails>
                }
            ]
        }
    ])


