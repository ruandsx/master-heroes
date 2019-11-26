import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon, Table, Image} from 'semantic-ui-react';
import Login from '../Login';


//utils
import { isAuthenticated } from '../../utils/Utils'

//api
//import api from '../../utils/api';
import superagent from 'superagent';


const LeaderBoard = () => {

  if(!isAuthenticated()){
    window.location.href="/login";
  };


  var [score, setScore] = useState(localStorage.getItem('score'));
  
  useEffect(()=>{

    document.addEventListener('load', ()=>{
      setScore(localStorage.getItem('score'));
    })
  },[])



  return (


  <Container style={{width: "100vw", height: "100vh",}} fluid >

    <Container style={{display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
        
        <Grid columns={1}>
          <Header as='h2' icon>
            <Icon style={{marginBottom: "5px"}} name='vnv' />
            <p style={{marginTop: "-20px"}}>Master Heroes</p>
            <Header.Subheader>
              Here's your position in global leaderboard
            </Header.Subheader>
          </Header>
        </Grid>

          <Table style={{marginTop: "100px"}} basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
                    <Header.Content>
                      Lena
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>22</Table.Cell>
              </Table.Row>
             
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/matthew.png' rounded size='mini' />
                    <Header.Content>
                      Matthew
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>15</Table.Cell>
              </Table.Row>
              
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/lindsay.png' rounded size='mini' />
                    <Header.Content>
                      Lindsay
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>12</Table.Cell>
              </Table.Row>
              
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://react.semantic-ui.com/images/avatar/small/mark.png' rounded size='mini' />
                    <Header.Content>
                      Mark
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>11</Table.Cell>
              
              </Table.Row>
            </Table.Body>
          </Table>
        
        

    </Container>
  </Container>
  )
}

export default LeaderBoard;
