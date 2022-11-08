import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Services = () => {
    const [service, setService] = useState();
    // const {img,rating,name,price,description}=service;
    // console.log(service)

    // useEffect(() => {
    //     fetch('http://localhost:5000/service')
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setService(data);
    //         })
    // }, [])
    const data =useLoaderData();
    console.log(data)
    return (
        <div className="flex flex-col max-w-md p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-zinc-300 dark:text-gray-900">
           
            <div>
                <img src={""} alt="" className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-300" />
                <h2 className="mb-1 text-xl font-semibold">Nam cu platonem posidonium sanctus debitis te</h2>
                <p className="text-sm dark:text-gray-900">Eu qualisque aliquando mel, id lorem detraxit nec, ad elit minimum pri. Illum ipsum detracto ne cum. Mundi nemore te ius, vim ad illud atqui apeirian...</p>
            </div>
            <div className="flex flex-wrap justify-between">
                
                <div className="flex space-x-2 text-sm dark:text-gray-900">
                   
                   
                </div>
            </div>
        </div>
    );
};

export default Services;


// <div className="container mx-auto px-20">
// <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 pt-20 pb-10 lg:pt-40 lg:pb-20 cursor-auto">
// </div>

// </div>