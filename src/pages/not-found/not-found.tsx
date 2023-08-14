import React, { FunctionComponent } from 'react'
import styles from './not-found.module.css'
import cat from '../../image/page_not_found.jpg'

const NotFoundPage = ():JSX.Element => {
  return (
    <div>
      <img src={cat} alt="cat" />
    </div>
  )
}

export default NotFoundPage