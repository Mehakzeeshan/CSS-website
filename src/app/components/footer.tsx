import React from 'react'
import styles from "@/app/page.module.css";
import Image from 'next/image';

const Footer = () => {
  return (
    <section>
        <footer className={styles.footer}>
    <div className={styles.footPanel1}>
         Back to Top
    </div>
    <div className={styles.footPanel2}>
        <ul className={styles.ul}>
           <p> About Zesshan Cloth Store</p>
           <a>About Us</a>
           <a>Company</a>
           <a>Careers</a>
           <a>Store Locator</a>
           <a>Blog</a>
        </ul>
        <ul className={styles.ul}>
            <p>My Account</p>
                <a> Login</a>
                <a>Create Account</a>
                <a>Account Info</a>
                <a>Order History</a>
                <a>Order Status</a>
        </ul>
        <ul className={styles.ul}>
            <p> Customer Care</p>
                  <a>FAQ</a>
                  <a>Services</a>
                  <a>Contact Us</a>
                  <a>Privacy Policy</a>
                  <a>Shipping Policy</a>
                  <a>Customer Feedback</a>
                  <a>Terms and Conditions</a>
                  <a>Complaint/Inquiry Form</a>
                  <a>Return & Exchange Policy</a>
        </ul>
        <ul className={styles.ul}>
            <p>Find us on</p>
               <a>Facebook</a>
               <a>Instagram</a>
               <a>Twitter</a>
               <a>Youtube</a>
               <a>TikTok</a>
               <a>Whatsapp</a>
        </ul>
    </div>
    <div className={styles.footPanel3}>
        <div className={styles.logo}>
        <Image src="/logo.png" alt='Zeeshan Cloth Store' width={130} height={100} />
        </div>
    </div>
    <div className={styles.footPanel4}>
        <div className={styles.pages}>
            <a>Conditions of Use</a>
            <a>Privacy Notice</a>
            <a>Your Ads Privacy Choices</a>
        </div>
        <div className={styles.copyright}>
            Copyright © 2024 Zeeshan Cloth Store - All rights reserved.
        </div>
    </div>

   </footer>
    </section>
  )
}

export default Footer;