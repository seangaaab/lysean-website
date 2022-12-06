// import './navbar.module.scss'
import Logo from '../../assets/img/lysean-logo.png'
import styles from './navMob.module.scss'
import NavbarBG from '../../assets/img/NavbarBG.png'
import { useNavigate } from 'react-router-dom'
import React, { useState } from 'react'


const Navbar = () => {

  const [show, setShow] = useState(false);

  const mobileMenu = () =>{
    setShow(!show)
  }

  const navigate = useNavigate();

  const section2 = parent.document.getElementById('section2');

  return (
    // <nav>
    //   <div>
    //     <a onClick={()=>{navigate('/')}}>Home</a>
    //     <a onClick={()=>{navigate('/products')}}>Products</a>
    //     <button onClick={()=>{navigate('/')}}>
    //     <img src={Logo} alt="Lysean Logo" />
    //     </button>
    //     <a href="#">Locations</a>
    //     <a href="#">Contact</a>
    //   </div>
    //   {/* <img src={NavbarBG} alt="" /> */}
    //   {/* <span>test</span> */}
    // </nav>

    <nav id={styles.navbar}>

        <button onClick={()=>{navigate('/')}}>
          <img src={Logo} alt="Lysean Logo" />
        </button>

        <div className={!show ? styles.navIcon : `${styles.navIcon} ${styles.navIconActive}`}
          onClick={mobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className={!show ? styles.menu : `${styles.menu} ${styles.show}` }>
        <ul>
          <li><a 
          onClick={ ()=>{
            mobileMenu()
            navigate('/')
            window.scrollTo(0, 0);
          }
          }>Home</a></li>
          <li><a
          href='/products'
          onClick={()=>{
            mobileMenu()
          }
        }>Products</a></li>
          <li><a
          href='/#section2'
          onClick={()=>{
            mobileMenu()
          }
            
          }>Locations</a></li>
          <li><a
          href='/#section3'
          onClick={()=>{
            mobileMenu()
          }
          }>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar