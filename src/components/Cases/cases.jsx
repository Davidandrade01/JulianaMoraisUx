import Card from "../Card/Card";
import styles from './cases.module.scss';

export default function Cases() {
  const cardsData = [
    {
      id: 1,
      title: 'Sales Calculator',
      tags: 'Desktop • B2B • SaaS',
      description:
        'How I Used UX Design to Improve the patient experience and promote preventive Health care in Portugal.',
      imageSrc: '/images/Cards/desktop.svg',
      alt: "monitor",
      backgroundstyle: { background: 'linear-gradient(180deg, #2487BF 0%, #1F75A6 25%, #113F59 100%)' },
      overlayImage: '/images/Cards/covercalc.svg'  // URL corrigida
    },
    {
      id: 2,
      title: '+ Saúde',
      tags: 'Mobile • Health Care • APP',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
      imageSrc: '/images/Cards/+saudeapp.svg',
      alt: "mobile",
      backgroundstyle: { background: 'linear-gradient(#01f49f 6%, #01DA93 44%, #007560 73%)' },
      overlayImage: '/images/Cards/cover+saude.svg' // URL corrigida
    },
    {
      id: 3,
      title: "Open Governement Data",
      tags: "Ux Research • Public Sector • Service Design",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labor",
      imageSrc: '/images/mockup.png',
      alt: "mockup",
      backgroundstyle: { background: '#ACBCC9' },
      overlayImage: '/images/Cards/coverstandard.svg' // URL corrigida
    }
  ];

  return (
    <div id="cases" className={styles.container}>
      <h1  styles={{color:"$dark01"}}>Cases</h1>
      <div className="row w-md-75">
        {cardsData.map((item) => (
          <div key={item.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center g-5">
            <Card
              title={item.title}
              tags={item.tags}
              description={item.description}
              imageSrc={item.imageSrc}
              alt={item.alt}
              backgroundstyle={item.backgroundstyle}
              overlayImage={item.overlayImage} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}
