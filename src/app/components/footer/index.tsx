import styles from "./style.module.css";
import Link from "next/link";

export default function Foot() {
  return (
    <footer className={styles.main}>
      <main>
        <section className={styles.sec}>
          <div>
            <div className="mb-5">
              <p className="text-center">MORE THAN LOGISTIC</p>
              <span className="flex">
                <p className="mr-2">THINK</p>{" "}
                <p className={`primary_color`}>SEAMLESS SOLUTION</p>
              </span>
            </div>
            <div className={styles.schedule_button}>
              <a href="/contact" className="text-white">SCHEDULE YOUR FIRST APPOINTMENT</a>
            </div>
          </div>
        </section>

        <div className={styles.divider}></div>
        <section>
          <div className="md:flex justify-between">
            <div className="mb-5">
              <img src="/logo_white.svg" />
            </div>
            <div className="flex">
              <div className="mr-10">
                <h6 className="text-bold mb-1 text-white">Quick Links</h6>
                <p><a href="/">Home</a></p>
                <p><a href="/contact">Contact Us</a></p>
                <p><a href="/about_us">About Us</a></p>
                <p> <a href="/blog">Blog</a></p>
              </div>
              <div>
                <h6 className="text-bold mb-1 text-white">Address</h6>
                <p>
                  Pluto Enterprise, LLC  <br /> 2835 19th Ave, Ste 600 #1007<br />{" "}
                  Forest Grove, OR 97116
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <p>@Pluto Enterprise, LLC. all rights reserved</p>
            </div>
            <div className="flex items-center">
              <Link href="">
                <img src="/images/mail.svg" className={styles.icon_images} />
              </Link>
              <Link href="https://www.instagram.com/plutoentllc">
                <img
                  src="/images/instagram.svg"
                  className={styles.icon_images}
                />
              </Link>
              <Link href="">
                <img src="/images/fbook.svg" className={styles.icon_images} />
              </Link>
              {/* <Link href="">
                <img src="/images/x.svg" className={styles.icon_images} />
              </Link>
              <Link href="">
                <img src="/images/in.svg" className={styles.icon_images} />
              </Link> */}
            </div>
          </div>
        </section>
      </main>
    </footer>
  );
}
