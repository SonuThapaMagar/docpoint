import React from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const TopDoctors = () => {

  const navigate=useNavigate();

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 pt-5 px-3 sm:px-0'>

        {
          doctors.slice(0, 10).map((item, index) => (
            <div onClick={()=>navigate(`/appointment/${item._id}`)} key={index} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-6 transition-all duration-500 p-4 m-2'>
              <img src={item.image} alt="" className='bg-blue-50 w-full h-auto rounded-lg' />
              <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                  <p>Available</p>
                </div>

                <p className='font-semibold'>{item.name}</p>
                <p className='text-gray-600'>{item.speciality}</p>
              </div>
            </div>
          ))
        }
      </div>

      <button className='bg-blue-100 text-gray-900 rounded-full mt-10 py-3 px-12 cursor-pointer'>More</button>
    </div>
  )
}

export default TopDoctors
