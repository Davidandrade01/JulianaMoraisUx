import Image from 'next/image';
import styles from './card.module.scss';

export default function Card({ title, tags, description, imageSrc, alt, backgroundstyle, overlayImage }) {
  return (
    <div 
      className={`card border-0 ${styles.card}`} 
      style={{ 
        ...backgroundstyle, 
        "--overlay-image": `url(${overlayImage})`  // Passa a imagem como variável CSS
      }}
    >
      <div className="card-img-top d-flex align-items-center justify-content-center">
        <Image
          src={imageSrc}
          alt={alt}
          width={364}
          height={320}
          style={{ objectFit: 'contain' }}
        />
      </div>

      <div className={`card-body ${styles.cardBodyText}`}>
        <p className="text-white mb-3 jm_labelxSmall">{tags}</p>
        <h5 className="text-white mb-2 jm_paragraphLarge">{title}</h5>
        <p className="text-white jm_paragraphSmall">{description}</p> 
      </div>
    </div>
  );
}

