import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import classnames from 'classnames';
import Image from 'components/Image';
import CarouselWrapper from './Carousel.styled';

interface ICarouselProps {
  images: string[];
}

const Carousel: React.FC<ICarouselProps> = ({ images }) => {
  const [index, setIndex] = useState(0);

  //reset index when it goes over the max/min value
  useEffect(() => {
    const maxIndex = images.length - 1;

    if (index > maxIndex) setIndex(0);
    if (index < 0) setIndex(maxIndex);
  }, [index]);

  //enables autosliding
  useEffect(() => {
    const intervalId = setInterval(() => setIndex(index + 1), 5000);

    return () => clearInterval(intervalId);
  }, [index]);

  const handleChangeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const direction = Number(e.currentTarget.value);

    if (direction > 0) setIndex(index + 1);
    else setIndex(index - 1);
  };
  return (
    <CarouselWrapper>
      <div className='controls'>
        <button value='-1' onClick={handleChangeImage}>
          <BsChevronCompactLeft />
        </button>
        <button value='1' onClick={handleChangeImage}>
          <BsChevronCompactRight />
        </button>
      </div>
      <section className='carouselContainer'>
        {images.map((image, idx) => {
          const className = classnames({
            carouselItem: true,
            activeSlide: index === idx,
            lastSlide: index - 1 === idx || (index === 0 && idx === images.length - 1),
          });
          return (
            <Image
              src={image}
              layout='fill'
              objectFit='cover'
              quality={50}
              className={className}
            />
          );
        })}
      </section>
    </CarouselWrapper>
  );
};

export default Carousel;
