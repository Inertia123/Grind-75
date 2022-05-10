import React, { useState } from 'react'
import Element from '../Element/Element'

import styles from './Week.module.scss'
const Week = (props) => {
    const [rotate, setRotate] = useState(false);
    return(
        <div className={styles.week}>
            <div className={styles.container}>
                <h2>Week {props.no}</h2>
                <div className={styles.wrapper}>
                    <p>0 / 5</p>
                    <progress id="file" value="0" max="100"> </progress>
                    <div className={rotate ? styles.rotate : styles.arrow} onClick={() => setRotate(!rotate)} >
                        <img src="/BlackArrow.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={rotate ? styles.floating : styles.weekFloat}>
                <Element number="1" title="Two Sum" level="Easy" time="15"/>
                <Element number="2" title="Valid Parentheses" level="Easy" time="20"/>
                <Element number="3" title="Merge Two Sorted Lists" level="Easy" time="20"/>
                <Element number="4" title="Best Time to Buy and Sell Stock" level="Easy" time="20"/>
                <Element number="5" title="Valid Palindrome" level="Easy" time="15"/>
            </div>
        </div>
    )
}

export default Week