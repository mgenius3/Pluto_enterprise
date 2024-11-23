import Image from "next/image";
import styles from "./style.module.css";
import EmailUs from "../components/email_us";
import WhatPeopleSayAboutUs from "../components/what_people_say";
import FAQ from "../components/faq";
import ArticlesGrid from "../components/article_grid";

export default function Blog() {
  return (
    <div className={styles.main}>
      <section className={styles.top_header}>
        <div>
        <p className={styles.p1}>
          <b className="primary_color">Featured</b>
        </p>

        <p className={styles.p2}>Optimizing your supply chain:</p>
        <p className={styles.p3}>
          The Role of 3PL Providers <img src="/arrow.svg" />
        </p>
        <p className={styles.p4}>
          How Third-Party Logistics Providers Streamline Operations and Reduce
          Costs
        </p>
        </div>
        
      </section>
      <ArticlesGrid/>
      <EmailUs />
      <WhatPeopleSayAboutUs />
      <FAQ />
    </div>
  );
}
