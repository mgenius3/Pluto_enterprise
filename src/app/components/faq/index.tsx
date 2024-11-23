import React from "react";
import styles from "./style.module.css";

const FAQ = () => {
  const faqs = [
    "What types of logistics services do you offer?",
    "How can I track my shipments?",
    "Do you offer international shipping?",
    "What industries do you serve?",
    "Can I get a customized logistics solution for my business?",
  ];

  return (
    <div className={styles.faqContainer}>
      <h3 className={styles.faqHeader}>FAQs</h3>
      <ul className={styles.faqList}>
        {faqs.map((question, index) => (
          <li key={index} className={styles.faqItem}>
            {question}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;