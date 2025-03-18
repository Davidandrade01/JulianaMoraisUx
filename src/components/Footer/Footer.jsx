import Image from 'next/image';
import styles from './footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faBehanceSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className={`${styles.footerContainer} d-flex justify-content-center`}>
      
      {/* Imagem para desktop */}
      <div className={styles.desktopImage}>
        <Image 
          src="/images/Footer/footer.svg"
          alt="footer"
          layout="responsive" 
          width={1090}  
          height={416} 
        />
      </div>

      {/* Imagem para tablet */}
      <div className={styles.tabletImage}>
        <Image 
          src="/images/Footer/footertablet.svg"
          alt="footer tablet"
          layout="responsive" 
          width={412}  
          height={468} 
        />
      </div>
      
      {/* Imagem para mobile */}
      <div className={styles.mobileImage}>
        <Image 
          src="/images/Footer/footermobile.svg"
          alt="footer mobile"
          layout="responsive" 
          width={412}  
          height={468} 
        />
      </div>

      <div className={`${styles.footerContent} d-flex flex-column justify-content-center align-items-center`}>
        <div className="mb-4">
          <Image 
            src="/images/Logo/logoblack.svg"
            alt="Logo"
            height={50}
            width={50}
          />
        </div>
  
        <div className="text-center">
          <p className="jm_headderMedium">Let’s Connect</p>
          <p className="jm_paragraphLarge mb-2">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <p className="jm_paragraphLarge mb-3">=)</p>
          <p className={`${styles.mail} jm_headderSmall`}>ju_morais86@hotmail.com</p>

          <div className={`${styles.icons} d-flex justify-content-center gap-5`}>
            <a href="https://www.linkedin.com/in/julianamux/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "44px" }} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "44px" }} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faBehanceSquare} style={{ fontSize: "44px" }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
