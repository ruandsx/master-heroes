import React, { useState } from 'react'
import { Card, Input, Button, Icon } from 'semantic-ui-react'

const LoginCard = (props) => {


  const login = (name) =>{
    if(name === ""){
      alert("please fill the user field");
      return;
    }
    localStorage.setItem('user', name);
    window.location.replace("/");
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