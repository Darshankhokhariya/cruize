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
                                            <Link to={`/singel/${item._id}`}>
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
                </Swiper>
            </div>
        </>
    )
}

export default Product