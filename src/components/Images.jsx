import React from 'react'

export default function Images({image}) {
  return (
    <div>
      <img src={image.urls.small} alt='abc'/>
    </div>
  )
}
