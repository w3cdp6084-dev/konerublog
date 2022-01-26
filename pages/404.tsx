import Image from 'next/image';
import Link from 'next/link';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import styles from "../styles/404.module.scss";
export const Custom404 = () => {
    return (
      <div>
        <div>
          <Header />
        </div>
        <main className={styles.main}>
            <h2>404</h2>
          <p>ページがありません🐱</p>
        </main>
        <Footer />
      </div>
    );
  }
  export default Custom404