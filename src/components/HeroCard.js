import React, { useState } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

const HeroCard = (props) => {


  const chooseOption = (option) =>{

    let score = localStorage.getItem('score');
    let actualCards = localStorage.getItem('actualCards');


    if(option === props.name){
      alert("Acertou");
      localStorage.setItem('score', ++score);
    }else{
      alert("Errou");
    }

    var cards = document.querySelectorAll(".ui.card");
    for(let i=0; i<cards.length; i++){
      if(cards[i].id == props.id){
        cards[i].parentNode.removeChild(cards[i]);
      }
    }

    localStorage.setItem('actualCards', --actualCards);

   
  }

  var [image, setImage] = useState(props.image);

  const imageError = () =>{
    setImage("https://cdn1.iconfinder.com/data/icons/modifiers-add-on-1-1/48/Sed-24-512.png");
  }

  return(
  <Card id={props.id} style={{position: "absolute", top: 0, height: "500px"}}>
    <Image fluid src={image} onError={imageError} style={{height: "300px"}}/>
    <Card.Content>
      <Card.Header>Who is this character?</Card.Header>
      <Card.Meta>
        <span className='date'>{props.alignment}</span>
      </Card.Meta>
      <Card.Description>

        {props.options!==undefined?props.options.map((option, index)=>{
        return <Button key={index} onClick={()=>chooseOption(option)} fluid style={{marginTop: "5px"}}>{option}</Button>
        }):null}
      
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default HeroCard