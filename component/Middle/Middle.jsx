import styles from './Middle.module.scss'
import Week from '../Week/Week'
const Middle = () =>{
    return(
        <div className={styles.middle} >
            <div className={styles.heading}>
                <h1>Grind 75 questions</h1>
                <p className={styles.headingPara} >Customize LeetCode study plans according to your needs. You are recommended to work on the questions in order. <a href="/faq">Find out why</a></p>
            </div>
            <div className={styles.summary}>
                <h1>Questions Summary</h1>
                <div className={styles.wrap}>
                    <div className={styles.time}>
                        <h4>TIME NEEDED</h4>
                        <p>How long doing these questions will take for an average person. It's a conservative estimate where it is assumed that roughly the same amount of time will be needed to check the answer for each question.</p>
                        <div className={styles.hourWrap}>
                            <h2>64 hours</h2>
                        <p className={styles.fits} >Fits into your schedule.</p>
                        </div>
                    </div>
                    <div className={styles.diff}>
                        <h4>DIFFICULTY</h4>
                        <p>Questions grouped by difficulty</p>
                        <div className={styles.level}>
                            <h4>Easy: 26</h4>
                            <h4>Medium: 40</h4>
                            <h4>Hard: 9</h4>
                        </div>
                    </div>
                    <div className={styles.topic}>
                        <div className={styles.topicFlex}>
                            <h4>TOPICS</h4>
                        <p className={styles.topicPara} >Questions grouped by topics</p>
                        <div className={styles.topicCount}>
                            <div className={styles.topicCountContent}>
                                <p>Array: 11</p>
                                <p>Binary: 1</p>
                                <p>Binary Search: 5</p>
                                <p>Binary Search Tree: 3</p>
                                <p>Binary Tree: 9</p>
                                <p>Dynamic Programming: 5</p>
                                <p>Graph: 10</p>
                                <p>Hash Table: 1</p>
                                <p>Heap: 4</p>
                                <p>Linked List: 5</p>
                                <p>Matrix: 1</p>
                                <p>Recursion: 3</p>
                                <p>Stack: 7</p>
                                <p>String: 8</p>
                                <p>Trie: 2</p>
                            </div>
                        </div>
                        </div>
                        <p className={styles.res}>Need study resources? Check out <a href="">Tech Interview Handbook's algorithm study cheatsheets.</a></p>
                    </div>
                </div>
                <div className={styles.prog}>
                    <div className={styles.progHead}>
                    <h4 htmlFor="file">COMPLETED 0 / 75</h4>
                    </div>
                    <div className={styles.bar}>
                    <progress id="file" value="0" max="100"> </progress>
                    </div>
                </div>
            </div>
            <div className={styles.bulb}>
                <div className={styles.bulbImg}>
                    <img src="/lightBulb.png" alt="" />
                </div>
                <p>You can now bookmark the page to save your preferences! We also recently changed the questions presentation settings. Refer to the <a href="/changelog">changelog</a> for more details.</p>
            </div>
            <div className={styles.dropdown}>
                <div className={styles.dropWrap}>
                    <select name="pref">
                    <option value="volvo">Based on Preferences</option>
                    <option value="saab">View All Questions</option>
                    </select>
                    <select name="all">
                    <option value="volvo">All Rounded</option>
                    <option value="saab">Order by Difficulty</option>
                    <option value="opel">Order by Topics</option>
                    </select>
                    <select name="group">
                    <option value="volvo">No Grouping</option>
                    <option value="saab">Group by Weeks</option>
                    <option value="opel">Group by Difficulty</option>
                    <option value="audi">Group by Topic</option>
                    </select>
                </div>
                <button>Show topics</button>
            </div>
            <Week no="1" />
            <Week no="2" />
            <Week no="3" />
            <Week no="4" />
            <Week no="5" />
            <Week no="6" />
            <Week no="7" />
        </div>
    )
}

export default Middle