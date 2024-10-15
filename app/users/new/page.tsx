'use client';


import React from 'react'
import{ useRouter } from 'next/navigation';

const NewUserPage = () => {

  const router = useRouter();

  return (
    
    <button onClick={()=>{router.push('/users')}} className='btn btn-primary'>Create</button>
  )
}

export default NewUserPage