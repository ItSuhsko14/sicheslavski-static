import Image from 'next/image'
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css';
import Logo from '../public/logo.png'
import TitlePhoto from '/titlephoto.png'
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import PhotoGallery from './components/photogallery/photogallery';

const photoblok1 = [
  { src: "/img/img1.jpg", ratio: 3/2},
  { src: "/img/img2.jpg", ratio: 3/2},
  { src: "/img/img4.jpg", ratio: 3/2},   
]

const photoblok2 = [
  { src: "/img/img3.jpg", ratio: 1/1},
  { src: "/img/img7.jpg", ratio: 1/1},
  { src: "/img/img9.jpg", ratio: 1/1},   
]

const photoblok3 = [
  { src: "/img/img5.jpg", ratio: 3/2},
  { src: "/img/img6.jpg", ratio: 3/2},
  { src: "/img/img8.jpg", ratio: 3/2},   
]


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Січеславці</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <div className={styles.title}>
            <Image 
              src={TitlePhoto} 
              alt='групове фото козаків Січеславців'
              className={styles.logo}  
            />
        </div>
          <div className={styles.title}>
              <Image 
                src={Logo} 
                alt='клуб козацького бою Січеславці'
                className={styles.logo}  
              />
          </div>

        <p className={styles.description}>
          <Link 
            href="http://facebook.com/sicheslavci" 
            target="_blank"
            className={styles.sociallink}
            >
                <FaFacebook/>
          </Link>
          <Link 
            href="http://instagram.com/sicheslavci"
            target="_blank"
          >
              <FaInstagram/>
          </Link>
        </p>

        <div>
          <h2>Про нас.</h2>
          <p>
            Клуб козацького бою Січеславці займаються розвитком козацької традиції у Дніпрі та по всій Україні.
          </p>
          <p>
            Основні напрямки нашої діяльності: козацкий стан, Січеславські джури, туристичний маршрут, мистецтво, фестивалі.
          </p>
        </div>
        <div className={styles.grid}>
          <PhotoGallery images={photoblok1} />
          <PhotoGallery images={photoblok2} />
          <PhotoGallery images={photoblok3} />
        </div>
        
        <div>
          <h2>Козацьки стан.</h2>
          <p>
            Січеславці запрошують гостей Дніпра до козацького стану - локації, яка знаходиться у яхт-клубі &quotСіч&quot і презентує козацьку культуру Січеслава
          </p>
          <p>
            В нашому козацькому стані Ви зможете зануритись до козацької культури, спробувати свої сили у володінні зброєю, стрільбі з лука, ковальській майстерності, їзді верхи, та козацькому водному маршруті.
          </p>
        </div>
        <div className={styles.grid}>
          <PhotoGallery images={photoblok1} />
          <PhotoGallery images={photoblok2} />
          <PhotoGallery images={photoblok3} />
        </div>
      </main>

      <footer >
       
          Powered by{' '} Mustache development
        
      </footer>

      
    </div>
      )
}
