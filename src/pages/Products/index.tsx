import { Footer } from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import styles from './products.module.scss'

const Products = () => {
  return (
    <div id={styles.Product}>
		<Navbar/>
		<div className={styles.div1}>
		<h1>Our Products</h1>
		<div className={styles.boxContainers}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
		</div>
		<div className={styles.spacer}></div>
		<Footer/>
    </div>
  )
}

export default Products