import React , { useState, useEffect } from 'react';

//components
import {Container, Grid} from 'semantic-ui-react';
import HeroCard from '../../components/HeroCard';

//styles

//api
import api from '../../utils/api';
import superagent from 'superagent';

// utils
import {cardOptions} from '../../utils/Utils'


const Home = () => {

  var [heroes, setHeroes] = useState([]);
    
  useEffect(()=>{
    getHeroes();
  }, [])
  
  async function getHeroes(){
    superagent.get(`https://www.superheroapi.com/api.php/2634491169970691/search/a`)
    .then(res => {
      setHeroes(cardOptions(res.body.results));
    })
  }

  return (
  <Container fluid >

    <Container 
     >
      <Grid style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} columns={4}>
        {heroes !==undefined ? heroes.map((hero, index)=>{
          return (
          <Grid.Column key={index}> 
            <HeroCard key={hero.id} image={hero.image.url} name={hero.name} options={hero.cardOptions} alignment={hero.biography.alignment}/> 
          </Grid.Column>
          )
        }) : null}
      </Grid>
    </Container>
  </Container>

  );
}

export default Home;
