import styles from'./footer.module.scss'
import office from '../../assets/img/FooterIcons/OfficeIcon.png'
import bg from '../../assets/img/FooterIcons/FooteriBG.svg'

import telephone from '../../assets/img/FooterIcons/telephone.png'
import facebook from '../../assets/img/FooterIcons/fb.png'
import mail from '../../assets/img/FooterIcons/mail.png'

export const Footer = () => {
  return (
    <footer id={styles.footer}>
      {/* <img src={bg} alt="" className={styles.bg}/> */}
      <div>
        <div className={styles.office}>
          <img src={office} alt="" />
          <p>Lysean Food Products - Main Office
            <br/> <br/>
            NRC BLDG, C. Lizada Ext., Brgy. Kap. T. Montverde Sr., 
            Agdao, Davao City, Davao del Sur, Philippines 8000</p>
        </div>

        <div className={styles.contactInfo}>
          <span>
            <img src={telephone} alt="" />
            <p>(082) 237 - 1650</p>
          </span>
          <span onClick={()=>{ window.location.href = 'callto:0822371650' }}>
            <img src={facebook} alt="" />
            <p>Lysean Food Products</p>
          </span>
          <span onClick={()=>window.location.href = 'mailto:lyseantuna@yahoo.com.ph'}>
            <img src={mail} alt="" />
            <p>lyseantuna@yahoo.com.ph</p>
          </span>
        </div>
      </div>

      <hr />

      <p className={styles.copyright}>Copyright © 2022 Lysean Food Products</p>
    </footer>
  )
}
