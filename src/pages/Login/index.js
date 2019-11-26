import React from 'react';

//components
import {Container, Grid, Segment, Header, Icon} from 'semantic-ui-react';
import LoginCard from '../../components/LoginCard';

//styles

// utils
import {isAuthenticated} from '../../utils/Utils';


const Login = () => {

  if(isAuthenticated()){
    window.location.replace("/");
  };


  return (
  <Container style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', width: "100vw", height: "100vh", backgroundRepeat: "round", backgroundImage: "url(https://wallpaperplay.com/walls/full/b/e/c/126266.jpg)"}} fluid>

    <Container style={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center'}}>
      
      <Segment style={{paddingTop: "0px", height: "400px", display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
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
      </Segment>
    </Container>
  </Container>

  );
}

export default Login;
