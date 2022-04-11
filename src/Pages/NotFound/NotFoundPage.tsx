import { FC } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import styles from './NotFoundPage.module.scss';
import page_not_found from '../../images/page_not_found.jpg'

const NotFoundPage: FC = () => {
  return(
    <PageLayout>
      <div className={styles.container}>
        <h1>OOPS...Page not found</h1>
        <img src={page_not_found} alt="Page not found" />
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
