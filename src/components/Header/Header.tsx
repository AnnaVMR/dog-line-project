import { FC } from 'react';
import style from './Header.module.scss';
import styles from './Header.module.scss';
import logo from '../../images/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Header: FC = () => {
  const navigate = useNavigate();
  const handleOnBreeds = () => {
    navigate('/breeds');
  };
  const handleOnAdopt = () => {
    navigate('/adopt');
  };
  const handleMain = () => {
    navigate('/');
  };

  return (
    <div className={style.container}>
      <div className={styles.appBar}>
        <div className={styles.logoDiv}>
          <img className={styles.logo} src ={logo} onClick={handleMain} alt="Logo"/>
        </div>
        <div className={styles.navigation}>
          <div onClick={handleOnBreeds}>Breeds</div>
          <div onClick={handleOnAdopt}>Adopt</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
