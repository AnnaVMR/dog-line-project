import { Button } from '@mui/material';
import { FC } from 'react';
import PageLayout from "../../components/PageLayout/PageLayout";
import styles from './AdoptPage.module.scss';

const AdoptPage: FC = () => {
  return(
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.headerText}>
          <h3>Friendship and loyalty of dogs don't depend on the breed.</h3>
          <p>If You think the same way, maybe there is a chance that You will open Your heart to a needy ponytail?</p>
        </div>
        <div className={styles.cart}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d9970913.217312405!2d22.782627675717443!3d53.64688100768753!3m2!1i1024!2i768!4f13.1!2m1!1sdog%20shelter!5e0!3m2!1sru!2sby!4v1649651144443!5m2!1sru!2sby" width="600" height="450" loading="lazy"></iframe>
        </div>
        <div className={styles.help}>
          <div>Or, maybe, You can help?</div>
          <div><a href="https://egida.by/donate"><Button variant="outlined">Check how</Button></a></div>
        </div>
      </div>
    </PageLayout>
  )
}

export default AdoptPage;
