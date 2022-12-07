import { Footer } from '../../components/Footer/Footer'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import styles from './home.module.scss'

import home1 from '../../assets/img/HomeBG/Div 1.png'
import arrow from '../../assets/img/Arrow.svg'

import LyseanLocations from '../../assets/img/HomeBG/LyseanLocations.png'
// import malls from '../../assets/img/mall-logos/Group 5.svg'
import kcc from '../../assets/img/mall-logos/kcc.png'
import sm from '../../assets/img/mall-logos/sm.png'
import savemore from '../../assets/img/mall-logos/smSavemore.png'
import gmall from '../../assets/img/mall-logos/gmallLogo.png'
import grand from '../../assets/img/mall-logos/GaisanoGrandLogo.png'

const Home = () => {
  return (
    <div id={styles.Home}>
      <Navbar/>
      <section className={styles.section1}>
        <div className={styles.div1}>
          <img src={home1} alt="Lysean" />
        </div>
        <div className={styles.div2}>
          <h3><span>Lysean <br/></span>FOOD PRODUCTS</h3>
          <p>
            proudly sells food products <br/>
            that are native in Southern Philippines 
          </p>
          <span id={styles.btn}><a href='../Products'>visit products <img src={arrow} alt="Visit Products" /></a></span>
        </div>
      </section>

      <section className={styles.section2} id='section2'>
        <div className={styles.divider1}></div>

        <div className={styles.section2container}>
          <div className={styles.philmap}>
            <h4>Supplying<br/>stores and supermakets</h4>
            <h2>in<br/>major southern mindanao cities</h2>

          </div>

          <div className={styles.locations}>
            <img src={LyseanLocations} alt="" />
            <p>Partner Stores:</p>
            <div className={styles.malls}>
              <img src={sm} alt="" />
              <img src={savemore} alt="" />
              <img src={gmall} alt="" />
              <img src={grand} alt="" />
              <img src={kcc} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.list}>
          <ul>
            <li><h3>Davao</h3></li>
            <li>SM Davao</li>
            <li>SM Lanang Premier</li>
            <li>SM Savemore Bajada</li>
            <li>SM Savemore Bangkal</li>
            <li>GMALL Davao</li>
            <li>GMALL Toril</li>
            <li>Gaisano Grand Citygate</li>
            <li>Gaisano Grand Tibungco</li>
          </ul>

          <ul>
            <li><h3>Tagum</h3></li>
            <li>GMALL Tagum</li>
            <li>Gaisano Center Tagum</li>
            <li>Gaisano Grand Tagum</li>
            <li>Gaisano Grand Panabo</li>
          </ul>

          <ul>
            <li><h3>Digos</h3></li>
            <li>Gaisano Mall Digos</li>
            <li>Gaisano Center Digos</li>
            <li>Gaisano Grand Digos</li>
          </ul>

          <ul>
            <li><h3>Gensan</h3></li>
            <li>KCC Mall Gensan</li>
            <li>SM Gensan</li>
            <li>GMALL Gensan</li>
            <li>Gaisano Grand Polomolok</li>
          </ul>

          <ul>
            <li><h3>Koronadal</h3></li>
            <li>KCC Mall Koronadal</li>
            <li>SM Savemore Koronadal</li>
            <li>Gaisano Grand Koronadal</li>
          </ul>
          
        </div>

      </section>
    
      <section className={styles.section3} id='section3'>
        <div className={styles.divider2}></div>
        <div className={styles.contact}>
          <h1>Contact Us</h1>
          <form action='mailto:lyseantuna@yahoo.com.ph' method='POST'>
            <input type="text" title="name" placeholder='Name'/>
            <input type="email" title="email" placeholder='Email'/>
            <textarea title="message" placeholder='Message'/>
            <button>Send</button>
          </form>
        </div>
        <div id={styles.footerPrimer}></div>
      </section>

      <Footer />
    </div>
  )
}

export default Home