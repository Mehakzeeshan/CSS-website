import React from 'react'
import styles from "@/app/page.module.css";

const ShopSection = () => {
  return (
    <div className={styles.shopSection}>
    <div className={`${styles.box1} ${styles.box}`}>
        <div className={styles.boxContent}>
        <h2> New Arrivals</h2>
        <div className={styles.boxImg}
             style={{backgroundImage: "url('/grace-main.webp')"}}>
        </div>
        <p>See more</p>
        </div>
    </div>
    <div className={`${styles.box2} ${styles.box}`}>
        <div className={styles.boxContent}>
            <h2> Admani Fabrics</h2>
            <div className={styles.boxImg}
             style={{backgroundImage: "url('admani-main.jpg')"}}>
            </div>
            <p>See more</p>
            </div>
    </div>
    <div className={`${styles.box3} ${styles.box}`}>
        <div className={styles.boxContent}>
            <h2> JNG Fabrics</h2>
            <div className={styles.boxImg}
             style={{backgroundImage: "url('jng.webp')"}}>
            </div>        
            <p>See more</p>
            </div>
    </div>
    <div className={`${styles.box4} ${styles.box}`}>
        <div className={styles.boxContent}>
            <h2>Puri Fabrics</h2>
            <div className={styles.boxImg}
             style={{backgroundImage: "url('puri-cotton.webp')"}}>
            </div>
            <p>See more</p>
            </div>
    </div>
    <div className={`${styles.box5} ${styles.box}`}>
        <div className={styles.boxContent}>
        <h2>ASCO Fabrics</h2>
        <div className={styles.boxImg}
             style={{backgroundImage: "url('grace-2.webp')"}}>
        </div>
        <p>See more</p>
        </div>
    </div>
    <div className={`${styles.box6} ${styles.box}`}>
        <div className={styles.boxContent}>
            <h2> Grace Fabrics</h2>
            <div className={styles.boxImg}
             style={{backgroundImage: "url('image3.webp')"}}>
            </div>
            <p>See more</p>
            </div>
    </div>
    <div className={`${styles.box7} ${styles.box}`}>
        <div className={styles.boxContent}>
            <h2> Grace-Shaffer</h2>
            <div className={styles.boxImg}
             style={{backgroundImage: "url('image8.webp')"}}>
            </div>        
            <p>See more</p>
            </div>
    </div>
    <div className={`${styles.box8} ${styles.box}`}>
        <div className={styles.boxContent}>
            <h2>Libas-e-Khas</h2>
            <div className={styles.boxImg}
             style={{backgroundImage: "url('libas-e-khas.webp')"}}>
            </div>
            <p>See more</p>
            </div>
    </div>


   </div>
  )
}

export default ShopSection;