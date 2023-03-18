import React, { useEffect, useState } from 'react';
// import Lottie  from 'react-lottie';
// import animation from "../../../assets/animation.json";
import Review from './Review';
import ReviewCard from './ReviewCard';

const ServiceReview = ({ detail }) => {

    const [reviewData, setReviewData] = useState([]);


    useEffect(() => {
        fetch('https://dream-view-server.vercel.app/review')
            .then(res => res.json())
            .then(data => {
                setReviewData(data)
            })
    }, [])



    return (
        <div>


            <div>
                <Review detail={detail} key={detail._id}></Review>
            </div>
            {/* review input */}
            <div className='grid md:grid-cols-2 lg:grid-cols-2 my-4 m-4 gap-4 sm:grid-cols-1 sm:gap-4'>

                {
                    reviewData.map(review => <ReviewCard review={review} detail={detail} key={review._id}></ReviewCard>)

                }

            </div>
        </div>
    );
};

export default ServiceReview;