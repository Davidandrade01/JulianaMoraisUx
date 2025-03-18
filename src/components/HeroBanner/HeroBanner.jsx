import Image from 'next/image';
import styles from './herobanner.module.scss';

export default function HeroBanner() {
  return (
    <div
      className={`${styles.fullwidthbanner} d-flex flex-column justify-content-center align-items-center`}
      style={{ marginBottom: "80px" }}
    >
      <div className="d-flex justify-content-center flex-column align-items-center">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div>
            <Image
              className="mb-5 text-center"
              src="/images/Logo/logoblack.svg"
              alt="mariamorais"
              height={50}
              width={50}
              loading="eager"
            />
          </div>
        </div>

        <div className=" jm_paragraphLarge" style={{ marginBottom: "56px", color: "var(--dark05)" }}>
          Design Work Portfólio
        </div>

        <p className={`jm_headderLarge ${styles.typewriter}`} style={{ color: "var(--dark01)" }}>
          Hi, I’m Juliana, an <b>UX Designer</b> driven by 
        </p>

        <div
          className={`jm_headderLarge ${styles.fadeInWords}`}
          style={{ color: "var(--dark01)", marginBottom: "80px" }}
        >
          <p>
            <span>data,</span>{" "}
            <span>creative thinking</span>{" "}
            <span>and collaboration.</span>{" "}
          </p>
        </div>

        <a href="#cases">
          <Image
            className={styles.pulse}
            src="/images/arrow.svg"
            alt="arrow"
            height={40}
            width={40}
            loading="eager"
          />
        </a>
      </div>
    </div>
  );
}
