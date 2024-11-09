import React from 'react';
import styles from "@/app/page.module.css";
import { FaYoutube } from 'react-icons/fa6';


const HeroSection = () => {
  return (
    <section>
        <div className={styles.heroSection}>
    
    <div className={styles.heroMsg}>
        <p>Welcome to Zeeshan Cloth Store. You can also view fabrics original videos by visiting our official youtube channel. <a href="https://www.youtube.com/@zeeshananis7685">Zeeshan Cloth Store</a> </p>
        <FaYoutube />
    </div>
   </div>
    </section>
  )
}

export default HeroSection;