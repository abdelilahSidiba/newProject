import PropTypes from "prop-types";
import styles from "./FrameComponent1.module.css";
import { Link } from "react-router-dom";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header className={[styles.homeInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.tabaroiWrapper}>
          <a className={styles.tabaroi}>TABAROI</a>
        </div>
        <div className={styles.frameGroup}>
          <nav className={styles.frameWrapper}>
            <nav className={styles.homeParent}>
              <a className={styles.home}>Home</a>
              <a className={styles.aboutUs}>About Us</a>
              <a className={styles.findBlood}>Find Blood</a>
            </nav>
          </nav>
          <div className={styles.frameContainer}>
            <div className={styles.registerNowParent}>
            <Link to={"/login"} className={styles.registerNow}> Register Now </Link> 
              <div className={styles.chevronDownWrapper}>
                <img
                  className={styles.chevronDownIcon}
                  alt=""
                  src="/chevrondown.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.loginButton}>
            <div className={styles.button} />
            <a className={styles.contact}>Log In</a>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
