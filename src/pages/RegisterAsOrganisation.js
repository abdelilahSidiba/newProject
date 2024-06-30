import FrameComponent from "../components/FrameComponent";
import FormBody from "../components/FormBody";
import styles from "./RegisterAsOrganisation.module.css";

const RegisterAsOrganisation = () => {
  return (
    <div className={styles.registerAsOrganisation1}>
      <FrameComponent />
      <main className={styles.body}>
        <section className={styles.headingBarWrapper}>
          <div className={styles.headingBar}>
            <div className={styles.headingBarChild} />
            <h3 className={styles.registerAsOrganization}>
              Register As Organization
            </h3>
          </div>
        </section>
        <FormBody />
      </main>
    </div>
  );
};

export default RegisterAsOrganisation;
