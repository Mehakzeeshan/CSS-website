"use client";

import { useState } from 'react';
import React from 'react';
import styles from "@/app/page.module.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from "react-icons/gi";
import Image from 'next/image';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header>
      <div className={styles.navbar}>
        <div className={styles.navLogoBorder}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="Zeeshan Cloth Store" width={130} height={100} />
          </div>
        </div>
        <div className={styles.navAddressBorder}>
          <p className={styles.addFirst}>Deliver to</p>
          <div className={styles.addIcon}>
            <FaLocationDot />
            <p className={styles.addSec}>Pakistan</p>
          </div>
        </div>
        <div className={styles.navSearch}>
          <select className={styles.searchSelect}>
            <option>All</option>
          </select>
          <input
            placeholder="Search Zeeshan Cloth Store"
            className={styles.searchInput}
          />
          <div className={styles.searchIcon}>
            <FaSearch />
          </div>
        </div>
        <div className={styles.navAccount}>
          <p><span className={styles.span}>Account</span></p>
          <div className={styles.accountIcon}>
            <FaUser />
          </div>
        </div>
        <div className={styles.navLanguage}>
          <select className={styles.English}>
            <option>English</option>
          </select>
        </div>
        <div className={styles.navCart}>
          <FaShoppingCart />
          Cart
        </div>
      </div>

      <div className={styles.panel}>
        <div className={styles.panelAll} onClick={toggleDropdown}>
          <GiHamburgerMenu />
          All
        </div>

        {/* Show main panel options on large screens */}
        <div className={`${styles.panelOps} ${dropdownOpen ? styles.showOnMobile : ''}`}>
          <p>Brand</p>
          <p>New Arrivals</p>
          <p>Fabric</p>
          <p>Summer Collection</p>
          <p>Winter Collection</p>
          <p>Suit pieces</p>
        </div>

        <div className={styles.panelSale}>
          Sale Upto 50% Off
        </div>
      </div>
    </header>
  );
};

export default Navbar;
