import React, { forwardRef } from 'react';
import { TextField } from '@mui/material';

const Input = forwardRef(({ref, props} :any)=> {
  return (
    <TextField
      variant="outlined"
      margin="normal"
      inputRef={ref}
      fullWidth
      {...props}
    /> 
  );
})

export default Input;
