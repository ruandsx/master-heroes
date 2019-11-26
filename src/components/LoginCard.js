import React, { useState } from 'react'
import { Card, Input, Button, Icon } from 'semantic-ui-react'

import {db} from '../services/firebase';


const LoginCard = (props) => {


  const login = (name) =>{
    
    if(name === ""){
      alert("please fill the username field");
      return;
    }else{

      let verified = 0;

      db.ref(`users`).orderByChild('name').equalTo(name).on("value", function(snapshot) {
        console.log(snapshot.val());
        if(verified === 0 && snapshot.val()!==null){
            alert(`user ${name} already exists on database \n logging and going to leaderboard...`);
            localStorage.setItem('actualCards', 0);
            localStorage.setItem('user', name);
            window.location.replace("/leaderboard");
            return;
        }else{
          console.log("n existe");
          verified = 1;
            db.ref('users/'+name).set({
              score: 0,
              percentage: 0,
              time: 0,
              name: name
            })
            localStorage.setItem('user', name);
            window.location.replace("/");
            return;
        }
      });
      

    }

  }

  var [user, setUser] = useState('');


  return(
  <Card id={props.id} style={{height: "200px", textAlign: "center", }}>
    <Card.Content>
      <Card.Header>Sign in</Card.Header>
      <Card.Description style={{marginTop: "4vh"}} >
        <Input iconPosition='left' placeholder='username'>
          <Icon name='at' />
          <input onChange={()=>setUser(document.querySelector("input").value)} />
        </Input>

        <Button color='green' animated style={{marginTop: "4vh"}} onClick={()=>login(user)} >
          <Button.Content visible>Play</Button.Content>
          <Button.Content hidden>
            <Icon name='play' />
          </Button.Content>
        </Button>

      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default LoginCard