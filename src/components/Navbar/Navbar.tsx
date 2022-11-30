// import './navbar.module.scss'
import Logo from '../../assets/img/lysean-logo.png'
import styles from './navMob.module.scss'
import NavbarBG from '../../assets/img/NavbarBG.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const Navbar = () => {

  const [show, setShow] = useState(false);

  const mobileMenu = () =>{
    setShow(!show)
  }

  const navigate = useNavigate();
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
          <li><a onClick={()=>{navigate('/')}}>Home</a></li>
          <li><a onClick={()=>{navigate('/products')}}>Products</a></li>
          <li><a onClick={()=>{navigate('/')}}>Locations</a></li>
          <li><a onClick={()=>{navigate('/')}}>Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar