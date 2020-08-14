import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon, Table, Image, Button, Segment, Loader} from 'semantic-ui-react';

//utils
import { logout } from '../../utils/Utils'

//services
import {db} from '../../services/firebase';

const specialImage = "https://www.industriamovies.com/wp-content/uploads/2017/09/thanos.png";
const avatars = [
  "https://react.semantic-ui.com/images/avatar/small/lena.png",
  "https://react.semantic-ui.com/images/avatar/small/matthew.png",
  "https://react.semantic-ui.com/images/avatar/small/lindsay.png",
  "https://react.semantic-ui.com/images/avatar/small/mark.png",
]

const LeaderBoard = () => {

  var [users, setUsers] = useState([]);
  
  useEffect(()=>{
    
    db.ref('users').orderByChild('name').on("value", function(snapshot) {
      const leaderboard = [];
      snapshot.forEach(function(data) {
          leaderboard.push(data.val());
      });

      setUsers(leaderboard.sort((a, b)=>{
        
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
    
      })
    );
  });

  },[])

  
  return (
  <Container style={{width: "100vw", minHeight:"100vh", backgroundSize: "cover", backgroundImage: "url(https://cdn.wallpapersafari.com/63/57/BJsXmf.gif?fbclid=IwAR2w5mPFrCItpA0e6jdksHiiI77B6vRoKb5vD91w9oC9XxZgmM_3Kv0SJFs)"}} fluid >

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
                    <Table.HeaderCell>Final Score</Table.HeaderCell>
                    <Table.HeaderCell>Time Spent</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>


                <Table.Body>
                  {users.length>0?users.map((usr, index)=>{
                    return(
                    <Table.Row key={index} id={usr.name === localStorage.getItem('user') ? 'actual-score' : 'score-row'} style={usr.name === localStorage.getItem('user') ? {backgroundColor: "palegreen"} : null}>
                      <Table.Cell>
                        <Header as='h4' image>
                          <Image src={usr.name === "thanos" ? specialImage : avatars[Math.floor(Math.random() * avatars.length)]} rounded size='mini' />
                          <Header.Content>
                            {usr.name}
                          </Header.Content>
                        </Header>
                      </Table.Cell>
                      <Table.Cell>{usr.percentage}%</Table.Cell>
                      <Table.Cell>{usr.score}</Table.Cell>
                      <Table.Cell>{ parseInt(usr.time/60)>0? parseInt(usr.time/60)+'m' : null} {usr.time%60}s</Table.Cell>
                    </Table.Row>);
                  }):<div style={{display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}><Loader inline='centered' /></div>}
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
