import { FC, useEffect, useState } from 'react';
import { RootState } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import PageLayout from '../../components/PageLayout/PageLayout';
import BasicTabs from '../../components/Tabs/Tabs';
import { getAllBreeds } from '../../store/Breeds/ActionCreator';

const BreedsPage: FC = () => {
  const dispatch = useDispatch();

  const { allBreeds } = useSelector((state: RootState) => state.GetAllBreeds);

  const [page] = useState(12);


  useEffect(() => {
    dispatch(getAllBreeds(page));
  }, [page]);

  return (
    <PageLayout>
      <div>
        {allBreeds && (
          <div>
            <BasicTabs />
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BreedsPage;
