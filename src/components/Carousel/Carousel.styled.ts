import styled from 'styled-components';

const CarouselWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232323;
  position: relative;

  .controls {
    width: 100%;
    display: flex;
    .nextPrevBtn {
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

    .navigateImagesBtn {
      width: auto;
      height: 10px;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 101;
      display: flex;

      button {
        background-color: transparent;
        border: none;
        padding: 5px;
        height: 20px;
        &:focus {
          outline: none;
        }
      }

      div {
        width: 10px;
        height: 10px;
        padding: 5px;
        margin: 0 10px;
        border-radius: 50%;
        border: 1px solid lightskyblue;
        transition: 0.3s all ease;

        &.current {
          background-color: lightskyblue;
        }
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
      transition: 0.3s all linear;
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
