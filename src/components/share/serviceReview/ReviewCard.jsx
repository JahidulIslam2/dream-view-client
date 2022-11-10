import React from 'react';
import { Link } from 'react-router-dom';


const ReviewCard = ({ review, detail}) => {

    const { name, email, message, userPhoto } = review;

   


    return (
        <>
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="mt-2">
                    <a href="https://stackdiary.com/" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{name}</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
                </div>
                <div className="flex items-center justify-between mt-4">

                    <div className="flex items-center"> 
                        <img src={userPhoto} className='hidden object-cover w-10 h-10 mx-4 rounded-full sm:block' alt="" />
                        <Link className="font-bold text-gray-700 cursor-pointer dark:text-gray-200">{email}</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;