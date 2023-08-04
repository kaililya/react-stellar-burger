import React from 'react'
import styles from './not-found.module.css'
import cat from '../../image/page_not_found.jpg'

function NotFoundPage() {
  return (
    <div>
      <img src={cat} alt="cat" />
    </div>
  )
}

export default NotFoundPage