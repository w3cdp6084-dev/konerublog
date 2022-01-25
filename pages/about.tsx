import styles from "../styles/About.module.scss";
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@chakra-ui/react';
export const About = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <main className={styles.main}>
      <div className={styles.logo}>
        <Image src="/image/brand_logo.png" width={100} height={100} alt="logo" />
      </div>
      <dl>
          <dt>KONEKONE</dt>
          <dd>Yusuke Mori</dd>
          <dd>Designer/Developer</dd>
      </dl>
      <p>
          KONEKONEという屋号で、デザイナーとフロントエンドをやってます。<br />
ブランディングとコンセプトメイクの設計を大切にし、モノづくりをおこなっています。<br />
デザイン・プログラムでいろいろな実験を個人で行ってますので、こちらはそのnoteにもなっています。
      </p>
      <Box>
        <Link href={`https://konekone.org/`}>PortForio</Link>
      </Box>
      </main>
      <Footer />
    </div>
  );
}

export default About