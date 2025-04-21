import styled from 'styled-components'

export const Container = styled.header`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: var(--bg);
  border-bottom: var(--border);

  nav a {
    cursor: pointer;
    padding: 0 0.5rem;
    margin: 0 1rem;
    font-size: 1.8rem;
    color: #fff;
    text-decoration: none;

    &:hover {
      color: var(--main-color);
      border-bottom: 0.1rem solid var(--main-color);
      padding-bottom: 0.5rem;
      transition: 0.3s linear;
    }
  }

  img {
    height: 6rem;
    padding: 0 2rem;
  }

  @media (max-width: 480px) {
    img {
      display: none;
    }
  }
`
export const Section = styled.section`
  max-width: 1200px;
  padding: 3rem 2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 50px;
  padding: 1.5rem 0;
  position: relative;
  text-transform: uppercase;

  @media (max-width: 480px) {
    padding: 3rem 1.5rem;
  }
`

export const ButtonMap = styled.a`
  padding: 0 0.5rem;
  margin: 0 1rem;
  font-size: 1.8rem;
  color: #fff;
  text-decoration: none;

  &:hover {
    color: var(--main-color);
    border-bottom: 0.1rem solid var(--main-color);
    padding-bottom: 0.5rem;
    transition: 0.3s linear;
  }
`
