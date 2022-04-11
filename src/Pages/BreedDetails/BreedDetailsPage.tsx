import { FC, useEffect } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useParams } from 'react-router-dom';
import { getAllBreeds } from '../../store/Breeds/ActionCreator';
import styles from './BreedDetails.module.scss';

const BreedDetailsPage: FC = () => {
  const { allBreeds } = useSelector((state: RootState) => state.GetAllBreeds);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBreeds(200));
  }, []);

  const breedFiltered = allBreeds?.filter(item => !id || item.id == id);
 
  return (
    <PageLayout>
      <div>
        {breedFiltered!.map((item) => (
          <div className={styles.container}>
            <img src={item.image.url}/>
            <div className={styles.name}> Breed' name: {item.name} </div>
            <div className={styles.info}>
              <div className={styles.info_details}>
                <span>Bred for: {item.bred_for}</span>
              </div>
              <div className={styles.info_details}>
                <span>Life span: {item.life_span}</span>
              </div>
              <div className={styles.info_details}>
                <span>Temperament: {item.temperament}</span>
              </div>
              <div className={styles.info_details}>
                <span>Weight (metric system): {item.weight.metric}</span>
              </div>
              <div className={styles.info_details}>
                <span> Height (metric system): {item.height.metric}</span>
              </div>
            </div>
          </div>
        ))};
      </div>
    </PageLayout>
  );
};

export default BreedDetailsPage;
