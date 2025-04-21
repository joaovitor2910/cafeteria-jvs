import { Title, TitleSpan } from "../Sobre/styles";
import { CloseModal, MaskModal } from "./styles";
import { Container } from "./styles";


function Modal({ openModal, setOpenModal }) {
  
  return (
    <>
    <Container $openModal={openModal}>
      <Title>
        Nosso<TitleSpan> Endereço</TitleSpan>
      </Title>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29634.604907090565!2d-49.63003207930574!3d-21.806346627697355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94be467589002709%3A0x54c03e662abc324e!2sCafel%C3%A2ndia%2C%20SP%2C%2016500-000!5e0!3m2!1spt-BR!2sbr!4v1745161209042!5m2!1spt-BR!2sbr"
        width={600}
        height={450}
        style={{border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Container>
    <MaskModal $openModal={openModal} onClick={() => setOpenModal(false)}>
    <CloseModal>x</CloseModal>
    </MaskModal>
    </>
  );
}

export default Modal;
