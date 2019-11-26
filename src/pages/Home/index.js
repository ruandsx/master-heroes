import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Icon} from 'semantic-ui-react';
import HeroCard from '../../components/HeroCard';
import Login from '../Login'

//styles

//api
//import api from '../../utils/api';
import superagent from 'superagent';

// utils
import {cardOptions, isAuthenticated, getCardsNumber} from '../../utils/Utils'


const Home = () => {
  
  if(!isAuthenticated()){
    window.location.href="/login";
  };

  var [heroes, setHeroes] = useState([]);

  var [actualCards, setActualCards] = useState(15);

  var [score, setScore] = useState(0);
    
  useEffect(()=>{
    if(localStorage.length>1 && parseInt(localStorage.getItem('actualCards'))===0){
      window.location.href="/leaderboard";
    }else{
      getHeroes();
    }
    

    document.addEventListener('click', ()=>{
      setScore(localStorage.getItem('score'));
      setActualCards(getCardsNumber());
    })
  },[])
  
   const getHeroes = ()=>{
      superagent.get(`https://www.superheroapi.com/api.php/2634491169970691/search/%20`)
      .then(res => {
        setHeroes(cardOptions(res.body.results));
      })
    }


  return (

  <Container style={{width: "100vw", height: "100vh",}} fluid >

    <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        
        <Grid columns={1}>
          <Header as='h2' icon>
            <Icon style={{marginBottom: "5px"}} name='vnv' />
            <p style={{marginTop: "-20px"}}>Master Heroes</p>
          </Header>
        </Grid>
        
        {heroes !==undefined ? heroes.map((hero, index)=>{
          if(index < localStorage.getItem('numberOfCards'))
          return (
            <HeroCard key={hero.id} id={hero.id} image={hero.image.url} name={hero.name} options={hero.cardOptions} alignment={hero.biography.alignment}/> 
          )
        })
         : null}

         {parseInt(actualCards) <= 0 ? window.location.href="/leaderboard" : null}

    </Container>
  </Container>

  );
}

export default Home;
