import Logo from "../../assets/logo.png";
import { ButtonMap, Container, Section } from "./styles";
import { Link } from "react-scroll";

function Header({ openModal, setOpenModal }) {
  return (
      <Container>
        <Section>
        <a>
          <img src={Logo} alt="logo-coffee" />
        </a>
        <nav>
            <Link to="/" duration={500} smooth>Home</Link>
            <Link to="sobre" duration={500} smooth>Sobre</Link>
            <ButtonMap onClick={() => setOpenModal(!openModal)}>Endereço</ButtonMap>
        </nav>
        </Section>
      </Container>
  );
}

export default Header;
