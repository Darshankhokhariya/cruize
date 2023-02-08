import React, { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Product() {

    const [data, setdata] = useState([]);
    const navigate = useNavigate();
    
    

    useEffect(() => {
        axios.get('http://localhost:5000/getallproduct')
            .then(function (response) {
                console.log(response.data);
                setdata(response.data);
            })
            .catch(function (error) {

                console.log(error);
            })

    }, []);

    function single(id){
        sessionStorage.setItem("product_id",id);
        navigate('/singel')
    }

   

    return (
        <>
            <div className="bg-black container px-20 mt-10">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={5}
                    modules={[FreeMode, Autoplay]}
                    loop={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                            },
                            1280: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            }
                        }
                    }
                >

                        <div className="main">
                            {
                                data.map((item) => {
                                    return (

                                        <>
                                            <SwiperSlide>
                                            <Link to='/singel' onClick={()=>{single(item._id)}} >
                                                <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                                                        <div class="relative flex items-end overflow-hidden rounded-xl">
                                                            <img src={item.product_image} className='w-[200px] h-[200px] object-cover' />
                                                        </div>

                                                        <div class="mt-1 p-2">
                                                            <h2 class="text-white">{item.product_name}</h2>
                                                            <p class="mt-1 text-sm text-slate-400"></p>

                                                            <div class="mt-3 flex items-end justify-between">
                                                                <p>
                                                                    <span class="text-lg font-bold text-blue-500">$850</span>
                                                                </p>
                                                            </div>
                                                        </div>
                                                </article>                                                
                                                </Link>
                                            </SwiperSlide>
                                        </>
                                    )
                                })
                            }
                        </div>




                    {/* <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/2.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/3.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/4.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/5.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/6.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/7.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/8.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide>
                    <SwiperSlide>
                        <article class="rounded-xl bg-neutral-800 p-3 mx-2 my-2 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300">
                            <a href="#">
                                <div class="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={require('../images/9.jpg')} alt="Hotel Photo" />
                                </div>

                                <div class="mt-1 p-2">
                                    <h2 class="text-white">The Hilton Hotel</h2>
                                    <p class="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>

                                    <div class="mt-3 flex items-end justify-between">
                                        <p>
                                            <span class="text-lg font-bold text-blue-500">$850</span>
                                        </p>

                                        <div class="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white duration-100 hover:bg-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                            </svg>

                                            <button class="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    </SwiperSlide> */}


                </Swiper>
            </div>
        </>
    )
}

export default Product