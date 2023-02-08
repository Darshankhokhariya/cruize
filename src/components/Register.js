import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';


function Register() {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass] = useState('');

    const navigate = useNavigate();





    const reg = () => {
        if (pass == cpass) {

            axios.post('http://localhost:5000/userRegister', {
                name: name,
                email: email,
                password: cpass
            })
                .then(function (response) {
                    console.warn("response",response);
                    navigate('/');
                })
                .catch(function (error) {
                    console.log(error);
                });


        }
        else{
            alert("Plese enter valid password")
        }
      
    }

  return (
    <>
         <main
                class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white"
            >
                {/* <!-- component --> */}
                <section class="flex w-[30rem] flex-col space-y-10">
                    <div class="text-center text-4xl font-medium">REGISTER</div>

                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="text"
                            onChange={(e)=>{setname(e.target.value)}}
                            placeholder="Username"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>
                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="email"
                            onChange={(e)=>{setemail(e.target.value)}}
                            placeholder="Email"
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
                    <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                        <input
                            type="password"
                            onChange={(e)=>{setcpass(e.target.value)}}
                            placeholder="Confirm Password"
                            class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
                        />
                    </div>

                    <button
                        class="transform rounded-sm bg-indigo-600 py-2 px-2 font-bold duration-300 hover:bg-indigo-400"
                        onClick={reg}
                    >
                       Register
                    </button>

                    <a
                        href="#"
                        class="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
                    >FORGOT PASSWORD?</a>

                    <p class="text-center text-lg">
                        No account?
                        <a  class="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
                    </p>
                </section>
            </main>
    </>
  )
}

export default Register