import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emptyImg from '../../../assets/emptyImg.png';
import { FiArrowRight } from 'react-icons/fi';

const Card = ({ item }) => {
    const { name, img, price, rating, description } = item;
    const [imgError, setImgError] = useState(false)

    //handle imageError.if image error true we display the empty Img icon. if imageError false we display the original image.
    const handleImgError = () => {
        setImgError(true)
    }

    return (
        <div className='bg-slate-400 border shadow-lg rounded-lg p-2'>


            <div>
                {
                    imgError ?

                        <img src={emptyImg} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />
                        :
                        <img src={img} alt="" onError={handleImgError} className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />
                }




                <h2 className="mb-1 text-2xl font-semibold">Service Name: <span className='text-2xl font-bold'>{name}</span></h2>
                <p className='text-xl font-semibold'>Project cost: <span className='font-bold'>{price}</span></p>
                <p className='my-4 text-lg'>Rating: {rating} <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                </div></p>
                <p className='text-xl f'> {description.slice(0, 100) + '....'}</p>
                <Link to="/services">
                    <p className='text-green-600 text-xl flex items-center justify-end text-right hover:text-gray-800'>
                        See all
                        <FiArrowRight />
                    </p>
                </Link>
            </div>
            <div className="flex flex-wrap justify-between">

                <div className="flex space-x-2 text-sm dark:text-gray-900">


                </div>
            </div>
        </div>

    );
};

export default Card;


