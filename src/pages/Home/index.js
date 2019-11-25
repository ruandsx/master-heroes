import React , { useState, useEffect } from 'react';

//components
import {Container} from 'semantic-ui-react';
import HeroCard from '../../components/HeroCard';

//styles

//api
//import api from '../../utils/api';
import superagent from 'superagent';

// utils
import {cardOptions} from '../../utils/Utils'


const Home = () => {

  var [heroes, setHeroes] = useState([]);

  var [actualCards, setActualCards] = useState(0);

  var [score, setScore] = useState(0);
    
  useEffect(()=>{
    getHeroes();
  }, [])
  
   const getHeroes = ()=>{
    superagent.get(`https://www.superheroapi.com/api.php/2634491169970691/search/%20`)
    .then(res => {
      setHeroes(cardOptions(res.body.results));
    })
  }

  return (
  <Container fluid >

    <Container style={{marginTop: "10px", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        {heroes !==undefined ? heroes.map((hero, index)=>{
          if(index < localStorage.getItem('numberOfCards'))
          return (
            <HeroCard key={hero.id} id={hero.id} image={hero.image.url} name={hero.name} options={hero.cardOptions} alignment={hero.biography.alignment}/> 
          )
        })
         : null}

    </Container>
  </Container>

  );
}

export default Home;
