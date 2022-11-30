import styles from './test.modules.scss'

const Test = () => {
  return (
    <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.content}>
          
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Info</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
           </div>
          </nav>
        </div>
       </div>
    </div>
  )
}

export default Test