// import './navbar.module.scss'
import Logo from '../../assets/img/lysean-logo.png'
import styles from './navMob.module.scss'
import NavbarBG from '../../assets/img/NavbarBG.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

  var initShow:Boolean = window.innerWidth >= 992 ? true : false;
  const [show, setShow] = useState(initShow);
  
  useEffect(() => {
    const widthListener = () => {
      window.innerWidth >= 992 ? setShow(true) : setShow(false);
    }
    window.addEventListener('resize', widthListener)
      
    return () => {
      window.removeEventListener('resize', widthListener)
    }
  }, [])
  

  const mobileMenu = () =>{
    window.innerWidth >= 992 ? null : setShow(!show)
  }

  const navigate = useNavigate();

  const scrollOffset = (el:any) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo(
      {
        top: yCoordinate + yOffset,
      }
    );

  }

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
          }}
          >Home</a></li>
          <li><a
          href='/products'
          onClick={()=>{
            mobileMenu()
          }}
          >Products</a></li>
          <span onClick={()=>{
            navigate('/')
            window.scrollTo(0, 0);
          }}></span>
          <li>
            <HashLink to='/#section2' onClick={mobileMenu} scroll={scrollOffset}>
              Locations
            </HashLink>
          </li>
          <li>
            <HashLink to='/#section3' onClick={mobileMenu} scroll={scrollOffset}>
              Contact
            </HashLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar