import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';



const ServicesCard = ({ service }) => {
    const { name, img, price, rating, descripion,_id} = service;
    return (
        <div>
            <div className='bg-white border shadow-red-200 rounded-lg p-2 w-4/5 h-fit'>


                <div>
                    <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />

                    </PhotoView>
                </PhotoProvider>

                    <h2 className="mb-1 text-2xl font-semibold">Service Name: <span className='text-2xl font-bold'>{name}</span></h2>
                    <p className='text-xl font-semibold'>Project cost: <span className='font-bold'>{price}</span></p>
                    <p className='my-4 text-lg'>Rating: {rating} <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                        <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                        <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                        <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                        <input type="radio" name="rating-1" className="mask mask-star h-4" checked />
                    </div>
                        <hr />
                    </p>
                 {    
                  descripion?.length > 100 ?
                    <p className='text-xl f'> {descripion.slice(0,100)+ '....'}</p>
                        :
                        <>{descripion}</>
                    }

                    <Link to={`/serviceDetails/${_id}`}>
                        <p className='text-lime-500 text-xl text-right hover:text-gray-800'>
                            View Details
                        </p>
                    </Link>
                </div>
                <div className="flex flex-wrap justify-between">

                    <div className="flex space-x-2 text-sm dark:text-gray-900">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesCard;



