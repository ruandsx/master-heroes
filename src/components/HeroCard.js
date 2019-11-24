import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const HeroCard = (props) => {


  const chooseOption = (option) =>{
    if(option === props.name){
      alert("Acertou");
    }else{
      alert("Errou");
    }
  }

  return(
  <Card style={{height: "500px"}}>
    <Image fluid src={props.image} style={{maxHeight: "300px"}}/>
    <Card.Content>
      <Card.Header>Who is this character?</Card.Header>
      <Card.Meta>
        <span className='date'>{props.alignment}</span>
      </Card.Meta>
      <Card.Description>

        {props.options!==undefined?props.options.map((option)=>{
        return <Button onClick={()=>chooseOption(option)} fluid style={{marginTop: "5px"}}>{option}</Button>
        }):null}
      
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default HeroCard