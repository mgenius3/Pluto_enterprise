"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./style.module.css";

const WhatPeopleSayAboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h3>
          WHAT PEOPLE SAY <b className="primary_color">ABOUT US</b>
        </h3>
      </div>

      <div className={styles.list}>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 }, // Mobile
            768: { slidesPerView: 2 }, // Tablets
            1024: { slidesPerView: 3 }, // Desktops
          }}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className={styles.detail}>
              <img src="/images/avatar1.png" alt="John A." />
              <span className="flex">
                <p className={styles.detail_name}>John A.,</p> <p>Business Owner</p>
              </span>
              <p>
                Pluto Enterprise, LLC has completely transformed our supply chain!
                Their reliable deliveries and exceptional customer service have
                made them our go-to logistics partner. We can always count on them
                to get our products where they need to be, on time and intact.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.detail}>
              <img src="/images/avatar1.png" alt="Sarah M." />
              <span className="flex">
                <p className={styles.detail_name}>Sarah M.,</p> <p>Operation Manager</p>
              </span>
              <p>
                We&apos;ve been using Pluto Enterprise, LLC for our 3PL needs, and I
                couldn&apos;t be more impressed. Their attention to detail, real-time
                tracking, and tailored solutions have helped us streamline our
                operations and cut costs. Highly recommended!
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.detail}>
              <img src="/images/avatar1.png" alt="John A." />
              <span className="flex">
                <p className={styles.detail_name}>John A.,</p> <p>Business Owner</p>
              </span>
              <p>
                Pluto Enterprise, LLC has completely transformed our supply chain!
                Their reliable deliveries and exceptional customer service have
                made them our go-to logistics partner. We can always count on them
                to get our products where they need to be, on time and intact.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.detail}>
              <img src="/images/avatar1.png" alt="John A." />
              <span className="flex">
                <p className={styles.detail_name}>John A.,</p> <p>Business Owner</p>
              </span>
              <p>
                Pluto Enterprise, LLC has completely transformed our supply chain!
                Their reliable deliveries and exceptional customer service have
                made them our go-to logistics partner. We can always count on them
                to get our products where they need to be, on time and intact.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.detail}>
              <img src="/images/avatar1.png" alt="Sarah M." />
              <span className="flex">
                <p className={styles.detail_name}>Sarah M.,</p> <p>Operation Manager</p>
              </span>
              <p>
                We&apos;ve been using Pluto Enterprise, LLC for our 3PL needs, and I
                couldn&apos;t be more impressed. Their attention to detail, real-time
                tracking, and tailored solutions have helped us streamline our
                operations and cut costs. Highly recommended!
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.detail}>
              <img src="/images/avatar1.png" alt="Sarah M." />
              <span className="flex">
                <p className={styles.detail_name}>Sarah M.,</p> <p>Operation Manager</p>
              </span>
              <p>
                We&apos;ve been using Pluto Enterprise, LLC for our 3PL needs, and I
                couldn&apos;t be more impressed. Their attention to detail, real-time
                tracking, and tailored solutions have helped us streamline our
                operations and cut costs. Highly recommended!
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default WhatPeopleSayAboutUs;
