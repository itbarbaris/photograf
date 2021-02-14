//deps
import { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
//components
import Image from 'components/Image';
//styling
import classnames from 'classnames';
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
    const buttonClass = e.currentTarget.className;

    //if navigation btn clicked switch to that image
    if (buttonClass === 'navigator') {
      setIndex(direction);
    } else {
      //go prev/next image
      setIndex(index + direction);
    }
  };

  return (
    <CarouselWrapper>
      <section className='controls'>
        <section className='nextPrevBtn'>
          <button
            value='-1'
            onClick={handleChangeImage}
            aria-label='предыдущее изображение'
          >
            <BsChevronCompactLeft />
          </button>
          <button
            value='1'
            onClick={handleChangeImage}
            aria-label='следующее изображение'
          >
            <BsChevronCompactRight />
          </button>
        </section>
        <section className='navigateImagesBtn'>
          {images.map((_, idx) => {
            const className = classnames({
              current: idx === index,
            });

            return (
              <button
                key={idx}
                value={idx}
                onClick={handleChangeImage}
                className='navigator'
              >
                <div className={className} />
              </button>
            );
          })}
        </section>
      </section>
      <section className='carouselContainer'>
        {images.map((image, idx) => {
          const className = classnames({
            carouselItem: true,
            activeSlide: index === idx,
            lastSlide: index - 1 === idx || (index === 0 && idx === images.length - 1),
          });

          return (
            <Image
              key={idx}
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
