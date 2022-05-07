import styles from './Navbar.module.scss'
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {

    const [active, setActive] = useState(false);

    return (
        <nav className = {styles.nav} >
            <div className={styles.logo}>
                <Link href= "/" >
                    <a href="/">GRIND 75 <br /> <span> by the author of Blind 75</span></a>
                </Link>
            </div>
            <div className={styles.hamMenu} onClick={() => setActive(! active)} >
                <img className= {active ? styles.closeHam : styles.ham} src="/bars-solid.svg" alt="ham"/>
                <img className= {active ? styles.openCross : styles.cross} src="/xmark-solid.svg" alt="ham"/>
            </div>
            <div className={!active ? styles.visible : styles.navLinks}>
                <ul>
                    <li><a href="/changelog">Changelog</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/faq">FAQ</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar