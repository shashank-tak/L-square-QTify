import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Carousel.module.css'
import AlbumCard from '../Card/Card';
import { Navigation } from 'swiper/modules';
import SwiperIcon from "../assets/Swiperleft.png";

const Carousel = ({ data }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={6}
    modules={[Navigation]} 
    navigation={{
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       }}
    breakpoints={{
      640: { slidesPerView: 4 },
      1024: { slidesPerView: 6 },
    }}
  >
    {data.map((album) => (
      <SwiperSlide key={album.id}>
        <AlbumCard image={album.image} follows={album.follows} />
        <p style={{ color: 'white', textAlign: 'center' }}>{album.title}</p>
      </SwiperSlide>
    ))}
    <div className="swiper-button-prev"></div>
    <div className="swiper-button-next"></div>
  </Swiper>
);

export default Carousel;
