import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Shop() {

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
      <div className="grid lg:grid-cols-6 justify-items-center ">
        {
          data.map((item) => {
            return (

              <>
                  <Link to='/singel' onClick={() => { single(item._id) }} >
                    <div class="p-4 w-full">
                      <a class="block relative h-48 w-[200px] rounded overflow-hidden">
                        <img alt="ecommerce" class="object-cover object-center w-full h-full  block" src={item.product_image}/>
                      </a>
                      <div class="mt-4">
                        <h3 class="text-white text-sm tracking-widest title-font mb-1">{item.product_catagory}</h3>
                        <h2 class="text-white title-font text-lg font-medium">{item.product_name}</h2>
                        <p class="mt-1">$16.00</p>
                      </div>
                    </div>
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