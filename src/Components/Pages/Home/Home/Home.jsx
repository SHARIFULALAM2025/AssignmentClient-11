import React from 'react';
import CarouselPage from './Carousel/CarouselPage';
import NewBook from './NewBook/NewBook';



import Container from '../../../Container/Container';
import Coverage from './Coverage/Coverage';

const Home = () => {
  return (
    <div >
      <Container>
        <CarouselPage></CarouselPage>
        <NewBook></NewBook>
        <Coverage></Coverage>
      </Container>
    </div>
  )
};

export default Home;