import cat from '../../image/page_not_found.jpg'

const NotFoundPage = ():JSX.Element => {
  return (
    <div>
      <img src={cat} alt="cat" />
    </div>
  )
}

export default NotFoundPage