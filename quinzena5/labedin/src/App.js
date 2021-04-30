import React from "react";
import "./App.css";
import CardGrande from "./components/CardGrande/CardGrande";
import ImagemButton from "./components/ImagemButton/ImagemButton";
import CardPequeno from "./components/CardPequeno/CardPequeno";
import styled from "styled-components";

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;
`;
const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const ContainerApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

function App() {
  return (
    <ContainerApp>
      <PageSectionContainer>
        <Title>Dados pessoais</Title>
        <CardGrande
          imagem="https://my-portfolio-three-neon.vercel.app/img/eu.png"
          nome="Gremis Alejandra Tovar Tovar"
          descricao="Oi, eu sou Gremis Tovar. Sou Engenheira Civil e actualmente estou fazendo mudança de carreira. Atualmente estou fazendo um curso de Web Front-End com Reactjs na Labenu."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
          imagem="data:image/png;base64,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"
          titulo="Email:"
          descricao=" gremis@correio.com"
        />
        <CardPequeno
          imagem="https://i.pinimg.com/originals/58/76/e3/5876e39c46a64c1b0c12bde91f3c1a31.png"
          titulo="Endereço:"
          descricao="Rua Tenente João Albano Casa 205."
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Experiências profissionais</Title>
        <CardGrande
          imagem="https://my-portfolio-three-neon.vercel.app/img/logometro.png"
          nome="Metrô de Caracas"
          descricao="Inspeção do Projeto da Linha 5 na seção de arrendamento."
        />

        <CardGrande
          imagem="https://my-portfolio-three-neon.vercel.app/img/fcplogo.png"
          nome="FCP Engenheiros Consultores"
          descricao="Encarregada dos projetos de carga estrutural, de vento e de manutenção de torres de telecomunicações."
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Educação</Title>
        <CardGrande
          imagem="https://my-portfolio-three-neon.vercel.app/img/unefa.gif"
          nome="UNEFA"
          descricao="Engenharia Civil. Apure - Venezuela. Setembro 2006 - Julho 2012"
        />

        <CardGrande
          imagem="https://my-portfolio-three-neon.vercel.app/img/labenu.png"
          nome="LABENU"
          descricao="Curso Noturno Web Front-End com Reactjs."
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Minhas redes sociais</Title>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </PageSectionContainer>
    </ContainerApp>
  );
}

export default App;
