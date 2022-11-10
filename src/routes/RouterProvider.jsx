import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from '../components/page/home/Home';
import AddService from '../components/share/addService/AddService';
import Login from '../components/share/login/Login';
import ServiceDetails from '../components/share/serviceDetails/ServiceDetails';
import Review from '../components/share/serviceReview/Review';
import Services from '../components/share/services/Services';
import SignUp from '../components/share/signUp/SignUp';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import Root from '../root/Root';
import MyReview from './../components/share/myReview/MyReview';
import Blog from './../components/page/Blog/Blog';


 export const routes=createBrowserRouter([
        {
            path:'/',
            element:<Root></Root>,
            
            children:[
                {
                    path:'/',
                    element: <Home/>,
                    loader: ()=> fetch('https://dream-view-server.vercel.app/service')
                },
                {
                    path:'/services',
                    element: <Services></Services>,
                    loader: ()=> fetch('https://dream-view-server.vercel.app/services')
                },
                {
                    path:'/serviceDetails/:id',
                    element:<ServiceDetails></ServiceDetails>,
                    loader: ({params})=> fetch(`https://dream-view-server.vercel.app/serviceDetails/${params.id}`)
                },
                {
                    path:'Login',
                    element:<Login></Login>
                },
                {
                    path:'signUp',
                    element: <SignUp></SignUp>
                },
                {
                    path: '/review',
                    element: <Review></Review>
                },
                {
                    path:'/myReview',
                    element: <ProtectedRoute><MyReview></MyReview></ProtectedRoute>
                    
                },
                {
                    path: '/addService',
                    element: <ProtectedRoute><AddService></AddService></ProtectedRoute>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>
                }
            ]
        }
    ])


