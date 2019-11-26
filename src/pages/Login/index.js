import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon} from 'semantic-ui-react';
import LoginCard from '../../components/LoginCard';

//styles

// utils
import {isAuthenticated} from '../../utils/Utils';


const Login = () => {

  if(isAuthenticated()){
    window.location.href="/";
  };


  return (
  <Container fluid >

    <Container style={{marginTop: "40px", display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
      <Grid columns={1}>
        <Header as='h2' icon>
          <Icon style={{marginBottom: "5px"}} name='vnv' />
            <p style={{marginTop: "-20px"}}>Welcome to Master Heroes</p>
          <Header.Subheader>
            Here you can play and learn more about heroes
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
