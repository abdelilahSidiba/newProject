import PropTypes from "prop-types";
import styles from "./Footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={[styles.footer, className].join(" ")}>
      <div className={styles.rectangle} />
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.footerLogoParent}>
            <img
              className={styles.footerLogoIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.frameGroup}>
              <div className={styles.readyToGetStartedWrapper}>
                <h3 className={styles.readyToGet}>Ready to get started?</h3>
              </div>
              <button className={styles.button}>
                <div className={styles.rectangle1} />
                <b className={styles.getStarted}>Donate</b>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.divider} />
        <div className={styles.frameContainer}>
          <div className={styles.subscribeToOurNewParent}>
            <h3 className={styles.subscribeToOurContainer}>
              <p className={styles.subscribeToOur}>Subscribe to our</p>
              <p className={styles.newsletter}>newsletter</p>
            </h3>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <input
                  className={styles.frameChild}
                  placeholder="Email address"
                  type="text"
                />
                <img className={styles.submitIcon} alt="" src="/submit.svg" />
              </div>
              <div className={styles.footerInputBackground} />
            </div>
          </div>
          <div className={styles.footerLinksSeparator}>
            <div className={styles.services}>
              <div className={styles.services1}>Services</div>
              <div className={styles.emailMarketing}>Email Marketing</div>
              <a className={styles.campaigns}>Campaigns</a>
              <div className={styles.branding}>Branding</div>
              <div className={styles.offline}>Offline</div>
            </div>
          </div>
          <div className={styles.footerLinksSeparator1}>
            <div className={styles.about}>
              <div className={styles.about1}>About</div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.benefits}>Benefits</div>
              <div className={styles.team}>Team</div>
              <div className={styles.careers}>Careers</div>
            </div>
          </div>
          <div className={styles.helpParent}>
            <div className={styles.help}>Help</div>
            <div className={styles.faqs}>FAQs</div>
            <div className={styles.contactUs}>Contact Us</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.termsConditionsParent}>
          <a className={styles.termsConditions}>{`Terms & Conditions`}</a>
          <a className={styles.privacyPolicy}>Privacy Policy</a>
        </div>
        <div className={styles.socialMediaLinks}>
          <div className={styles.facebookContainer}>
            <img
              className={styles.facebookIcon}
              loading="lazy"
              alt=""
              src="/001facebook.svg"
            />
          </div>
          <div className={styles.twitterContainer}>
            <img
              className={styles.twitterIcon}
              loading="lazy"
              alt=""
              src="/003twitter.svg"
            />
          </div>
          <img
            className={styles.instagramIcon}
            loading="lazy"
            alt=""
            src="/004instagram@2x.png"
          />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
