import Leftbar from '../component/Leftbar/Leftbar'
import Rightbar from '../component/Rightbar/Rightbar'
import Middle from '../component/Middle/Middle'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Leftbar />
      <Middle />
      <Rightbar />
    </div>
  )
}
