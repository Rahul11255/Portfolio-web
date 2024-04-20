import React from 'react'
import "./testimonial.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Cards from './Cards';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import slide_image_1 from '../../images/img_1.jpg';
// import slide_image_2 from '../../images/img_2.jpg';
// import slide_image_3 from '../../images/img_3.jpg';
// import slide_image_4 from '../../images/img_4.jpg';
// import slide_image_5 from '../../images/img_5.jpg';
// import slide_image_6 from '../../images/img_6.jpg';
// import slide_image_7 from '../../images/img_7.jpg';





const Testimonial = () => {
  return (
    <>
     <section className='test_container' id='Testimonial'>
        <div className="top_test_text">
        <p>TESTIMONIAL</p>
        <h1>Happy Guests</h1>
        </div>
        <div className="container">
      <Swiper
      autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 70,
          modifier: 30,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[Autoplay,EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
      {/* <div>
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" loading='lazy' />
        </SwiperSlide>
        </div> */}

        <SwiperSlide>
          <Cards/>
        </SwiperSlide>
        <SwiperSlide>
          <Cards/>
        </SwiperSlide>
        <SwiperSlide>
          <Cards/>
        </SwiperSlide>
        <SwiperSlide>
          <Cards/>
        </SwiperSlide>
        <SwiperSlide>
          <Cards/>
        </SwiperSlide>
        <SwiperSlide>
          <Cards/>
        </SwiperSlide>
        <SwiperSlide>
          <Cards/>
        </SwiperSlide>

        <div className="slider-controler">

          <div className="swiper-button-prev slider-arrow">
          <ArrowBackIcon fontSize='small' />
          </div>

          <div className="swiper-button-next slider-arrow">
          <ArrowForwardIcon/>
          </div>
        </div>
        
      </Swiper>
    </div>
     </section>
    </>
  )
}

export default Testimonial