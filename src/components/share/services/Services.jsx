import ServicesCard from '../servicesCard/ServicesCard';
import { useLoaderData } from 'react-router-dom';

const Services = () => {
    const services = useLoaderData();


    return (
        <div className="container mx-auto bg-zinc-300 mt-10}">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2 pt-20 pb-10 rounded-lg p-6 lg:mx-9 md:mx-9 sm:content-center">

                {
                    services.map((service) => <ServicesCard service={service} key={services._id}></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;