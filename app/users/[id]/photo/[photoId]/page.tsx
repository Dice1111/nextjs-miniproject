import React from 'react'

interface Props{
    params: {id: number, photoId: number}
}



const ImagePage = ({params:{id, photoId}}:Props) => {
  return (
    <div>ImagePage {id} {photoId}</div>
  )
}

export default ImagePage