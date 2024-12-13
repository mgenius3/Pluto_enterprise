import styles from "./style.module.css";

export default function ContactUs() {
  return (
    <div className={styles.main}>
      <h3 className="font-bold">
        <b className="primary_color">HAVE AN </b>
        <b>ENQUIRY?</b>
      </h3>
      <p>Reach us through a telephone call or send message below</p>

      <div className={styles.input_field}>
        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Enter your name"
            className={styles.text_input}
          />
        </div>

        <div className={styles.input_container}>
          <img src="/email.svg" />
          <input
            type="email"
            placeholder="Email"
            className={styles.text_input}
          />
        </div>

        <div className={styles.input_container}>
          <input
            type="text"
            placeholder="Phone number"
            className={styles.text_input}
          />
        </div>
      </div>
      <textarea
        placeholder="type your message here ..."
        className={styles.input_container_textarea}
      />

      <div className="flex justify-end">
        <div className={styles.button}>
          <p className="text-white">Send Message</p>
        </div>
      </div>
    </div>
  );
}
