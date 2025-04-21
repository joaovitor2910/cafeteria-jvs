import styled from 'styled-components'

export const Background = styled.div`
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;

  video {
    position: fixed;
    top: 0;
    min-width: 100%;
    min-height: 100%;
  }
`

export const Mask = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background: linear-gradient(
    109deg,
    rgba(10, 12, 16, 0.99) 15%,
    rgba(10, 12, 16, 0.7) 50%,
    rgba(10, 12, 16, 0.99) 85%
  );
`

export const Container = styled.section`
  min-height: 100vh;
  align-items: center;
  display: flex;
`

export const Content = styled.div`
  max-width: 60rem;

  h3 {
    color: #fff;
    font-size: 6rem;
    text-transform: uppercase;
  }

  p {
    font-size: 2rem;
    color: #fff;
    font-weight: lighter;
    padding: 1rem 0;
    line-height: 1.8;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 4rem;
    }

    p {
      font-size: 2.5rem;
    }
  }
`

export const LinkButton = styled.a`
  background-color: var(--main-color);
  cursor: pointer;
  margin-top: 2rem;
  display: inline-block;
  color: #fff;
  font-size: 1.7rem;
  padding: 1rem 3rem;
  border: none;
  border-radius: 6px;
  transition: 0.3s ease;

  &:hover {
    letter-spacing: 0.1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 5rem;
    font-size: 2rem;
  }
`
