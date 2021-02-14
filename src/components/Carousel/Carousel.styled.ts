import styled from 'styled-components';

const CarouselWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232323;
  .controls {
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
      font-size: 5rem;
      border: none;
      background: transparent;
      color: #d2f0ee;
      padding: 10px 5px;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;

      &:focus {
        outline: none;
      }
    }
  }

  .carouselContainer {
    height: 100%;
    width: 100%;
    overflow: hidden;
    position: absolute;

    .carouselItem {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
      transition: 0.5s all linear;
      transform: translateX(100%);
    }

    article.lastSlide {
      transform: translateX(-100%);
    }

    article.activeSlide {
      display: block;
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default CarouselWrapper;
