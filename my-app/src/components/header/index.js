import React from "react";
import styles from "./style.module.css";
import redditLogo from "../../asset/images/2.svg";
import redditLogoText from "../../asset/images/1.svg";
import Img from "../../components/img/index";
import { SearchRounded, QrCodeScannerRounded, PersonOutlineRounded, KeyboardArrowDownRounded } from "@mui/icons-material";
import MainButton from "../button";
import SecondaryButton from "../second-button";

function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.content} ${styles.flex}`}>
        <div className={`${styles.logoSearch} ${styles.flex}`}>
          <a href="#" className={`${styles.logo} ${styles.flex}`}>
            <div className={styles.redditLogo}>
              <Img src={redditLogo} alt="reddit logo" />
            </div>
            <div className={`${styles.redditLogoText} ${styles.flex}`}>
              <Img src={redditLogoText} alt="reddit logo text" />
            </div>
          </a>
          <div className={styles.searchBar}>
            <div className={`${styles.searchBarInput} ${styles.flex}`}>
              <div className={`${styles.inputWrapper} ${styles.flex}`}>
                <label htmlFor="header-search-bar">
                  <div className={`${styles.searchIcon} ${styles.flex}`}>
                    <SearchRounded />
                  </div>
                </label>
                <input
                  id="header-search-bar"
                  type="search"
                  placeholder="Search Reddit"
                />
              </div>
            </div>
          </div>
        </div>
        <nav className={`${styles.navigationBar} ${styles.flex}`}>
          <div className={`${styles.navigationButtons} ${styles.flex}`}>
            <SecondaryButton>
              <span style={{ marginRight: "8px" }}>
                <QrCodeScannerRounded style={{ width: "20px", height: "20px" }} />
              </span>
              Get App
            </SecondaryButton>
            <MainButton>Log In</MainButton>
          </div>
          <div className={styles.profileDropDown}>
            <div className={`${styles.profileDropdownIcons} ${styles.flex}`}>
              <PersonOutlineRounded />
              <KeyboardArrowDownRounded />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
