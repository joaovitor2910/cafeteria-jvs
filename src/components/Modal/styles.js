import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: transparent;
  gap: 20px;
  z-index: 4;
  position: fixed;
  top: 50%;
  left: ${(props) => (props.$openModal ? '50%' : '-30%')};
  transform: translate(-50%, -50%);
  transition: left 1s ease-in-out;

  @media (max-width: 480px) {
    left: ${(props) => (props.$openModal ? '50%' : '-80%')};

    iframe {
      width: 280px;
      height: 300px;
    }
  }

  @media (min-width: 720px) {
    left: ${(props) => (props.$openModal ? '50%' : '-90%')};
  }
`

export const MaskModal = styled.div`
  visibility: ${(props) => (props.$openModal ? 'visibility' : 'hidden')};
  transition: visibility 1s linear;
  position: fixed;
  z-index: 3;
  inset: 0; //coloca zero em todos os lados top bottom left right
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.99) 15%,
    rgba(10, 12, 16, 0.7) 50%,
    rgba(10, 12, 16, 0.99) 85%
  );
`

export const CloseModal = styled.button`
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 6rem;
  font-weight: 300;
  position: fixed;
  top: 100px;
  right: 30px;
  cursor: pointer;

  @media (max-width: 480px) {
    top: 70px;
    right: 15px;
  }
`
