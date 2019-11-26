import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon, Table, Image} from 'semantic-ui-react';
import Login from '../Login';


//utils
import { isAuthenticated } from '../../utils/Utils'

//api
//import api from '../../utils/api';
import superagent from 'superagent';


const avatars = [
  "https://react.semantic-ui.com/images/avatar/small/lena.png",
  "https://react.semantic-ui.com/images/avatar/small/matthew.png",
  "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
  "https://react.semantic-ui.com/images/avatar/small/mark.png",
]

const LeaderBoard = () => {

  if(!isAuthenticated()){
    window.location.href="/login";
  };


  var [score, setScore] = useState(localStorage.getItem('score'));
  var [user, setUser] = useState(localStorage.getItem('user'));

  var [users, setUsers] = useState([
    {name: "laura", score: 15},
    {name: "example", score: 15},
    {name: "paul", score: 13},
    {name: "john", score: 10},
    {name: "maria", score: 11},
    {name: user, score}
  ].sort((a, b)=>{
    if(a.score>b.score){
      return -1;
    }else{
      return 1;
    }

  }));
  
  useEffect(()=>{
  

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
              {users.length>0?users.map((usr, index)=>{
                return(
                <Table.Row key={index} style={usr.name === localStorage.getItem('user') ? {backgroundColor: "palegreen"} : null}>
                  <Table.Cell>
                    <Header as='h4' image>
                      <Image src={avatars[Math.floor(Math.random() * avatars.length)]} rounded size='mini' />
                      <Header.Content>
                        {usr.name}
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell>{usr.score}</Table.Cell>
                </Table.Row>);
              }):null}
            </Table.Body>
          </Table>
        
        

    </Container>
  </Container>
  )
}

export default LeaderBoard;
