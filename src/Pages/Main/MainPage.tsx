import { Button } from '@mui/material';
import {FC } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import styles from './MainPage.module.scss';

const MainPage: FC = () => {
  return(
    <PageLayout>
      <div className={styles.container}>
          <div>
            "A dog is the only thing on earth that loves you more than he loves himself ". -  
            Josh Benchley (humorist and actor, Broadway Melody of 1938)
          </div>
        </div>
      <div className={styles.wrapper}>
        <h4>DOG BREEDS</h4>
        <div>
          Nowadays, many of the dogs you know and love are the product of selective breeding 
          between individuals with desirable traits, either physical or behavioral. Each of the
           dog breeds has special characteristics and was bred by people for certain purposes.
           Here you can get acquainted with the breeds of dogs and choose the one that suits your lifestyle and temperament.
        </div>
      </div>
    </PageLayout>
  );  
};

export default MainPage;
