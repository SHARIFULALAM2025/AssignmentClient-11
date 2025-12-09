import React from 'react';
import CarouselPage from './Carousel/CarouselPage';
import NewBook from './NewBook/NewBook';
import Choose from './Choose/Choose';
import Feedback from './Customer/Feedback';
import Service from './Service/Service';

const Home = () => {
  return (
    <div>
      <CarouselPage></CarouselPage>
      <NewBook></NewBook>
      <Service></Service>
      <Choose></Choose>
      <Feedback></Feedback>
    </div>
  )
};

export default Home;