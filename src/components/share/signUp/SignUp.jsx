import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProvideContext } from '../../../provideAuth/ProvideAuth';

const SignUp = () => {
    const {signUpWithEmailAndpass,updateUsers} =useContext(ProvideContext);

    const formHandler =(event) =>{
            event.preventDefault();
            const form =event.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photoURL = form.photoURL.value;
            console.log(name,email,password)

            signUpWithEmailAndpass(email,password)
            .then(result =>{
                const user=result.user;
                console.log(user)
                form.reset()
                UserInfo(name,photoURL);
            })
            .catch((error)=>{
                console.error(error)
           
            })
    }

    const UserInfo=(name,photoURL) =>{
        const profile={
            displayName:name,
            photoURL:photoURL,
        }
        updateUsers(profile)
        .then(()=>{})
        .catch((error)=> console.error(error))

    }

    

    return (
        <div>
            <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-blue-300">
               
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
                <div className='mb-9'>
                    <a href="/">
                        <h3 className="text-4xl font-bold text-purple-600">
                            Sign Up
                        </h3>
                    </a>
                </div>
                    <form onSubmit={formHandler}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    py-2 text-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    py-2 text-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                PhotoURL
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="url"
                                    name="photoURL"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    py-2 text-lg"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                                    py-2 text-lg"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <Link
                                className="text-sm text-gray-600 underline hover:text-gray-900"
                                to="/Login"
                            >
                                Already registered?
                            </Link>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-3 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;