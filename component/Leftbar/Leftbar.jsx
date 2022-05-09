import styles from './Leftbar.module.scss'
import React, {useState} from 'react'

const Leftbar = () => {
    const [up,setUp] = useState(false);
    return(
        <div className={styles.left} >
            <div className={styles.indication}>
                <div className={styles.text}>
                    Indicate your preferences and we will recommend the best LeetCode questions for you to practice.
                </div>
                <div className={ up ? styles.rotate : styles.arrow} onClick={() => setUp(!up)} >
                    <img src="/arrow.png" alt="" />
                </div>
            </div>
            <div className={!up ? styles.appear : styles.float}>
                <div className={styles.schedule}>
                    <h5>SCHEDULE</h5>
                    <div className={styles.wrap}>
                        <div className={styles.week}>
                            <p>8 weeks</p>
                            <input type="range" min="1" max="100" value="40" className={styles.slider} id="myRange"></input>
                        </div>
                        <div className={styles.hour}>
                            <p>8 hours per week</p>
                            <input type="range" min="1" max="100" value="25" className={styles.slider} id="myRange"></input>
                        </div>
                    </div>
                </div>
                <div className={styles.difficulty}>
                    <h5>DIFFICULTY</h5>
                    <div className={styles.wrap}>
                        <div className={styles.easy}>
                            <input type="checkbox"></input>
                            <span>Easy</span>
                        </div>
                        <div className={styles.easy}>
                            <input type="checkbox"></input>
                            <span>Medium</span>
                        </div>
                        <div className={styles.easy}>
                            <input type="checkbox"></input>
                            <span>Hard</span>
                        </div>
                    </div>
                </div>
                <div className={styles.topics}>
                    <h5>TOPICS</h5>
                    <p>All topics selected (
                        <a href="">Change</a>
                        )</p>
                </div>
            </div>
        </div>
    )   
}
export default Leftbar