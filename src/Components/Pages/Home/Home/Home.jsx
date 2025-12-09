import React from 'react';
import CarouselPage from './Carousel/CarouselPage';
import NewBook from './NewBook/NewBook';
import Choose from './Choose/Choose';

const Home = () => {
  return (
    <div>
      <CarouselPage></CarouselPage>
      <NewBook></NewBook>
      <Choose></Choose>
    </div>
  );
};

export default Home;