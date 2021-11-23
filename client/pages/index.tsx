import styles from '../styles/Home.module.scss'
import Slider from '../components/carousel/Slider'
import HotProducts from '../components/products/HotProducts'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Slider />
      <h2>Хиты Продаж</h2>
      <HotProducts />
    </div>
  )
}
export default Home