import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from '../../public/list.json';
import Cards from './Cards';

function FreeBook() {

    const filterFreeBooks = list.filter((book) => book.category === 'Free');

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        accessibility: true, // Enable keyboard navigation
        draggable: true, // Enable mouse drag
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    console.log(filterFreeBooks);
    

  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
        <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt magnam, repellat distinctio blanditiis officia pariatur, 
            ullam odit perspiciatis, corporis doloremque iure nesciunt reiciendis necessitatibus temporibus.
        </p>
        </div>
    <div>
      <Slider {...settings}>
      {filterFreeBooks.map((book) => 
      
      <Cards  item={book} key={book.id}/>
      )}
      </Slider>
    </div>
    </div>
    </>
  )
}

export default FreeBook