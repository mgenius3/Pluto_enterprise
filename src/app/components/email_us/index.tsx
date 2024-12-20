import styles from "./style.module.css";


export default function EmailUs() {
  return (
    <section className={styles.main}>
      <div className={styles.input_container}>
        <img src="/email.svg" />
        <input
          type="email"
          placeholder="Enter mail"
          className={styles.email_input}
        />
      </div>
      <div className={styles.button}>
        <a className="text-white" href="/contact">SIGN UP FOR NEWSLETTER</a>
      </div>
    </section>
  );
}