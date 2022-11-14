import React, { useState } from 'react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillStar } from 'react-icons/ai'
import { FiHeart } from 'react-icons/fi'
import styles from "./Cards.module.css";

function CardV2({ data }) {
    return (
        <div className={styles.card} >
            <span className={styles.heart}>
                <FiHeart color="white" size={20} />
            </span>
            <div className={styles.main_cont_card}>
                <Swiper
                    spaceBetween={0}
                    className={styles.mySwiper}
                >
                    {
                        data?.images?.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img className={styles.imagesv2} src={img} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
            <div className={styles.space_between} style={{ marginTop: '12px' }}>
                <span className={styles.place_name}>{data?.title}</span>
                <div className={styles.stars}>
                    <AiFillStar color='black' />
                    <span>{data?.rating}</span>
                </div>
            </div>
            <div className={styles.price}>
                ${data?.price} <span>night</span> &#8729; <span className={styles.greyer}>{data?.period}</span>
            </div>
        </div>
    )
}

export default CardV2
