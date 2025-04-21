import { useState } from 'react'
import Video from '../../assets/video.mp4'
import Header from '../../components/Header'
import Modal from '../../components/Modal'
import Sobre from '../../components/Sobre'

import { Background, Container, Content, LinkButton, Mask } from "./styles"

function Home() {
    const [openModal, setOpenModal] = useState(false)

    return (
        <>
        <Background>
            <video src={Video} loop autoPlay muted ></video>
            <Mask></Mask>
        </Background>
        <Header openModal={openModal} setOpenModal={setOpenModal} />
        <Container id='/'>
            <Content>
                <h3>Code com o melhor café da região</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, ipsum quo modi officiis fugit placeat sint expedita nulla accusamus aut mollitia tenetur molestiae nobis quam, repellendus odio officia sunt facere!</p>
                <LinkButton href="">Pegue o seu agora</LinkButton>
            </Content>
        </Container>
        <Sobre/>
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
        </>
    )
}

export default Home