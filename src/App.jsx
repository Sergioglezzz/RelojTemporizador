import React from 'react';
import Temporizador from './components/Temporizador';
import Reloj from './components/Reloj';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" gap={7} sx={{
        background: 'linear-gradient(to bottom, #333, #5551)',
        color: '#fff',
        padding: 2,
        margin: 0,
      }}>
        <Temporizador tiempoInicial={60} />
        <Reloj />
      </Box >
    </>
  );
}

export default App;
