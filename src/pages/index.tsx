import Carousel from 'components/Carousel';
import Image from 'components/Image';
import HomePageWrapper from './HomePage.styled';

const carouselImages = [
  '/static/images/1.jpg',
  '/static/images/2.jpg',
  '/static/images/7.jpg',
  '/static/images/10.jpg',
];

export default function Home() {
  return (
    <HomePageWrapper>
      <Carousel images={carouselImages} />
      
    </HomePageWrapper>
  );
}
