import React, { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { ProvideContext } from '../../../provideAuth/ProvideAuth';
import MyReviewCard from './myReviewCard';

const MyReview = () => {
    const {user} =useContext(ProvideContext)
    const [myReview,setMyreview]=useState();
 
    useEffect(()=>{
        fetch(`https://dream-view-server.vercel.app/myreview?${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setMyreview(data);
        })
    },[user?.email])


    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 my-4 m-4 gap-4 sm:grid-cols-1 sm:gap-4'>

        {
            myReview?.map(review => <MyReviewCard reviewData={review} key={review._id}></MyReviewCard>)
        }

           
        </div>
    );
};

export default MyReview;