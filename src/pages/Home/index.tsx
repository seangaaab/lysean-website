import styles from './homes.module.scss'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div id={styles.Home}>
        <Navbar/>
    </div>
  )
}

export default Home