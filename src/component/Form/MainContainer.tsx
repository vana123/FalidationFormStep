import React from 'react';
import { Container } from '@mui/material'

function MainContainer({ children, ...prop}: any) {
  return (
    <Container maxWidth='xs' {...prop} >
        {children}
    </Container>
  );
}

export default MainContainer;
