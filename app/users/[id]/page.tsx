import React from 'react';
import { sort } from 'fast-sort';

interface Props{
    params :{ id: number }
    
}



const UserDetailPage = ({params:{id}}: Props) => {
  return (
    <div>UserDetailPage {id}</div>
  )
}

export default UserDetailPage