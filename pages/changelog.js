import styles from '../styles/Changelog.module.scss'

export default function Changelog(){
    return (
        <div className={styles.changelogContainer}>
            <h1>Changelog</h1>
            <h2>2022/05/02</h2>
            <ul>
                <li>Added progress indicator for overall and within each question group.</li>
                <li>Allowed each question group to be collapsed/expanded.</li>
            </ul>
            <h2>2022/05/01</h2>
            <ul>
                <li>Bookmark the page to save your preferences! Preferences are now reflected in the URL. By bookmarking the URL, you will get to persist your preferences. Note that question completion progress are still only in localStorage.</li>
                <li>Revamped the questions presentation settings:</li>
                <div>
                    <ol>
                        <li>Question List</li>
                        <ul>
                            <li>View all questions - View the full set of questions</li>
                            <li>Based on preferences - Filtered by time/difficulty/topics</li>
                        </ul>
                        <li>Order</li>
                        <ul>
                            <li>Difficulty - Easy ones first</li>
                            <li>Topics - Important topics come earlier first</li>
                            <li>All Rounded - Mix of difficulty and topics, ensuring all-rounded coverage</li>
                        </ul>
                        <li>Grouping</li>
                        <ul>
                            <li>Weeks - Groups questions according to hours in a week</li>
                            <li>Topics - Groups questions by topics</li>
                            <li>Difficulty - Groups questions by difficulty</li>
                        </ul>
                    </ol>
                </div>
                <li>Changed the default Order field to be by Order by Difficulty as it seems to be the more popular option. To get back the original order, select All Rounded.</li>
            </ul>
        </div>
    )
}