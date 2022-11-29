import './navbar.module.scss'
import Logo from '../../assets/img/lysean-logo.png'
import NavbarBG from '../../assets/img/NavbarBG.png'


const Navbar = () => {
  return (
    <nav>
      <div>
        <a href="/">Home</a>
        <a href="/Products">Our Products</a>
        <button>
        <img src={Logo} alt="Lysean Logo" />
        </button>
        <a href="#">Locations</a>
        <a href="#">Contact</a>
      </div>
      {/* <img src={NavbarBG} alt="" /> */}
      {/* <span>test</span> */}
    </nav>
  )
}

export default Navbar