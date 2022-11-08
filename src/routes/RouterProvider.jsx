import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/page/home/Home';
import Root from '../root/Root';


 export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            children:[
                {
                    path:'/',
                    element: <Home/>
                }
            ]
        }
    ])


