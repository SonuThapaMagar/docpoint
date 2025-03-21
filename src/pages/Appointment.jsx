import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import verifiedIcon from '../assets/assets_frontend/verified_icon.svg';
import infoIcon from '../assets/assets_frontend/info_icon.svg';


const Appointment = () => {

  const { docId } = useParams()
  const { doctors, currencySymbol } = useContext(AppContext) //doctors data

  const [docInfo, setDocInfo] = useState(null);

  const fetchDocInfo = async () => {

    const docInfo = doctors.find(doc => doc._id === docId) //doctor data stored in docInfo variable
    setDocInfo(docInfo);
    console.log(docInfo)

  }

  useEffect(() => {

    fetchDocInfo()
  }, [doctors, docId])


  return docInfo && (
    <div>
      {/**Doctor Details */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-[#5F6FFF] w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/**Doctor Info name, degree and exp */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
            <img className='w-5' src={verifiedIcon} alt="" />
          </p>

          {/**Doctor degree & speciality */}
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600 '>
            <p>{docInfo.degree} - {docInfo.speciality}</p>

            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>

          {/**About Doctor */}
          <div>
            <p className='flex items-center gap-1 text-2xl font-medium text-gray-900 mt-3'>
              About <img src={infoIcon} alt="" />
            </p>

            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>

          <p className='font-medium text-gray-500 mt-4'>
          Appointment fee: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

    </div>
  )
}

export default Appointment
