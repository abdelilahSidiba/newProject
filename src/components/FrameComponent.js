import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";
import { Link } from "react-router-dom";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.registerAsOrganisation1Inner, className].join(" ")}>
      <header className={styles.mainContentParent}>
        <div className={styles.mainContent}>
          <div className={styles.pageContent}>
            <div className={styles.wrapperGroup32}>
              <img
                className={styles.wrapperGroup32Child}
                loading="lazy"
                alt=""
                src="/group-32.svg"
              />
            </div>
            <a className={styles.tabaroi}>TABAROI</a>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.navContent}>
            <div className={styles.navItems}>
              <div className={styles.navLinks}>
              <Link to={"/"} className={styles.home}>Home</Link>
              </div>
              <div className={styles.navLinks1}>
                <a className={styles.aboutUs}>About Us</a>
              </div>
              <div className={styles.navLinks2}>
                <a className={styles.findBlood}>Find Blood</a>
              </div>
              <div className={styles.registration}>
                <div className={styles.registerButton}>
                  <a className={styles.registerNow}>Register Now</a>
                  <div className={styles.dropdown}>
                    <img
                      className={styles.chevronDownIcon}
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
                <div className={styles.separator}>
                  <div className={styles.navbarDivider} />
                </div>
              </div>
            </div>
          </div>
          <button className={styles.buttonParent}>
            <div className={styles.button} />
            <a className={styles.contact}>Log In</a>
          </button>
        </div>
      </header>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
