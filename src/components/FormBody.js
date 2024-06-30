import PropTypes from "prop-types";
import styles from "./FormBody.module.css";

const FormBody = ({ className = "" }) => {
  return (
    <section className={[styles.formBody, className].join(" ")}>
      <div className={styles.formBodyChild} />
      <div className={styles.nameFieldWrapper}>
        <div className={styles.nameField}>
          <div className={styles.nameLabel}>
            <div className={styles.organizationName}>Organization Name</div>
          </div>
          <div className={styles.nameInput}>
            <div className={styles.organisationName} />
            <input className={styles.name} placeholder="Name" type="text" />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.addressInputWrapper}>
          <div className={styles.addressInput}>
            <div className={styles.addressLabel}>
              <div className={styles.address}>Address</div>
            </div>
            <textarea
              className={styles.addressValue}
              placeholder="Type Here"
              rows={14}
              cols={26}
            />
          </div>
        </div>
        <div className={styles.headField}>
          <div className={styles.headInput}>
            <div className={styles.headOfOrganization}>
              Head of Organization
            </div>
          </div>
          <div className={styles.headValue}>
            <div className={styles.head} />
            <input className={styles.name1} placeholder="Name" type="text" />
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.phoneNumberValueWrapper}>
              <div className={styles.phoneNumberValue}>
                <div className={styles.phoneInputValue}>
                  <div className={styles.phoneNumber}>Phone Number</div>
                </div>
                <div className={styles.phoneInputBox}>
                  <div className={styles.phone} />
                  <input
                    className={styles.name2}
                    placeholder="Number"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <button className={styles.submit}>
              <div className={styles.button} />
              <div className={styles.submitButton}>
                <div className={styles.submit1}>Submit</div>
              </div>
              <img
                className={styles.checkCircleIcon}
                alt=""
                src="/checkcircle.svg"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

FormBody.propTypes = {
  className: PropTypes.string,
};

export default FormBody;
