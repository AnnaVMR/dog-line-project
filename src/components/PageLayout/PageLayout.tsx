import { FC } from 'react';
import Header from '../Header';
import Footer from '../Footer';

const PageLayout: FC = ({children}) => {
  return(
    <div className='style.all'>
        <div>
          <Header />
          {children}
          <Footer />
        </div>
    </div>
  );
};

export default PageLayout;