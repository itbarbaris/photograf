//components
import Carousel from 'components/Carousel';
import Image from 'components/Image';
//styles
import HomePageWrapper from './HomePage.styled';

const carouselImages = [
  '/static/images/1.jpg',
  '/static/images/2.jpg',
  '/static/images/7.jpg',
  '/static/images/10.jpg',
];

const photoShoots = [
  { name: 'портретная съемка', image: '/static/images/4.jpg' },
  { name: 'семейное фото', image: '/static/images/6.jpg' },
  { name: 'свадьбы', image: '/static/images/4.jpg' },
];

export default function Home() {
  return (
    <HomePageWrapper>
      <Carousel images={carouselImages} />
      <section className='photoShoots'>
        {photoShoots.map((shoot, idx) => {
          const { image, name } = shoot;
          return (
            <article className='photoShoot' key={idx}>
              <header>
                <h2>{name}</h2>
              </header>
              <Image src={image} width={3840} height={2160} objectFit='contain' />
            </article>
          );
        })}
      </section>
    </HomePageWrapper>
  );
}
