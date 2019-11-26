import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon, Table, Image, Button, Segment} from 'semantic-ui-react';


//utils
import { isAuthenticated, logout } from '../../utils/Utils'

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
    window.location.replace("/login");
    ;
  };


  var [score, setScore] = useState(localStorage.getItem('score'));
  var [user, setUser] = useState(localStorage.getItem('user'));
  var [time, setTime] = useState(localStorage.getItem('time'));


  var [users, setUsers] = useState([
    {name: "laura", score: 13, time: 61},
    {name: "example", score: 15, time: 80},
    {name: "paul", score: 11, time: 74},
    {name: "john", score: 14, time: 53},
    {name: "maria", score: 12, time: 32},
    {name: user, score, time}
  ].sort((a, b)=>{
    if(a.score>b.score){
      return -1;
    }else if (a.score<b.score){
      return 1;
    }else{
      if(a.time<b.time){
        return -1;
      }else{
        return 1;
      }
    }

  }));
  
  useEffect(()=>{
  
  },[])

  
  return (
  <Container style={{width: "100vw", height: "100vh", backgroundSize: "cover", backgroundImage: "url(https://cdn.wallpapersafari.com/63/57/BJsXmf.gif?fbclid=IwAR2w5mPFrCItpA0e6jdksHiiI77B6vRoKb5vD91w9oC9XxZgmM_3Kv0SJFs)"}} fluid >

    <Container style={{display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
        
        <Segment style={{display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
            <Grid columns={1}>
              <Header as='h2' icon>
                <Icon style={{marginBottom: "5px"}} name='vnv' />
                <p style={{marginTop: "-20px"}}>Master Heroes</p>
                <Header.Subheader>
                  Here's your position in <t style={{textDecoration: "line-through"}}>global</t> <strong>multiverse</strong> leaderboard
                </Header.Subheader>
              </Header>
            </Grid>

              

              <Table style={{marginTop: "70px"}} basic='very' celled collapsing>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Username</Table.HeaderCell>
                    <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                    <Table.HeaderCell>Time Spent</Table.HeaderCell>
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
                      <Table.Cell>{parseInt(usr.time/60)}m {usr.time%60}s</Table.Cell>
                    </Table.Row>);
                  }):null}
                </Table.Body>
              </Table>
            
          <Button color='red' onClick={()=>logout()} animated='fade'>
            <Button.Content visible>Exit</Button.Content>
            <Button.Content hidden><Icon name='sign-out'/></Button.Content>
          </Button>
      </Segment>

    </Container>
  </Container>
  )
}

export default LeaderBoard;
