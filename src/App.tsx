import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import AdoptPage from './Pages/Adopt/AdoptPage';
import MainPage from './Pages/Main';
import NotFoundPage from './Pages/NotFound';
import BreedsPage from './Pages/Breeds'
import BreedDetailsPage from './Pages/BreedDetails/BreedDetailsPage';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/breeds" element={<BreedsPage />} />
      <Route path="/adopt" element={<AdoptPage />} />
      <Route path="/breeds/:id" element={<BreedDetailsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
