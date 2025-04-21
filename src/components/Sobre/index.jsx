import Img from '../../assets/about-img.jpg'
import { LinkButton } from '../../Containers/Home/styles';
import { Container, ContainerImage, TextContainer, Title, TitleSpan } from './styles';

function Sobre() {
  return (
      <section id='sobre'>
        <Title><TitleSpan>Sobre </TitleSpan>Nós</Title>
        <Container>
          <ContainerImage>
            <img src={Img} alt="" />
          </ContainerImage>

          <TextContainer>
            <h3>O que faz o nosso café</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias dolore, inventore explicabo ipsam, earum nemo qui dolorem perspiciatis reiciendis dolor cum. Sed nihil cupiditate eum pariatur accusamus, et praesentium obcaecati!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores cumque at voluptas assumenda dolorem sapiente laudantium id molestiae! Praesentium harum dolorem omnis eaque fuga ullam, modi doloribus officiis doloremque dolorum.
            </p>
            <LinkButton>Saiba mais</LinkButton>
          </TextContainer>
        </Container>
      </section>
  );
}

export default Sobre;
