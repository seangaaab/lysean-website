import { Footer } from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import styles from './products.module.scss'

import lysean from '../../assets/img/ProductsBG/lyseanlogo.png'
import greatVal from '../../assets/img/ProductsBG/greatValueLogo.png'

import kcc from '../../assets/img/mall-logos/kcc-logo.png'
import sm from '../../assets/img/mall-logos/sm-logo.png'
import savemore from '../../assets/img/mall-logos/savemore-logo.png'
import gmall from '../../assets/img/mall-logos/gmall-logo.png'
import grand from '../../assets/img/mall-logos/grand-logo.png'

import business from '../../assets/img/ProductsBG/business.png'
import rebrand from '../../assets/img/ProductsBG/Rebrand.png'
import { HashLink } from 'react-router-hash-link'

const Products = () => {
  return (
    <div className={styles.Product} id='product'>
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

		<div className={styles.div2}>
			<div className={styles.lysean}>
				<div>

					<div className={styles.header}>
						<img src={lysean} alt="" />
						<h4><span>Lysean <br/></span>FOOD PRODUCTS</h4>
					</div>

					<div className={styles.stores}>
						<img src={sm} alt="" />
						<img src={savemore} alt="" />
						<img src={grand} alt="" />
						<img src={kcc} alt="" />
					</div>

					<div className={styles.productLists}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>

				</div>
			</div>

			<div className={styles.gmall}>
				<div>

					<div className={styles.header}>
						<img src={greatVal} alt="" />
						<h4>Lysean Food Products <br /><span>Distributor Name</span></h4>
					</div>

					<div className={styles.stores}>
						<img src={gmall} alt="" />
					</div>

					<div className={styles.productLists}>
						<div></div>
						<div></div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>

		<div className={styles.div3}>
			<h3>Want to start your business?</h3>
			<img src={business} alt="" />
			<div>
				<img src={rebrand} alt="" />
				<span>
				Lysean Food Products is also open for orders for rebranding <br />
				<button><HashLink to='/#section3'>Contact us now!</HashLink></button>
				</span>
			</div>
		</div>

		<div id={styles.footerPrimer}></div>
		<Footer/>
    </div>
  )
}

export default Products