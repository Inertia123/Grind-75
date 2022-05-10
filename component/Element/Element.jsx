import styles from './Element.module.scss'

const Element = (props) => {
    return(
        <div className={styles.element}>
            <div className={styles.firstWrapper}>
                <div className={styles.slNo}>
                    <h2>{props.number}</h2>
                </div>
                <div className={styles.question}>
                    <h3>{props.title}</h3>
                    <div className={styles.innerWrap}>
                        <p>{props.level}</p>
                        <p>{props.time} mins</p>
                    </div>
                </div>
            </div>
            <div className={styles.tick}>
                <img src="/tick.png" alt="" />
            </div>
        </div>
    )
}

export default Element