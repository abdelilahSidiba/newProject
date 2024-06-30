import PropTypes from "prop-types";
import styles from "./FrameComponent2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.howToGetBloodParent, className].join(" ")}>
      <h1 className={styles.howToGet}>How to get Blood?</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.stepSeparatorParent}>
          <div className={styles.stepSeparator}>
            <div className={styles.stepContent}>
              <div className={styles.loremIpsumIs}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className={styles.stepIconCircleParent}>
                <div className={styles.stepIconCircle} />
                <img
                  className={styles.bipencilSquareIcon}
                  loading="lazy"
                  alt=""
                  src="/bipencilsquare.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.loremIpsumIsSimplyDummyTeParent}>
            <div className={styles.loremIpsumIs1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <img
                className={styles.bipencilSquareIcon1}
                loading="lazy"
                alt=""
                src="/bipencilsquare-1.svg"
              />
            </div>
          </div>
          <div className={styles.stepSeparator1}>
            <div className={styles.loremIpsumIsSimplyDummyTeGroup}>
              <div className={styles.loremIpsumIs2}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameItem} />
                <img
                  className={styles.bipencilSquareIcon2}
                  loading="lazy"
                  alt=""
                  src="/bipencilsquare-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
