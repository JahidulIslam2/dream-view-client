import React, { useEffect, useState } from 'react';
// import Lottie  from 'react-lottie';
// import animation from "../../../assets/animation.json";
import Review from './Review';
import ReviewCard from './ReviewCard';

const ServiceReview = ({detail}) => {

    const [reviewData,setReviewData ]=useState([]);

    
    useEffect(()=>{
        fetch('http://localhost:5000/review')
        .then(res => res.json())
           .then(data => {
            setReviewData(data)
           })
    },[])
  


    return (
        <div>
           
            

         
            <div>
              <Review detail={detail} key={detail._id}></Review>
            </div>
               {/* review input */}
            <div className='flex flex-col-2 h-32 '>
            {
                reviewData.map(review => <ReviewCard review={review} key={review._id}></ReviewCard>)

            }
            </div>
        </div>
    );
};

export default ServiceReview;