import React from 'react'

function Cat() {
    return (
        <>
            <div className='container mx-auto px-10 bg-black py-10'>
                <div className='grid lg:grid-cols-2 grid-cols-1 lg:mx-32 justify-items-center'>
                    <div className='mt-5 relative'> 
                        <img src={require('../images/xm1.jpg')} className='object-cover w-[450px] rounded-lg relative' alt="" />
                    </div>

                    <div className='mt-5'>
                        <img src={require('../images/xm2.jpg')} className='object-cover w-[450px] rounded-lg relative' alt="" />
                        <div className='text-black absolute'>up to 30% off</div>
                    </div>
                   

                </div>
            </div>
        </>
    )
}

export default Cat