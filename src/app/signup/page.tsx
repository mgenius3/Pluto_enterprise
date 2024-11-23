import styles from "./style.module.css";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <p className={styles.texthead}>
          FROM <b className="primary_color">WAREHOUSE</b> TO <br /> DOORSTEP, WE
          GET <b /> YOUR <b className="primary_color">FREIGHT MOVING FAST</b>{" "}
        </p>
        <p className={styles.leftdesc}>
          Experience seamless, secure delivies that drive your business forward
        </p>
      </div>
      <div className={styles.right}>
        <div>
          <img src="/logo.svg" />
          <h3>Create An Acccount</h3>
          <p className={styles.desc}>Welcome to pluto enterprise</p>
          <div className={styles.input_container}>
            <img src="/email.svg" />
            <input
              type="email"
              placeholder="Enter mail"
              className={styles.text_input}
            />
          </div>
          <div className={styles.input_container}>
            <img src="/lock.svg" />
            <input
              type="password"
              placeholder="Enter password"
              className={styles.text_input}
            />
          </div>
          <div className={styles.input_container}>
            <img src="/lock.svg" />
            <input
              type="password"
              placeholder="Confirm password"
              className={styles.text_input}
            />
          </div>
          <div className="flex justify-between">
            <span className="flex">
              <input type="checkbox" className={styles.check_input} />
              <p className="text-black ml-3">
                I agree with the <b>terms of service</b>
              </p>
            </span>
          </div>
          <div className={styles.button}>
            <p>Login</p>
          </div>
          <div className="flex justify-center mt-3">
            <Link href="/signup">
              <p>Do not have an account? Sign Up</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
