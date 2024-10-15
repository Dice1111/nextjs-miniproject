import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex bg-slate-200'>
        <Link href='/' className='mr-5'>next.js</Link>
        <Link href="/users">users</Link>
    </div>
  )
}

export default Navbar