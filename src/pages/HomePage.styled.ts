import styled from 'styled-components';

const HomePageWrapper = styled.main`
  .photoShoots {
    padding-top: 60px;
    background-color: #e8d7c9;

    .photoShoot {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding-bottom: 40px;

      & > article {
        max-width: 600px;
      }
      header {
        position: absolute;
        top: 20px;
        left: 0;
        z-index: 1;
        background-color: #e8d7c9;
        height: 45px;
        display: flex;
        align-items: center;

        h2 {
          display: inline;
          font-size: 4rem;
          white-space: nowrap;
          /* z-index: 2; */
          text-transform: uppercase;
          /* line-height: 45px; */
          margin-bottom: -10px;
        }
      }

      &:nth-child(2n) {
        header {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      &:last-child {
        header {
          bottom: 20px;
          right: 0;
          left: unset;
          top: unset;
        }
      }
    }
  }
`;

export default HomePageWrapper;
