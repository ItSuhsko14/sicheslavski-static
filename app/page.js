import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.css';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import PhotoGallery from './components/photogallery/photogallery';


const Logo='/logo.png';
const TitlePhoto='/titlephoto.png';

const photoblok1 = [
  { src: "/img/img1.jpg", ratio: 3/2},
  { src: "/img/img2.jpg", ratio: 3/2},
  { src: "/img/img4.jpg", ratio: 3/2},   
  { src: "/img/img5.jpg", ratio: 3/2},   
]

const photoblok2 = [
  { src: "/img/img3.jpg", ratio: 1/1},
  { src: "/img/img7.jpg", ratio: 1/1},
  { src: "/img/img9.jpg", ratio: 1/1},   
  { src: "/img/img16.jpg", ratio: 1/1},   
]

const photoblok3 = [
  { src: "/img/img6.jpg", ratio: 3/2},
  { src: "/img/img8.jpg", ratio: 3/2},   
  { src: "/img/img10.jpg", ratio: 3/2},   
  { src: "/img/img11.jpg", ratio: 3/2},   
]

const photoblok4 = [
  { src: "/img/img12.jpg", ratio: 3/2},   
  { src: "/img/img13.jpg", ratio: 3/2},   
  { src: "/img/img14.jpg", ratio: 3/2},   
  { src: "/img/img15.jpg", ratio: 3/2},   
]

const photoblok5 = [
  { src: "/img/img17.jpg", ratio: 3/2},
  { src: "/img/img18.jpg", ratio: 3/2},
  { src: "/img/img25.jpg", ratio: 3/2},   
  { src: "/img/img26.jpg", ratio: 3/2},   
]

const photoblok6 = [
  { src: "/img/img25.jpg", ratio: 3/2},
  { src: "/img/img17.jpg", ratio: 3/2},
  { src: "/img/img18.jpg", ratio: 3/2},   
  { src: "/img/img11.jpg", ratio: 3/2},   
]

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Січеславці</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
      <div className={styles.title}>
            
            <img
              src={TitlePhoto} 
              alt='групове фото козаків Січеславців'
              className={styles.logo}  
            />
        </div>
          <div className={styles.title}>
              <img 
                src="/logo.png" 
                alt='клуб козацького бою Січеславці'
                className={styles.logo}  
              />
          </div>

        <p className={styles.socialicons}>
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
      </header>
      <main >
      
        <section>
          <h2>Про нас.</h2>
          <p>
            Клуб козацького бою Січеславці займаються розвитком козацької традиції у Дніпрі та по всій Україні.
          </p>
          <p>
            Основні напрямки нашої діяльності: козацкий стан, Січеславські джури, туристичний маршрут, мистецтво, фестивалі.
          </p>
        </section>
        <div className={styles.grid}>
          <PhotoGallery images={photoblok1} />
          
        </div>
        
        <section>
          <h2>Козацьки стан.</h2>
          <p>
            Січеславці запрошують гостей Дніпра до козацького стану - локації, яка знаходиться у яхт-клубі Січ і презентує козацьку культуру Січеслава
          </p>
          <p>
            В нашому козацькому стані Ви зможете зануритись до козацької культури, спробувати свої сили у володінні зброєю, стрільбі з лука, ковальській майстерності, їзді верхи, та козацькому водному маршруті.
          </p>
        </section>
        <div className={styles.grid}>
          <PhotoGallery images={photoblok2} />
        </div>
        
        <section>
          <h2>Мистецький напрямок.</h2>
          <p>
            В мистецькому напрямку ми займаємся творчим переосмисленням теми козацтва, постановками сценічних номерів, історично-мистецьких реконструкцій.
          </p>
        </section>

        <div className={styles.grid}>
          <PhotoGallery images={photoblok3} />
        </div>

      <section>

          <h2>Січеславські джури.</h2>
          <p>
          Ми займаємось навчанням і освітою молоді, доносимо інформацію про історію та культуру козаків.
          </p>
        </section>
          
        <div className={styles.grid}>
          <PhotoGallery images={photoblok4} />
        </div>

      <section>
          <h2>Фестивалі.</h2>
          <p>
            Січеславські козаки пропонують історично-мистецьку реконструкцію для українських фестивалів.
          </p>
      </section>

        <div className={styles.grid}>
          <PhotoGallery images={photoblok5} />
        </div>

      <section>
          <h2>Туризм.</h2>
          <p>
            Січеславці пропонуют відвідати екскурсію Козацькими стежками, під час якого буде можливість ознайомитись з козацькою історією Січеславського краю.
          </p>
      </section>

      <div >
          <PhotoGallery images={photoblok6} />
        </div>
      </main>

      <footer >
       
          Powered by{' '} 
          <a  className={styles.sociallink}
              href='https://mustdev.pp.ua'
              target='_blank'
          >
            Mustache development
          </a>
        
      </footer>

      
    </div>
      )
}
