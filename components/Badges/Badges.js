import React, { useState } from 'react';
import { badges } from '../../public/data'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import styles from './Badges.module.css'
import Image from 'next/image'

export default function Badges({ onClick, active }) {

  const breakpoint = {
    // when window width is >= 320px
    320: {
      slidesPerView: 4,
      slidesPerGroup : 4,
      spaceBetween: 20
    },
    520: {
      slidesPerView: 5,
      slidesPerGroup : 5,
      spaceBetween: 20
    },
    750: {
      slidesPerView: 7,
      slidesPerGroup : 7,
      spaceBetween: 20
    },
    950: {
      slidesPerView: 10,
      slidesPerGroup : 10,
      spaceBetween: 40
    },
    1100: {
      slidesPerView: 12,
      slidesPerGroup : 12,
      spaceBetween: 25
    },
    1300: {
      slidesPerView: 15,
      slidesPerGroup : 15,
      spaceBetween: 25
    },
    1500: {
      slidesPerView: 18,
      slidesPerGroup : 18,
      spaceBetween: 25
    }
  }

  // const [active, setactive] = useState('')

  const handleClick = (badge) => {
    onClick(badge)
    // setactive(badge.text)
  }
  return (
    <div id='badge_cont' className={styles.badge_cont}>
      <Swiper
        breakpoints={breakpoint}
        spaceBetween={30}
        navigation={true} 
        modules={[Navigation]}
        // pagination={{
        //   clickable: true,
        // }}
        // modules={[Pagination]}
      >
        {
          badges.map((badge, i) => (
            <SwiperSlide key={i}>
              <div key={i}
                className={styles.badges}
                id='badges'
                onClick={() => handleClick(badge)}
                style={{color : badge.text === active  ? "#000000" : "#717171"}}
              >
                <Image id='image' src={badge.image} alt={badge?.text}
                  style={{opacity : badge.text === active  ? "1" : "0.6"}}
                />
                <span id='tab_flex' className={badge.text === active  ? styles.tab_flex_active : styles.tab_flex}>
                  {badge.text}
                </span>
              </div>
            </SwiperSlide>))
        }
      </Swiper>
    </div>
  )
}
