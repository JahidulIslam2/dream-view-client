import React from 'react';
import { Link } from 'react-router-dom';
import ServiceReview from '../serviceReview/ServiceReview';

const Details = ({ detail }) => {
    const { name, img, price, rating, descripion, _id } = detail;
    return (
        <div className='bg-blue-300'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-blue-300 dark:text-gray-100">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                        <div className="space-y-2">
                            <Link rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">{name}</Link>
                            <p className="text-xs dark:text-gray-400">Service Cost:
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline">  {price}</Link>
                            </p>
                        </div>
                        <div className="dark:text-gray-100">
                            <p>{descripion}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Review Section */}
            <div>
               <ServiceReview></ServiceReview>
            </div>
        </div>
    );
};

export default Details;