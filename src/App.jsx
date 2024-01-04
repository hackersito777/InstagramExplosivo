import React from 'react';
import styled from '@emotion/styled';
import SubscribeForm from './components/SubscribeForm';
import imagenlibro from "./components/imagenlibro.jpg";

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const Header = styled.h1`
  color: #4caf50;
  font-size: 10px;
`;

const IframeContainer = styled.div`
  width: 100%;
  margin-top: auto;
  margin-bottom: auto;
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <h1>
          “EL LIBRO SECRETO DE INSTAGRAM”:
          ESTRATEGIAS PARA LA EXPLOSIÓN EN REDES SOCIALES"
        </h1>

        <img src={imagenlibro} alt="Libro secreto de Instagram"></img>
      </Header>

      <IframeContainer>
        <iframe
          data-aa='2291875'
          src='//ad.a-ads.com/2291875?size=728x90'
          style={{
            width: '100%',
            height: '90px',
            border: '0px',
            padding: '0',
            overflow: 'hidden',
            backgroundColor: 'transparent'
          }}
        ></iframe>
      </IframeContainer>

      <SubscribeForm />
    </AppContainer>
  );
};

export default App;
