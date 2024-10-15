import React, { Suspense } from 'react';
import Link from 'next/link';
import UserTable from '../components/UserTable';


interface Props{
  searchParams: {sortOrder: string}
}



const UsersPage =({searchParams:{sortOrder}}:Props) => {




  return (
    <div>
      <h1>users </h1>
      <Link href="users/new" className='btn'> new user</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      
      <Suspense fallback={<p>Loading...</p>}>
        <UserTable sortOrder ={sortOrder}/> 
      </Suspense>
      
    </div>
  );
}

export default UsersPage