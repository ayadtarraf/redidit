import React, { useState } from "react";
import { sidebarItems } from "./sidebaritems";
import styles from "./style.module.css";
import MainButton from "../button";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import OutboundRoundedIcon from "@mui/icons-material/OutboundRounded";
import Img from "../img";

function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (itemId) => {
    activeItem === itemId ? setActiveItem(null) : setActiveItem(itemId);
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarMenu}>
        <div className={styles.menuSubTitle}>feeds</div>
        <a href="#" className={styles.menuLinks}>
          <HomeRoundedIcon />
          <span>Home</span>
        </a>
        <a href="#" className={styles.menuLinks}>
          <OutboundRoundedIcon />
          <span>Popular</span>
        </a>

        <div className={styles.menuSubTitle}>topics</div>
        {sidebarItems.map((item) => (
          <React.Fragment key={item.id}>
            <button
              className={styles.topicsLinks}
              onClick={() => handleClick(item.id)}
            >
              <span className={styles.link}>
                <span className={styles.linkIcon1}>{item.icon1}</span>
                <span className={styles.linkLabel}>{item.label}</span>
                <span
                  className={`${styles.linkIcon2} ${
                    activeItem === item.id && styles.rotate
                  }`}
                >
                  {item.icon2}
                </span>
              </span>
            </button>
            {activeItem === item.id && (
              <div className={styles.linksDropDown}>
                {item.links.map((link, index) => (
                  <a href="#" className={styles.linksDropDownLink} key={index}>
                    {link}
                  </a>
                ))}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.sidebarFooter}>
        <div className={styles.sidebarFooterText}>
          Create an account to follow your favorite communities and start taking
          part in conversations.
        </div>
        <MainButton style={{ padding: "12px 0" }} fullWidth={true}>
          Join Reddit
        </MainButton>
      </div>
    </aside>
  );
}

export default Sidebar;