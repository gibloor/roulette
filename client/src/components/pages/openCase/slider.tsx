import React, {useState, useRef} from "react";
import './sliderStyle.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper-bundle.css';

interface ItemState {
  picture:string;
  title:string;
  id:number;
  cost:string;
  label:string;
  rare_label:string;
}
type ArrayItems = {
  images: ItemState[]
}

const ItemsSlider = (imagesArray: ArrayItems) => {
  
// MasItems
  let imageMas = imagesArray.images
  let imgMas = imageMas.concat(imageMas)
  for (let i = 0; i < 4; i++) {
    imgMas = imgMas.concat(imgMas)
  }
  imgMas.sort(() => Math.random() - 0.5)
// EndMasItems

//react-slick
  const sliderRef = useRef<Slider>(null);

  const handleOnClick = () => {
    sliderRef.current?.slickGoTo(60);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 0,
    autoplay: false,
    speed: 1500,
    cssEase: "linear",
    arrows: false,
    centerPadding: "10px",
    slickGoTo: 0,
  };
//End react-slick

//react-swiper
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
//End react-swiper

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {imgMas.map((item) => (
          <div>
            <img src={item.picture} id={item.title}></img>
          </div>
        ))}
      </Slider>
      <input type="button" value='ROLL' onClick={() => handleOnClick()}></input>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {imgMas.map((item) => (
          <SwiperSlide>
            <img src={item.picture} id={item.title}></img>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ItemsSlider;