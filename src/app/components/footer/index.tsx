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
              <p>SCHEDULE YOUR FIRST APPOINTMENT</p>
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
                <p>Home</p>
                <p>Services</p>
                <p>Contact Us</p>
                <p>About Us</p>
              </div>
              <div>
                <h6 className="text-bold mb-1 text-white">Address</h6>
                <p>
                  Pluto Enterprise LLC <br /> 2835 tgth Ave, Ste 600 <br />{" "}
                  Forest Grove, QR 97116
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3">
            <div>
              <p>@Pluto enterprise. all rights reserved</p>
            </div>
            <div className="flex items-center">
              <Link href="">
                <img src="/images/mail.svg" className={styles.icon_images} />
              </Link>
              <Link href="">
                <img
                  src="/images/instagram.svg"
                  className={styles.icon_images}
                />
              </Link>
              <Link href="">
                <img src="/images/fbook.svg" className={styles.icon_images} />
              </Link>
              <Link href="">
                <img src="/images/x.svg" className={styles.icon_images} />
              </Link>
              <Link href="">
                <img src="/images/in.svg" className={styles.icon_images} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </footer>
  );
}
