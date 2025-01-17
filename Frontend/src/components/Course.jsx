import React, { useEffect } from 'react'
import axios from 'axios';
import Cards from './Cards'
import { Link } from 'react-router-dom'
function Course() {
  const [book, setBook] = React.useState([]);

  useEffect(() => {
   const setBooks = async () => {
    try {
      const res = await axios.get('http://localhost:4001/book')
      console.log(res.data, "res");
      setBook(res.data)
    } catch (error) {
      console.log(error)    
    }
   }

   setBooks();
  },[])

  return (
    <>
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className='mt-28 items-center justify-center text-center'>
      <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
      </h1>
      <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quae mollitia illum quisquam ipsam nesciunt, sed, 
        voluptatem explicabo quibusdam ut voluptates nisi, excepturi voluptas odio aspernatur? Nisi numquam cupiditate voluptates.
      Voluptatibus dolores quasi autem, ducimus ipsum eaque enim iusto molestiae deserunt dignissimos optio ut quibusdam veniam tempore
       at cumque cupiditate. Explicabo reprehenderit labore perspiciatis fugit laborum perferendis excepturi amet aperiam.
       </p>
       <Link to={'/'}>
       <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6'>Back</button>
       </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4  mt-12'>
        {book.map((item) => (
          <Cards item={item} key={item.id}/>
        ))}
      </div>
    </div>
    </>
  )
}

export default Course