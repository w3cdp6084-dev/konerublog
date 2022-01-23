import { Box } from '@chakra-ui/react';
import styles from "../styles/Footer.module.scss";
import Image from 'next/image';

export const Footer = () => {
 
    return (
      <>
      <footer>
        <Box>
            <ul className={styles.FooterListBox}>
                <li className={styles.FooterList}>
                    <a href="https://twitter.com/w3cdp6084w3cdp" target="_blank">
                        <Image src="/image/twitter.svg" width={24} height={24} alt="Twitter" />
                    </a>
                </li>
                <li className={styles.FooterList}>
                    <a href="https://www.facebook.com/w3cdpmori" target="_blank">
                        <Image src="/image/facebook.svg" width={24} height={24} alt="Facebook" />
                    </a>
                </li>
                <li className={styles.FooterList}>
                    <a href="https://dribbble.com/w3cdp6084" target="_blank">
                        <Image src="/image/dribbble.svg" width={24} height={24} alt="Dribbble" />
                    </a>
                </li>
                <li className={styles.FooterList}>
                    <a href="https://github.com/w3cdp6084-dev" target="_blank">
                        <Image src="/image/github.svg" width={24} height={24} alt="Github" />
                    </a>
                </li>
            </ul>
        </Box>
        <p className={styles.FooterList}>©konekone blog.</p>
        </footer>
      </>
    );

};
export default Footer;