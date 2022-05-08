import styles from '../styles/About.module.scss'

const About = () => {
    return (
        <div className={styles.aboutContainer}>
            <h1>About Grind 75</h1>
            <p>Hi there! I'm the author of Blind 75, a curated list of LeetCode questions that you can practice to save time in your job hunt. For some reason, this list of questions blew up in popularity and people have been asking for a Blind 75 2.0, so here it is!</p>
            <h2>What are the problems with Blind 75?</h2>
            <p>Blind 75 was created 5 years during my last job hunt. Although it is no longer that new, most of the questions are still relevant! However, apparently 75 questions is too few for some folks and they have been asking for more questions to practice beyond the initial Blind 75 list. Also, the Blind 75 list is static, non-personalized and questions do not have a priority. It does not take into account how much time you are willing to spend on practicing, which topics you want to focus on, and tell you which are the more important questions in that 75. I have been thinking about how to solve this for a few months now.</p>
            <h2>Introducing Grind 75</h2>
            <p>Grind 75 is Blind 75 reimagined for the future. I looked at all the top LeetCode questions (by popularity, frequency, topics covered, like rating) and picked the top 169 questions which I felt were of value. Within those questions, I ranked them again and assigned a priority to them according to the value it provides to the user. With a priority for each question, I selected the top 75 to be the new Blind 75, which I call Grind 75. <br /> <br />

            However, it doesn't end at 75 questions! As mentioned, I've selected 169 questions and you can go past the top 75 questions if you like and have the time. You probably don't need to do beyond the 169 questions.</p>
            <h2>What's new in Grind 75?</h2>
            <p>As mentioned earlier, Grind 75 is a dynamic list of recommended LeetCode questions which you can personalize according to your schedule, time constraints, and preferences. You can:
            </p>
            <ul>
                <li>No premium questions in the initial list of 75 questions</li>
                <li>Select how many hours you want to spend on practicing</li>
                <li>Select the difficulty of questions you want to practice</li>
                <li>Select specific topics you want to practice/ignore</li>
                <li>View the questions categorized by topics/difficulty/weeks</li>
            </ul>
            <p>Check out the Frequently Asked Questions to know more about the thinking behind this list.</p>
            <h2>Credits</h2>
            <ul>
                <li>AlgoMonster - Their top patterns to conquer the Technical Coding Interview page was helpful in prioritizing questions</li>
                <li>Sean Prashad's LeetCode Patterns - Sean's list is great and I tried to maintain feature parity as much as possible.</li>
                <li>Elements of Programming Interviews - I wish I knew about this book earlier. This book is as good as Cracking the Coding Interview and their study scenarios served as huge inspiration for Grind 75.</li>
                <li>LeetCode - All hail the king!</li>
            </ul>
        </div>
    )
}

export default About