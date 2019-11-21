import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

const Home = (props) => {
    let userLogedIn = `Bem vindo,`
    const noUser = `Você precisa logar para ter acesso`
    const classes = useStyles();  

    const handleClick = (e) => {
        e.preventDefault();
        props.location.state = undefined

        props.history.push("/")
    }
        
    return (
        <div>
            <h1>{props.location.state === undefined ? noUser : `${userLogedIn} ${ props.location.state.email}` }</h1>
            
            <Button onClick={handleClick} color="secondary" className={classes.button}>
            {props.location.state === undefined ? 'Login' : 'Logout'}
          </Button>
        </div>
    )
}

export default Home;