import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon} from 'semantic-ui-react';
import LoginCard from '../../components/LoginCard';

//styles

// utils
import {isLogged} from '../../utils/Utils'


const Login = () => {


  return (
  <Container fluid >

    <Container style={{marginTop: "40px", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
      <Grid columns={1}>
        <Header as='h2' icon>
          <Icon name='vnv' />
          Welcome to Master Heroes
          <Header.Subheader>
            Here you can play and learn about the heroes universe
          </Header.Subheader>
        </Header>
      </Grid>

      <Grid columns={1}>
        <LoginCard /> 
      </Grid>

    </Container>
  </Container>

  );
}

export default Login;
