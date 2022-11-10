import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ProvideContext } from '../../../provideAuth/ProvideAuth';

const Login = () => {
    const { LoginWithEmailAndPass, GoogleSignIn } = useContext(ProvideContext);
    const location =useLocation();
    const navigate=useNavigate();

    const from =location.state?.from?.pathname || "/"
    const HandleForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        LoginWithEmailAndPass(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true});
            })
            .catch((error) => console.error(error))

    }

    const googleLogIn = () => {
        GoogleSignIn()
            .then((user) => {
                console.log(user);
            })
            .catch((error) => console.error(error))

    }
    return (
        <div className="hero my-20">
            <div className="hero-content grid md:grid-cols-1 flex-col lg:flex-row gap-2 bg-blue-300 md:p-20 lg:p-20 rounded-lg shadow-xl ">

                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm dark:text-black">Sign in to access your account</p>
                </div>
                <form onSubmit={HandleForm} novalidate="" action="" className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="email@.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-black" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-black">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-white dark:text-black" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="btn" className="btn btn-wide px-8 py-3 font-semibold rounded-md dark:bg-blue-400 dark:text-gray-900">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center dark:text-black">Don't have an account yet?
                            <Link rel="noopener noreferrer" to="/singUp" className="hover:underline dark:text-violet-900">Sign up</Link>.
                        </p>
                        <div>
                            <p className='text-center'>OR</p>
                        </div>
                        <button onClick={googleLogIn} className="btn btn-wide ">LOGIN WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;