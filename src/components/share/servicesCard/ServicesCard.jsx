
import React, { useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import emptyImg from '../../../assets/emptyImg.png';





const ServicesCard = ({ service }) => {
    const { name, img, price, rating, description, _id } = service;
    const [imgError, setImgError] = useState(false)
    const [serviceRating, setServiceRating] = useState(0)
    const stars = [1, 2, 3, 4, 5];

    //no image problem solved
    const handleImgError = () => {
        setImgError(true);
    }

    //rating
    const handleRating = (newRating, id) => {
        console.log(newRating, id)

        fetch(`http://localhost:5000/services/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newRating)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }


    return (
        <div>
            <div className='relative h-fit w-4/5 border 
            p-4 bg-stone-800 text-white rounded-md shadow-lg mx-auto'>


                <div>
                    <PhotoProvider>
                        <PhotoView src={img}>
                            {
                                imgError ?
                                    <img src={emptyImg} alt="" title='Click View Image' className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />
                                    :
                                    <img src={img} alt="" onError={handleImgError} title='Click View Image' className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />
                            }

                        </PhotoView>
                    </PhotoProvider>

                    <h2 className="mb-1 text-2xl font-semibold">Service Name: <span className='text-2xl font-bold'>{name}</span></h2>
                    <p className='text-xl font-semibold'>Project cost: <span className='font-bold'>{price}</span></p>
                    <p className='my-4 text-lg'>Rating: {rating} <div className="rating">


                        {
                            stars.map((star) => (
                                <input type="radio" key={star} name="rating-1" className={`mask mask-star bg-white h-4 ${star <= serviceRating ? 'text-yellow-400' : 'text-gray-800'}`} onClick={() => handleRating(star, _id)} checked />
                            )
                            )
                        }
                    </div>
                        <hr />
                    </p>
                    {
                        description?.length > 100 ?
                            <p className='text-xl '> {description.slice(0, 100) + '....'}</p>
                            :
                            <>{description}</>
                    }

                    <Link to={`/serviceDetails/${_id}`}>
                        <p className='text-lime-500 text-xl text-right hover:text-blue-500 focus:text-gray-800'>
                            View Details
                        </p>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="flex space-x-2 text-sm dark:text-gray-900">

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServicesCard;



