import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
    const { name, img, price, rating, descripion,_id } = item;

    return (
        <div className='bg-white border shadow-red-200 rounded-lg p-2'>


            <div>
                <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />
                <h2 className="mb-1 text-2xl font-semibold">Service Name: <span className='text-2xl font-bold'>{name}</span></h2>
                <p className='text-xl font-semibold'>Project cost: <span className='font-bold'>{price}</span></p>
                <p className='my-4 text-lg'>Rating: {rating} <div className="rating">
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                </div></p>
                <p className='text-xl f'> {descripion.slice(0, 100) + '....'}</p>
                <Link to="/services">
                    <p className='text-lime-500 text-xl text-right hover:text-gray-800'>
                    See all
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


