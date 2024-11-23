"use client";
import React from "react";
import styles from "./style.module.css";

const WhatPeopleSayAboutUs = () => {
  return (
    <div className={styles.main}>
      <div className={styles.head}>
        <h3>
          WHAT PEOPLE SAY <b className="primary_color">ABOUT US</b>{" "}
        </h3>
      </div>

      <div className={styles.list}>
        <div className={styles.scrollContainer}>
          <div className={styles.detail}>
            <img src="/images/avatar.png" />
            <span className="flex">
              <p className={styles.detail_name}>John A.,</p> <p>Business Owner</p>
            </span>
            <p>
              Pluto Enterprise has completely transformed our supply chain!
              Their reliable deliveries and exceptional customer service have
              made them our go-to logistics partner. We can always count on them
              to get our products where they need to be, on time and intact.
            </p>
          </div>
          <div className={styles.detail}>
            <img src="/images/avatar.png" />
            <span className="flex">
              <p className={styles.detail_name}>Sarah M.,</p> <p>Operation Manager</p>
            </span>
            <p>
              We&apos;ve been using Pluto Enterprise for our 3PL needs, and I
              couldn&apos;t be more impressed. Their attention to detail, real-time
              tracking, and tailored solutions have helped us streamline our
              operations and cut costs. Highly recommended!
            </p>
          </div>
          <div className={styles.detail}>
            <img src="/images/avatar.png" />
            <span className="flex">
              <p className={styles.detail_name}>John A.,</p> <p>Business Owner</p>
            </span>
            <p>
              Pluto Enterprise has completely transformed our supply chain!
              Their reliable deliveries and exceptional customer service have
              made them our go-to logistics partner. We can always count on them
              to get our products where they need to be, on time and intact.
            </p>
          </div>

          <div className={styles.detail}>
            <img src="/images/avatar.png" />
            <span className="flex">
              <p className={styles.detail_name}>John A.,</p> <p>Business Owner</p>
            </span>
            <p>
              Pluto Enterprise has completely transformed our supply chain!
              Their reliable deliveries and exceptional customer service have
              made them our go-to logistics partner. We can always count on them
              to get our products where they need to be, on time and intact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSayAboutUs;