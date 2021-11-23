import styles from '../styles/layout.module.scss'
import Navbar from './navigation/Navbar'
import Head from 'next/head'
import { FC } from 'react'
import Footer from './navigation/Footer'

interface Props {
    children: Element;
}
const Layout: FC<Props> = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Popular</title>
            </Head>
            <nav>
                <Navbar />
            </nav>
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}
export default Layout;