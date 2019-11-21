import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import validator from 'validator';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
    display: 'block'
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const LoginForm = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  

  const handleSubmit = (e) => {
      e.preventDefault();
      validator.isEmail(email) ? localStorage.setItem('user', email) : alert("E-mail inválido"); 
      password === "" ? alert("Digite sua senha") : console.log(password) 
      password !== "" && validator.isEmail(email) ? props.history.push("/home") : null  
    }   


  
  return (
    <form className={classes.container} onSubmit={handleSubmit} autoComplete="off">
      <div>
        
        <TextField
            id="standard-read-only-input"
            label="E-mail"
            className={classes.textField}
            margin="normal"
            value={email}
            onChange={e => setEmail(e.target.value)}
            variant="outlined"
        />     

        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          value={password}
          onChange={e => setPassword(e.target.value)}
          variant="outlined"
        />

        <Button onClick={handleSubmit} variant="contained" color="primary" className={classes.button}>
            Acessar
        </Button>
       
      </div>
    </form>
  );
}

export default LoginForm;