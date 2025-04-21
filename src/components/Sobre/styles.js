import styled from 'styled-components'

export const Title = styled.h2`
  text-align: center;
  color: #fff;
  text-transform: uppercase;
  padding-bottom: 3.5rem;
  font-size: 4rem;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    font-size: 4rem;
  }
`

export const TitleSpan = styled.span`
  color: var(--main-color);
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: var(--black);
  gap: 1.5rem;
  flex-wrap: wrap;
`

export const ContainerImage = styled.div`
  flex: 1 1 45rem;
  //flex-grow: ;  tanto que o item vai crescer conforme a tela for maior
  //flex-shrink: ;  tanto que o item vai diminuir conforme a tela for menor
  //flex-basis: ;  determinar o tamanho base do nosso item

  img {
    width: 100%;
  }
`

export const TextContainer = styled.div`
  flex: 1 1 45rem;
  padding: 2rem;

  h3 {
    font-size: 3rem;
    color: #fff;
    text-transform: uppercase;
  }

  p {
    font-size: 1.5rem;
    font-weight: lighter;
    color: #fff;
    line-height: 1.8;
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    font-size: 4rem;

    p {
      font-size: 2.5rem;
    }
  }
`
