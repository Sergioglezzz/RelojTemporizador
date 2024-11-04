import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Temporizador({ tiempoInicial }) {
  const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);

  useEffect(() => {
    if (tiempoRestante > 0) {
      const intervalo = setInterval(() => {
        setTiempoRestante(tiempoRestante => tiempoRestante - 1);
      }, 1000); //resta cuenta atras cada segundo

      return () => clearInterval(intervalo); // Limpia el intervalo
    }
  }, [tiempoRestante]);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', width: '300px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Temporizador
        </Typography>
        <Typography variant="h5" color="primary">
          Tiempo restante: {tiempoRestante} segundos
        </Typography>
        {tiempoRestante === 0 && (
          <Typography variant="h6" color="error">
            ¡Tiempo terminado!
          </Typography>
        )}
      </Paper>
    </Box>
  );
}

export default Temporizador;
