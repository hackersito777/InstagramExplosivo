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



const App = () => {
  return (
    <AppContainer>

<Helmet>
<meta name="google-site-verification" content="2wQWfSchpSKalRRU_JVRc2yRioXvfiULnjgj3PM5fRM" />
        {/* Reemplaza "TU_CÓDIGO_DE_VERIFICACIÓN" con el código proporcionado por Google Console */}
      </Helmet>

      <Header>
      
      
<h1>
“EL LIBRO SECRETO DE INSTAGRAM”:
ESTRATEGIAS PARA LA EXPLOSIÓN EN REDES SOCIALES"
</h1>

<img src={imagenlibro}></img>

</Header>
      
      <SubscribeForm />
    </AppContainer>
  );
};

export default App;
