import React from 'react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/autoplay';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Autoplay } from 'swiper';

function Slide() {
    return (
        <>
            <div className=''>

            <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}>



                <SwiperSlide>
                    <img src={require('../images/slide1.jpg')} className='w-full h-[710px] object-cover relative' alt="" />
                    <div className='text-center absolute  top-72 left-[400px] m-auto text-white'>
                        <h3 className='capitalize text-xl'>flat online deal</h3>
                        <h1 className='text-6xl capitalize'>for best quality Product</h1>
                        <button className='mt-6 bg-slate-500 px-4 py-2 rounded-full'>view more</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={require('../images/slide4.jpg')} className='w-full h-[710px] object-cover ' alt="" />
                    <div className='text-center absolute  top-72 left-[400px] m-auto text-white'>
                        <h3 className='capitalize text-xl'>flat online deal</h3>
                        <h1 className='text-6xl capitalize'>for best quality Product</h1>
                        <button className='mt-6 bg-slate-500 px-4 py-2 rounded-full'>view more</button>
                    </div>
                </SwiperSlide>
              
            </Swiper>
            </div>




        </>
    )
}

export default Slide