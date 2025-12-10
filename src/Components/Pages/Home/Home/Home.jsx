import React from 'react';
import CarouselPage from './Carousel/CarouselPage';
import NewBook from './NewBook/NewBook';
import Choose from './Choose/Choose';
import Feedback from './Customer/Feedback';
import Service from './Service/Service';
import Container from '../../../Container/Container';

const Home = () => {
  return (
    <div>
      <Container>
        <CarouselPage></CarouselPage>
        <NewBook></NewBook>
        <Service></Service>
        <Choose></Choose>
        <Feedback></Feedback>
      </Container>
    </div>
  )
};

export default Home;