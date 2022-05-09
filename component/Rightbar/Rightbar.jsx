import styles from './Rightbar.module.scss'

const Rightbar = () => {
    return (
        <div className={styles.right}>
            <div className={styles.content}>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Stop grinding LeetCode. Study with a plan</a>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Developed by Google engineers, Algomaster is the fastest way to get a software Engineering job. Join today for a 70% discount</a>
            </div>
            <div className={styles.content}>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Master Coding Interviews Efficiently</a>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Grokking the coding interview teaches you technique and question patterns to be good at coding interviews. Get your 10% discount now</a>
            </div>
            <div className={styles.content}>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Craft the Perfect Resume for FAANG</a>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Save time crafting your resume with FAANG Tech Lead's FAANG quality resume templates and examples which have helped many software enginners to get interviews at top Bay area companies. Grab them now on a whopping 70% off</a>
            </div>
            <div className={styles.content}>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Free Qurated Interview Preparation materials</a>
                <a href="https://algo.monster/?sscid=51k6_8u6xk">Tech interveiw handbook goes straight to the point and tells you the minimum you need to know to excel in your technical interviews, and it's free!</a>
            </div>
        </div>
    )
}

export default Rightbar 