import Link from 'next/link';
import styles from './style.module.css';

const ArticlesGrid = () => {
  const articles = [
    {
      title: 'Top 5 Trends Transforming the Logistics Industry in 2024',
      description: 'From Automation to AI: What to Expect in the Year Ahead',
      image: '/images/blog.png', // Replace with actual images
      link: '/blog/top-5-trends-transforming-the-logistics-industry-in-2024'
    },
    {
      title: 'How Freight Forwarding Works: A Beginner\'s Guide',
      description: 'Understanding the Steps, Players, and Challenges of Freight Forwarding',
      image: '/images/blog1.png',
      link: '/blog/how-freight-forwarding-works-a-beginners-guide'
    },
    {
      title: 'Why Outsource Your Logistics to a 3PL Provider?',
      description: 'Key Benefits of Using 3PL for Growing Businesses',
      image: '/images/blog2.png',
      link: '/blog/why-outsource-your-logistics-to-a-3pl-provider'

    },
    {
      title: 'E-commerce and Logistics: Meeting High Customer Expectations',
      description: 'Fast Delivery, Cost Efficiency, and Inventory Management for Online Retailers',
      image: '/images/blog1.png',
      link: '/blog/ecommerce-and-logistics-meeting-high-customer-expectations'

    },
    {
      title: 'The Importance of Visibility in Supply Chain Management',
      description: 'How Technology Enhances Real-Time Tracking and Efficiency',
      image: '/images/blog.png',
      link: '/blog/the-importance-of-visibility-in-supply-chain-management'

    },
    {
      title: 'Choosing the Right Freight Solution: Road, Sea, or Air?',
      description: 'When to Use Each Mode of Transportation for Your Business',
      image: '/images/blog2.png',
      link: '/blog/choosing-the-right-freight-solution-road-sea-or-air'

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
