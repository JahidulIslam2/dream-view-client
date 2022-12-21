import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';




const MyReviewCard = ({ reviewData }) => {
    const { name, userPhoto, message, email, _id } = reviewData;
    const [reviews, setReview] = useState()

//delete review
    const deleteHandler = (id) => {
        const accept = window.confirm('Confirm Delete Item!');
        if (accept) {
            fetch(`https://dream-view-server.vercel.app/review/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }

            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    
                    if (reviews.deletedCount > 0) {
                        toast.success('successfully Deleted')
                        const remaining = reviews.filter(p => p._id !== id)
                        setReview(remaining)
                        
                    }

                })
        }
    }
//Update review
    const UpdateUser=(id) =>{
        fetch(`https://dream-view-server.vercel.app/review/${id}`,{
        method: 'PATCH',    
        headers:{
            'content-type': 'application/json',
            },
            body: JSON.stringify({info: 'approved'})
        })

        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast.success('Successfully Added')
            if(data.modifiedCount > 0){
                const remaining = reviews.filter(rvw => rvw._id !== id );
                const approving = reviews.find(rvw => rvw._id === id);
                approving.info = "Approving";
                const newOrders =[approving,...remaining]
                setReview(newOrders)
            }
        })


    }

    return (
        <div>
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="flex items-center justify-between">
                    <Link onClick={()=>UpdateUser(_id)} className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500">Update</Link>
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
        </div>
    );
};

export default MyReviewCard;

