import React from 'react';

const AddService = () => {

    const handleForm =(event) =>{
        event.preventDefault();
        const form= event.target;

        const name =  form.name.value;
        const imageUrl= form.imageUrl.value;
        const price =  form.price.value;
        const description = form.description.value;

        form.reset();
        const add ={
            name,
            imageUrl,
            price,
            description,
            }

            fetch('https://dream-view-server.vercel.app/services',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(add)
            })
            .then(res => res.json())
            .then(data => {
                 console.log(data)
            })
            .catch(err=>{
                console.error(err)
            })
        

    }

    return (
        <div>
            <h1 className='text-center font-bold text-5xl font-serif mt-7'>
                Add Service
            </h1>
            <div className="grid max-w-screen-md grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-1 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100 bg-blue-300">
                <form onSubmit={handleForm} novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Service Name</label>
                        <input id="name" name='name' type="text" placeholder="service" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="image" className="text-sm">Image</label>
                        <input id="image" name='imageUrl' type="Photo" placeholder='Image' className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="price" className="text-sm">Price</label>
                        <input id="Price" name='price' type="price" placeholder='Price' className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="description" className="text-sm">description</label>
                        <textarea id="description" name='description' rows="3" className="w-full p-3 rounded dark:bg-gray-800" placeholder='description'></textarea>
                    </div>
                    <button type="submit" className="w-3/4 p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-green-300 dark:text-gray-900 mx-16">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;