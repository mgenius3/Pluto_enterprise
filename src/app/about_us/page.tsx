import styles from "./style.module.css";
import EmailUs from "../components/email_us";
import WhatPeopleSayAboutUs from "../components/what_people_say";
import FAQ from "../components/faq";

export default function AboutUs() {
  return (
    <div className={styles.main}>
      <section className={styles.top_header}>
        <div className={styles.header_left}>
          <p className={styles.p1}>
            FROM <b className="primary_color">WAREHOUSE</b> TO <br /> DOORSTEP,
            WE GET <br />
            YOUR <b className="primary_color">FREIGHT MOVING FAST</b>
          </p>

          <p className={styles.p2}>
            Experience seamless, secure deliveries that drive your business
            forward
          </p>

          <div className={styles.button}>
            <p>START SHIPPING TODAY</p>
          </div>
        </div>
        <div className={styles.header_right}></div>
      </section>

      <section className={styles.about}>
        <h3 className="primary_color">About Us</h3>
        <h3>WHO ARE WE</h3>
        <p className={styles.desc}>
          Pluto Enterprise LLC is a forward-thinking logistics company
          specializing in transportation, freight brokerage, dispatching, and
          third-party logistics. We are a team of experienced professionals
          committed to harnessing the power of technology and e-commerce to
          enhance operational efficiency. Our customer-centric approach ensures
          that we deliver tailored solutions that meet the unique needs of each
          client, fostering long-lasting partnerships built on trust and
          reliability.
        </p>
        <img src="/images/video.png" className="my-5" />
      </section>

      <section className={styles.mission}>
        <div className="mb-5">
          <h3 className="primary_color">MISSION STATEMENT</h3>
          <p className={styles.desc}>
            At Pluto Enterprise LLC, we are dedicated to revolutionizing
            transportation and logistics by leveraging cutting-edge technology
            and e-commerce solutions. Our mission is to provide seamless,
            efficient, and reliable services that connect businesses and
            streamline their supply chains, ensuring timely delivery and
            exceptional customer satisfaction.
          </p>
        </div>

        <div>
          <h3 className="primary_color">OUR MISSION</h3>
          <p className={styles.desc}>
            Our vision is to be a leading force in the logistics industry,
            transforming how freight and transportation are managed through
            innovative technology. We aim to create a sustainable and
            interconnected global marketplace that empowers businesses to thrive
            in an ever-evolving landscape.
          </p>
        </div>
      </section>

      <section className={styles.why_choose_us}>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold">WHY CHOOSE</p>
            <p className="primary_color font-bold">PLUTO ENTERPRISE?</p>
          </div>
          <div className={styles.button}>
            <p>VIEW MORE</p>
          </div>
        </div>

        <div className={styles.list}>
          <div>
            <h6>01</h6>
            <p className={styles.head}>RELIABLE AND TIMELY DELIVERIES: </p>
            <p className={styles.desc}>
              We understand that in today&apos;s fast-paced world, time is of
              essence. Our team ensures your goods are delivered on time, every
              time, with precision and care
            </p>
          </div>

          <div>
            <h6>02</h6>
            <p className={styles.head}>A TRUSTED GROWTH PARTNER: </p>
            <p className={styles.desc}>
              More than just a logistics provider. Pluto Enterprise is your ally
              in growth offering transparent and reliable services to help your
              business thrive
            </p>
          </div>

          <div>
            <h6>03</h6>
            <p className={styles.head}>TAILORED LOGISTICS SOLUTIONS: </p>
            <p className={styles.desc}>
              We offer customized transportation and third-party logistics (3PL)
              services that adapt to the unique needs of your business, ensuring
              seamless operations
            </p>
          </div>

          <div>
            <h6>04</h6>
            <p className={styles.head}>COMMITMENT TO SUSTAINABILITY: </p>
            <p className={styles.desc}>
              We incorporate sustainable practices into our logistics
              operations, reducing our environment footprint while maintaining
              the highest level of services
            </p>
          </div>
        </div>
      </section>

      <EmailUs />
      <WhatPeopleSayAboutUs />
      <FAQ />
    </div>
  );
}
