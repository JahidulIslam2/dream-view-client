import React from 'react';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { useState } from 'react';
const notify = () => toast('Here is your toast.');
// notify();
// <Toaster/>


const ReviewCard = ({ review, detail }) => {
    const [reviews,setReview]=useState()


    // const { _id } = detail
    const { name, email, message, userPhoto,_id } = review;

    const deleteHandler = (id) => {
        const accept = window.confirm('Confirm Delete Item!');
        if (accept) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (review.deletedCount > 0) {
                        alert('successfully Deleted');
                        notify();
                        <Toaster />
                        const remaining = review.filter(p => p._id !== id)
                        setReview(remaining)
                    }
                 
                })
        }
    }


    return (
        <>
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <Link className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Update</Link>
                </div>
                <div className="mt-2">
                    <a href="https://stackdiary.com/" className="text-2xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline">{name}</a>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">{message}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button onClick={() => deleteHandler(_id)} className="btn btn-ghost text-blue-600 dark:text-blue-400 hover:underline">Delete</button>
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