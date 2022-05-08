import styles from '../styles/Faq.module.scss'

const Faq = () => {
    return (
        <div className={styles.container}>
            <h1>Frequently Asked Questions</h1>
                <h2>How did you come up with this list of questions and how did you rank them?</h2>
                <p>Spoiler alert - it's not rocket science. An initial pool of questions were taken from Blind 75, Sean Prashad's LeetCode Patterns, questions in Elements of Programming Interviews and a few other resources related to coding interview patterns. Next I looked at all the LeetCode questions and sorted them by popularity, frequency, companies, likes rating, topics covered, etc, and looked at the top 200 hundred questions for each dimension to identify if there were questions worth adding into the new pool of questions. <br /> <br/>

                With this new pool of questions, I tagged them according to the topics/patterns and ranked each of them within each topic/pattern. I usually put Easy questions first because they can impart core algorithmic patterns and can be used again/honed in subsequent questions. Some of the subsequent questions involve multiple patterns and are better attempted after the basic ones have been completed. Hard questions are of lower priority (but still present) because they usually take longer than half an hour and the most common question difficulty in coding interviews is Medium. You will see that more than half of the questions are of Medium difficulty. <br /> <br/>

                I also put Premium questions as far back as possible. There are non-premium alternatives to the premium questions which are of value, so you don't need to be doing premium questions when you are first starting out. <br /> <br/>

                Lastly, I combined all of them into a single list which is not categorized by topics and broke them down into weeks. This should be the order most people can use when practicing.</p>
                <h2>Why is it recommended to do the list in order?</h2>
                <p>In real interviews, your questions can be from any topic so it is important to get all-rounded practice/coverage of the most important coding interview patterns/topics in the limited time you have, regardless of how long you allocated to spend on interview preparation, be it a week, a month, or 3 months. <br /> <br/>

                Spaced repetition, also known as distributed practice, is an extremely effective approach for internalizing knowledge into long-term memory. By doing questions across a variety of topics each week, and revisiting the topic again in subsequent weeks, you get to build on the learnings from the past weeks and become better at solving questions from that topic. <br /> <br/>

                If you prefer to focus on certain topics or want to view the list categorized by topics as per the original Blind 75, there is an option to categorize the questions by topic or difficulty. This can be helpful if you're just starting out and want to be familiar with a specific topic first.</p>
                <h2>What are the recommended durations?</h2>
                <p>In coding interviews, you usually have less than half an hour per algorithm question. Hence for each question, I have assigned a recommended duration. This is the duration you are recommended to spend on trying to solve the problem. At the start of your practice journey, you might spend longer than the recommended duration and that is ok, as you are still warming up. But after doing 20-30 questions or so, if you still need to spend longer than the recommended duration, it is a sign that you need more revision of your Computer Science fundamentals and maybe practice on easier questions. <br /> <br/>

                If you find yourself consistently spending lesser time than the recommended duration and can solve all the questions, congratulations! You are probably ready for interviews.</p>
                <h2>Why don't you show the companies for a question?</h2>
                <p>"Give a man a fish, and you feed him for a day. Teach a man to fish, and you feed him for a lifetime." <br /> <br/>


                We want to teach you how to fish instead of giving you fish. If we show the companies, many people will filter by company and practice those questions that the company is likely to ask. That is not the right way to prepare for interviews. The point of this list is to impart the common patterns, not help you to find questions which you will likely be asked when you're interviewing. You should focus on learning the patterns and building up your coding competency and fundamentals instead of memorizing questions and answers.</p>
                <h2>Will this list change in future?</h2>
                <p>Possible but unlikely. The questions beyond the first thousand LeetCode questions are mostly created for contests purposes and are rehashes of existing questions. In fact, only 5 questions from this list are not in the first thousand questions. Newer LeetCode questions cover the same coding interview patterns in the Grind 75 list and there is little value in working on LeetCode questions not in this list. Hence it is unlikely that this list needs to be changed to include newer questions in future.</p>
                <h2>Will you add more questions in future?</h2>
                <p>You have time to do more than 169 questions?! The returns on doing questions beyond this list is diminishing and not very recommended. But if there's high demand, I could add more. <br /> <br/>

                Just let me know.</p>
        </div>
    )
}

export default Faq