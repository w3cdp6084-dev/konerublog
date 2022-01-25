import { Box } from '@chakra-ui/react';
import styles from "../styles/Footer.module.scss";
import Image from 'next/image';

export const Footer = () => {
    return (
      <>
        <footer className={styles.footer}>
            <p className={styles.FooterList}>©konekone blog.</p>
        </footer>
      </>
    );
};
export default Footer;