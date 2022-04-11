import { FC } from 'react';
import styles from './Footer.module.scss';

const Footer: FC = () => {
  return(
    <div className={styles.container}>
      <h4>Contact Us</h4>
      <div className={styles.contactData}>
        <div> Phone number: <a href="+775 11 11 11 11">+775 11 11 11 11</a> </div>
        <div> Fax: <a href="+775 11 11 11 11">+775 11 11 11 11</a> </div>
      </div>
    </div>
  );
};

export default Footer;
