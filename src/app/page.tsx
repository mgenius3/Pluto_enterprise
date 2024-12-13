import styles from "./style.module.css";
import EmailUs from "./components/email_us";
import WhatPeopleSayAboutUs from "./components/what_people_say";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Header from "./components/header";

export default function Home() {
  return (
    <>
      <Header active_no={0} />
      <div className={styles.main}>
        <section className={styles.top_header}>
          <div className={styles.header_left}>
            <p className={styles.p1}>
              FROM <b className="primary_color raleway">WAREHOUSE</b> TO <br />{" "}
              DOORSTEP, WE GET <br />
              YOUR <b className="primary_color">FREIGHT MOVING FAST</b>
            </p>

            <p className={styles.p2}>
              Experience seamless, secure deliveries that drive your business
              forward
            </p>

            <div className={styles.button}>
              <a className="raleway" href="/contact">START SHIPPING TODAY</a>
            </div>
          </div>
          <div className={styles.header_right}></div>
        </section>

        <section className={styles.our_expertise}>
          <h3>Our Expertise</h3>
          <div>
            <img src="/images/containers.png" className={styles.left_img} />
            <div className={styles.right_content}>
              <div>
                <img src="/icon.svg" className={styles.icon_img} />
                <p>
                  <b>FREIGHT</b> <b className="primary_color">MANAGEMENT</b>
                </p>
                <p className={styles.desc}>
                  Ensuring smooth and reliable <br /> transportation of goods
                  across various locations.
                </p>
              </div>
              <div className={styles.divider}></div>
              <div>
                <img src="/icon1.svg" className={styles.icon_img} />
                <p>
                  <b>THIRD-PARTY</b>{" "}
                  <b className="primary_color">LOGISTICS (3PL)</b>
                </p>
                <p className={styles.desc}>
                  Offering seamless logistics support, <br /> including
                  warehousing, order fulfillment, and distribution.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.what_we_do}>
          <div>
            <div className={styles.left_content}>
              <div>
                <img src="/delivery.svg" className={styles.icon_img} />
                <p>
                  <b className="primary_color">LAST-MILE</b> <b>DELIVERY</b>
                </p>
                <p className={styles.desc}>
                  Delivering goods with precision and speed, focusing on
                  customer satisfaction.
                </p>
              </div>
              <div className={styles.divider}></div>
              <div>
                <img src="/consulting.svg" className={styles.icon_img} />
                <p>
                  <b className="primary_color">SUPPLY CHAIN</b>{" "}
                  <b>CONSULTING</b>
                </p>
                <p className={styles.desc}>
                  Helping businesses optimize and manage their supply chains
                  effectively.
                </p>
              </div>
            </div>
            <img src="/images/logistics_car.png" className={styles.right_img} />
          </div>
        </section>

        <section className={styles.action}>
          <h3>Pluto Enterprise, LLC IN ACTION</h3>
          <h3 className="primary_color">DELIVERY EXCELLENCE EVERY MILE</h3>
          <p className={styles.desc}>
            we streamline logistics and ensure every delivery reaches its
            destination with precision and care.
          </p>
          {/* <img src="/images/video.png" className="my-5" /> */}
          <video
            preload="none"
            className={styles.video}
            autoPlay
            muted
            loop
          >
            <source src="/video/pluto_enterprise.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>

        <section className={styles.why_choose_us}>
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">WHY CHOOSE</p>
              <p className="primary_color font-bold">Pluto Enterprise, LLC?</p>
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
                essence. Our team ensures your goods are delivered on time,
                every time, with precision and care
              </p>
            </div>

            <div>
              <h6>02</h6>
              <p className={styles.head}>A TRUSTED GROWTH PARTNER: </p>
              <p className={styles.desc}>
                More than just a logistics provider. Pluto Enterprise, LLC is
                your ally in growth offering transparent and reliable services
                to help your business thrive
              </p>
            </div>

            <div>
              <h6>03</h6>
              <p className={styles.head}>TAILORED LOGISTICS SOLUTIONS: </p>
              <p className={styles.desc}>
                We offer customized transportation and third-party logistics
                (3PL) services that adapt to the unique needs of your business,
                ensuring seamless operations
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
      <Footer />
    </>
  );
}
