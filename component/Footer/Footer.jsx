import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className = {styles.footer} >
            <h1>Have feedback or questions?</h1>
            <p>If you have any feedback or questions, feel free to email us! We will get back to you as soon as possible.</p>
            <div className={styles.mail}>
                <img src="/envolope.png" alt="" />
                <a href="contact@techinterviewhandbook.org">contact@techinterviewhandbook.org</a>
            </div>
            <p className={styles.copyText} >© 2022 Tech Interview Handbook. All rights reserved.</p>
        </footer>
    )
}

export default Footer