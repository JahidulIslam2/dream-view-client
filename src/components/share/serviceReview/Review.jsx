import React, { useContext} from 'react';
import { ProvideContext } from '../../../provideAuth/ProvideAuth';

const Review = ({detail}) => {
    const {_id,name}=detail
    const {user} =useContext(ProvideContext)
    const photo =user?.photoURL;


    const handleForm =(event)=>{
        event.preventDefault();
        const form= event.target;
        const name =  form.name.value;
        const email=form.email.value;
        const message = form.message.value;
        form.reset();
        const review ={
            name,
            email,
            message,
            userPhoto:photo,
            id:_id
            }

            fetch('http://localhost:5000/review',{
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(review)
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
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:text-gray-100">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Service Review</h2>
                        <h3 className='text-2xl font-semibold leading-tight lg:text-3xl text-green-300'>{name}</h3>
                        <div className="dark:text-gray-400">Here Write your valuable Opinion</div>
                    </div>
                    <img src="assets/svg/doodle.svg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form onSubmit={handleForm}  novalidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label for="name" className="text-sm">Full name</label>
                        <input id="name" name='name' type="text" placeholder="Name" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="email" className="text-sm">Email</label>
                        <input id="email" name='email' type="email" className="w-full p-3 rounded dark:bg-gray-800" />
                    </div>
                    <div>
                        <label for="message" className="text-sm">Write Review</label>
                        <textarea id="message" name='message' rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default Review;