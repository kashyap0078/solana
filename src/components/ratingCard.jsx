import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Testimonial1 from "../assets/images/testimonial1.png"
import Testimonial2 from "../assets/images/testimonial2.png"
import StarRatings from 'react-star-ratings';
import { Autoplay, Navigation } from 'swiper/modules';
import Google from '../assets/icons/google (1).png'
const ReviewCard = () => {
        const clients = [
            {
                img: Testimonial1,
                name:"Smail yefsssah",
                desination:"CEO",
                comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
    
            },
            {
                img: Testimonial2,
                name:"Djamila Malak ",
                desination:"Co-Founder RobaKabyle",
                comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
    
            },
            {
                img: Testimonial1,
                name:"Smail yefsssah",
                desination:"CEO",
                comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
    
            },
            {
                img: Testimonial2,
                name:"Djamila Malak",
                desination:"Co-Founder RobaKabyle",
                comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
    
            },
            {
                img: Testimonial1,
                name:"Smail yefsssah",
                designation:"CEO",
                comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
    
            },
            {
                img: Testimonial2,
                name:"Djamila Malak",
                designation:"Co-Founder RobaKabyle",
                comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",
    
            },
        ]
  return (

    <Swiper
        spaceBetween={50}
        slidesPerView={4}
        loop={true}
         navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Autoplay]}>

      {clients.map((client, index) => (
        <SwiperSlide key={index}>
          <div className="relative max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 z-10 mx-20">
            <div className='flex justify-between'>
            <div className="flex items-center mb-4">
              <img
                className="w-12 h-12 rounded-full"
                src={client.img}
                alt={`${client.name} Image`}
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{client.name}</h3>
                <span className="text-gray-500 text-sm">{client.designation}</span>
              </div>
            </div>
            <div>
              <img src={Google} alt="" />
            </div>
            </div>
            <div className="flex items-center mb-4">
              <StarRatings
                rating={4.5} 
                starRatedColor="#FFD700"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="2px"
                readonly
              />
            </div>
            <p className="text-gray-700 dark:text-gray-300">{client.comment}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
