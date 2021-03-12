import React from 'react';
import {Button, TextField, Switch} from "@material-ui/core"

function FormularioCadastro(){
  return(
  <form>
    <TextField
      id="nome"
      label="Nome"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <TextField
      id="sobrenome"
      label="Sobrenome"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <TextField
      id="cpf"
      label="CPF"
      variant="outlined"
      margin="normal"
      fullWidth
    />

    <Switch
      name="promocoes"
      defaultChecked
      color="primary"
    />
    
    <label>Promoções</label>
    <input type="checkbox"/>

    <label>Novidades</label>
    <input type="checkbox"/>

    <Button type="submit" variant="contained" color="primary">Cadastar</Button>
  </form>
  );
}

export default FormularioCadastro;
