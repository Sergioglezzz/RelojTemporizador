import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper } from '@mui/material';

function Reloj() {
  const [horaActual, setHoraActual] = useState(new Date()); //pasa hora como parametro inicial

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHoraActual(new Date());
    }, 1000); // actualiza la hora cada segundo

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Paper elevation={3} sx={{ padding: '20px', textAlign: 'center', width: '300px' }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Hora actual
        </Typography>
        <Typography variant="h5" color="primary">
          {horaActual.toLocaleTimeString()}
        </Typography>
      </Paper>
    </Box>
  );
}

export default Reloj;
