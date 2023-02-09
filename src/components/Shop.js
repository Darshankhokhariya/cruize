import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';

function Shop() {

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
     
      <div className="grid lg:grid-cols-6 justify-items-center mt-32">
        {
          data.map((item) => {
            return (

              <>
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

              </>
            )
          })
        }
      </div>
    </>
  )
}

export default Shop