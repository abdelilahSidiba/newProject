import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.footer}>
        <div className={styles.footerChild} />
        <div className={styles.footerItem}>
          <div className={styles.phone}>Phone</div>
          <div className={styles.whatsapp}>WhatsApp</div>
          <div className={styles.email}>Email</div>
          <div className={styles.contact}>Contact</div>
        </div>
        <div className={styles.footerItem1}>
          <div className={styles.facebook}>Facebook</div>
          <div className={styles.linkedin}>Linkedin</div>
          <div className={styles.instagram}>Instagram</div>
          <div className={styles.followUs}>Follow Us</div>
        </div>
        <div className={styles.footerItem2}>
          <div className={styles.terms}>Terms</div>
          <div className={styles.privacy}>Privacy</div>
          <div className={styles.legal}>Legal</div>
        </div>
        <div className={styles.footerItem3}>
          <div className={styles.loremIpsumIs}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </div>
          <div className={styles.visit}>Visit</div>
        </div>
      </div>
      <FrameComponent1 />
      <div className={styles.homeChild} />
      <div className={styles.navbar}>
        <div className={styles.wrapperGroup131}>
          <img
            className={styles.wrapperGroup131Child}
            loading="lazy"
            alt=""
            src="/group-131.svg"
          />
        </div>
        <b className={styles.navSeparator}>1</b>
      </div>
      <div className={styles.navbar1}>
        <div className={styles.wrapperGroup1311}>
          <img
            className={styles.wrapperGroup131Item}
            loading="lazy"
            alt=""
            src="/group-131.svg"
          />
        </div>
        <b className={styles.b}>2</b>
      </div>
      <div className={styles.pngwing1Parent}>
        <img className={styles.pngwing1Icon} alt="" src="/pngwing-1@2x.png" />
        <div className={styles.wrapperGroup1312}>
          <img
            className={styles.wrapperGroup131Inner}
            loading="lazy"
            alt=""
            src="/group-131.svg"
          />
        </div>
        <b className={styles.b1}>3</b>
      </div>
      <div className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.saveLifeDonateBloodParent}>
              <h1 className={styles.saveLifeDonateContainer}>
                <p className={styles.saveLifeDonate}>Save Life Donate</p>
                <p className={styles.blood}>{`Blood `}</p>
              </h1>
              <div className={styles.heroGradientDesignParent}>
                <img
                  className={styles.heroGradientDesignIcon}
                  alt=""
                  src="/herogradient-design.svg"
                />
                <div className={styles.wrapperLogo}>
                  <img
                    className={styles.logoIcon}
                    loading="lazy"
                    alt=""
                    src="/logo.svg"
                  />
                </div>
                <div className={styles.tabBarSelected}>
                  <div className={styles.tabBarSelectedChild} />
                </div>
              </div>
            </div>
            <div className={styles.loremIpsumIs1}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
          </div>
          <button className={styles.getBloodButtonWrapper}>
            <div className={styles.getBloodButton}>
              <div className={styles.button} />
              <div className={styles.getBloodNow}>Get Blood Now</div>
            </div>
          </button>
        </div>
      </div>
      <section className={styles.ourMissionWrapper}>
        <div className={styles.ourMission}>
          <div className={styles.ourMissionChild} />
          <div className={styles.ourMissionContainer}>
            <h1 className={styles.ourMission1}>Our Mission</h1>
          </div>
          <div
            className={styles.loremIpsumIs2}
          >{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. `}</div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameContainer}>
          
          <FrameComponent2 />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
