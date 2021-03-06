import React, { useState } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

//utils
import { fadeOut } from '../utils/Utils'

const HeroCard = (props) => {

  const chooseOption = (option) =>{

    let score = parseInt(localStorage.getItem('score'));
    let actualCards = parseInt(localStorage.getItem('actualCards'));

    let correct = false;

    if(option === props.name){
      correct = true;
      localStorage.setItem('score', score+20);
    }else{
      correct = false;
    }

    var cards = document.querySelectorAll(".ui.card");
    for(let i=0; i<cards.length; i++){
      if(cards[i].id === props.id){

        cards[i].style.backgroundColor=`${correct?'green':'red'}`;

        //fadeOut and delete card from DOM

        const div = document.querySelector("#root");
        div.style.pointerEvents= "none";

        setTimeout(fadeOut(cards[i]), 500)
        setTimeout(()=>cards[i].parentNode.removeChild(cards[i]), 1000);
        setTimeout(()=>div.style.pointerEvents= "all", 1000);
      }
    }

    localStorage.setItem('actualCards', --actualCards);

  }

  var [image, setImage] = useState(props.image);

  const imageError = () =>{
    setImage("https://cdn1.iconfinder.com/data/icons/modifiers-add-on-1-1/48/Sed-24-512.png");
  }

  return(
  <Card id={props.id} style={{position: "absolute", top: 100, margin: 0, height: "520px", textAlign: "center"}}>
    <Image fluid src={image} onError={imageError} style={{height: "300px"}}/>
    <Card.Content>
      <Card.Header>Who is this character?</Card.Header>

      <Card.Description style={{marginTop: "15px"}}>

        {props.options!==undefined?props.options.map((option, index)=>{
        return <Button key={index} onClick={()=>chooseOption(option)} fluid style={{marginTop: "5px"}}>{option}</Button>
        }):null}
      
      </Card.Description>
    </Card.Content>
  </Card>
  )
}

export default HeroCard;