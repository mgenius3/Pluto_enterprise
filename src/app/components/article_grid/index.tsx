import Link from 'next/link';
import styles from './style.module.css';

const ArticlesGrid = () => {
  const articles = [
    {
      title: 'Top 5 Trends Transforming the Logistics Industry in 2024',
      description: 'From Automation to AI: What to Expect in the Year Ahead',
      image: '/images/blog.png', // Replace with actual images
      link: '/blog/Top 5 Trends Transforming the Logistics Industry in 2024'
    },
    {
      title: 'How Freight Forwarding Works: A Beginner\'s Guide',
      description: 'Understanding the Steps, Players, and Challenges of Freight Forwarding',
      image: '/images/blog1.png',
      link: '/blog/How Freight Forwarding Works: A Beginner\'s Guide'
    },
    {
      title: 'Why Outsource Your Logistics to a 3PL Provider?',
      description: 'Key Benefits of Using 3PL for Growing Businesses',
      image: '/images/blog2.png',
      link: '/blog/Why Outsource Your Logistics to a 3PL Provider?'

    },
    {
      title: 'E-commerce and Logistics: Meeting High Customer Expectations',
      description: 'Fast Delivery, Cost Efficiency, and Inventory Management for Online Retailers',
      image: '/images/blog1.png',
      link: '/blog/E-commerce and Logistics: Meeting High Customer Expectations'

    },
    {
      title: 'The Importance of Visibility in Supply Chain Management',
      description: 'How Technology Enhances Real-Time Tracking and Efficiency',
      image: '/images/blog.png',
      link: '/blog/The Importance of Visibility in Supply Chain Management'

    },
    {
      title: 'Choosing the Right Freight Solution: Road, Sea, or Air?',
      description: 'When to Use Each Mode of Transportation for Your Business',
      image: '/images/blog2.png',
      link: '/blog/Choosing the Right Freight Solution: Road, Sea, or Air'

    },
  ];

  return (
    <div className={styles.grid}>
      {articles.map((article, index) => (
        <Link href={article.link} key={index}>
         <div  className={styles.card}>
          <div className={styles.imageContainer}>
            <img src={article.image} alt={article.title} className={styles.image} />
            <span className={styles.icon}><img src='/arrow.svg'/></span>
          </div>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.description}>{article.description}</p>
        </div>
        </Link>
       
      ))}
    </div>
  );
};

export default ArticlesGrid;
