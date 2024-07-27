import React from 'react'
import Testimonial1 from "../assets/images/testimonial1.png"
import Testimonial2 from "../assets/images/testimonial2.png"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
const Testimonial = () => {
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
            desination:"CEO",
            comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",

        },
        {
            img: Testimonial2,
            name:"Djamila Malak",
            desination:"Co-Founder RobaKabyle",
            comment: "Our team of digital product creators and Tch Bring Skilled will take your idea to the next level and help you with your product",

        },
    ]
  return (
    <div>
       <div className="custom-navigation-buttons content flex flex-row relative z-10 mx-16 lg:mx-36">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation, Autoplay]}
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="p-4 flex flex-col ">
              <p className="text-gray-700">{item.comment}</p>
              <div className='flex my-10'>
                <img src={item.img} alt="" className='rounded-full object-cover' />
                <div className='flex flex-col'>
                    <p>{item.name}</p>
                    <p>{item.desination}</p>

                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  )
}

export default Testimonial
