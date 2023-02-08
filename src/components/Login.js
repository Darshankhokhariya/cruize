import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {


    const [email,setemail] = useState('');
    const [pass,setpass] = useState('');

    const navigate = useNavigate();


    const reg = () => {
      

            axios.post('http://localhost:5000/userLogin', {
                email: email,
                password: pass,
            })
                .then(function (response) {
                    console.log(response);
                    navigate('/home')
                    
                    
                })
                .catch(function (error) {
                    console.log(error);
                });


      
    }


    return (
        <>
            {/* <!-- page --> */}
            <main
                class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
            >
                {/* <!-- component --> */}
                <section class="flex w-[30rem] flex-col space-y-10">
                    <div class="text-center text-4xl font-medium">Log In</div>

                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="text"
                            onChange={(e)=>{setemail(e.target.value)}}
                            placeholder="Email or Username"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="password"
                            onChange={(e)=>{setpass(e.target.value)}}
                            placeholder="Password"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                        <button
                            class="transform rounded-sm bg-indigo-600 py-2 px-2 font-bold duration-300 hover:bg-indigo-400"
                            onClick={reg}
                        >
                            LOG IN
                        </button>

                    <a
                        href="#"
                        class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                    >FORGOT PASSWORD?</a>

                    <p class="text-center text-lg">
                        No account?
                        <Link to='/register'>
                            <a class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
                        </Link>
                    </p>
                </section>
            </main>
        </>
    )
}

export default Login