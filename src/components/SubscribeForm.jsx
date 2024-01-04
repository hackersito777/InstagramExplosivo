import React, { useState } from 'react';
import styled from '@emotion/styled';

const FormContainer = styled.div`
  background-color: #121212;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  text-align: center;
  max-width: 400px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async () => {
    try {
      const response = await fetch('https://formspree.io/f/mdoqooqd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log('Suscrito con éxito');
        setEmail('');
      } else {
        console.error('Error al suscribirse');
      }
    } catch (error) {
      console.error('Error al enviar la solicitud', error);
    }
  };

  return (
    <FormContainer>
      <h2 style={{ color: '#4caf50' }}>¿A Que Correo Te Enviamos El Ebook?</h2>
      <Input
        type="email"
        placeholder="Tu correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubscribe}>Suscribirse</Button>
      
    </FormContainer>
  );
};

export default SubscribeForm;
