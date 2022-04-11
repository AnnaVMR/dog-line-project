import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getAllBreeds } from '../../store/Breeds/ActionCreator';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ImgList.module.scss';

interface IImgList {
  value: string;
}

export default function ImgList(props: IImgList) {
  const dispatch = useDispatch();
  const { value } = props;
  const { allBreeds } = useSelector((state: RootState) => state.GetAllBreeds);
  const [page] = useState(200);

  useEffect(() => {
    dispatch(getAllBreeds(page));
  }, [page]);

  const navigate = useNavigate();

  const openDetails = (id: string) => {
    navigate(`/breeds/${id}`);
  };

  const filterBreeds = allBreeds?.filter(item => !value || item.breed_group === value);
  
  return (
    <ImageList cols={3} sx={{ width: 1100, height: 'auto' }} className={styles.listItems}>
      {filterBreeds!.map((item) => (
        <ImageListItem key={item.id}>

          <img
            src={`${item.image.url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
            onClick={() => openDetails(item.id)}
          />
          <ImageListItemBar
            title={item.name}
            position="below"
          />

        </ImageListItem>
      ))}
    </ImageList>
  );
};
