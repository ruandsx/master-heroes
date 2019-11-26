import React , { useState, useEffect } from 'react';

//components
import {Container, Grid, Header, Button, Segment, Icon, Loader} from 'semantic-ui-react';
import HeroCard from '../../components/HeroCard';

//styles

//services
//import api from '../../services/api';
import superagent from 'superagent';
import {db} from '../../services/firebase'

// utils
import {cardOptions, isAuthenticated, getCardsNumber, logout} from '../../utils/Utils'


const Home = () => {
  
  if(!isAuthenticated()){
    window.location.href="/login";
  };

  var [heroes, setHeroes] = useState([]);

  var [actualCards, setActualCards] = useState(15);

  var [time, setTime] = useState(0);



  useEffect(()=>{
    if(localStorage.length>1 && parseInt(localStorage.getItem('actualCards'))===0){
      window.location.replace("/leaderboard");
    }else{
      getHeroes();
    }
    
    setInterval(() =>{
      setTime(parseInt(localStorage.getItem('time')));

       /* if(time>=localStorage.getItem('maxTime')){
            localStorage.setItem('actualCards', 0);
            setActualCards(0);
            window.location.replace("/leaderboard");
          } 
        */
    }, 1000)

    document.addEventListener('click', ()=>{
      setActualCards(getCardsNumber());
    })
  },[])
  
   const getHeroes = ()=>{
      superagent.get(`https://www.superheroapi.com/api.php/2634491169970691/search/%20`)
      .then(res => {
        setHeroes(cardOptions(res.body.results));
      })
    }

    const over = ()=>{
      db.ref('users/'+localStorage.getItem('user')).set({
        score: parseInt(localStorage.getItem('score')),
        percentage: ((parseInt(localStorage.getItem('score'))/20)/parseInt(localStorage.getItem('numberOfCards'))*100).toFixed(2),
        time,
        name: localStorage.getItem('user')
      })
      window.location.replace("/leaderboard");
    }


  return (

  <Container style={{width: "100vw", height: "100vh", backgroundRepeat: "round", backgroundImage: "url(https://wallpaperplay.com/walls/full/e/4/5/126269.jpg)"}} fluid >
      <Container style={{display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>
        
      <Segment style={{width: "290px", display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center'}}>

          <Grid columns={1}>
            <Header as='h2' icon>
              <Icon style={{marginTop: "-15px", marginBottom: "5px"}} name='vnv' />
              <p style={{marginTop: "-20px"}}>Master Heroes</p>
            </Header>
          </Grid>
          
          {heroes !==undefined ? heroes.map((hero, index)=>{
            if(index < localStorage.getItem('numberOfCards'))
            return (
              <HeroCard key={hero.id} id={hero.id} image={hero.image.url} name={hero.name} options={hero.cardOptions} alignment={hero.biography.alignment}/> 
            )
          })
          : <Loader inline='centered' />}

          {parseInt(actualCards) <= 0 ?  over() : null}

        <p style={{marginTop: "-4px"}}>{time > 0 ? parseInt(time/60)+':'+time%60 : null}</p>


        <Button color='blue' style={{position: "absolute", left: 150, top: 580, margin: 0}} onClick={()=>window.location.replace("/leaderboard")} animated='fade'>
          <Button.Content visible>LeaderBoard</Button.Content>
          <Button.Content hidden><Icon name='numbered list'/></Button.Content>
        </Button>
        <Button color='red' style={{position: "absolute", left: 40, top: 580, margin: 0}} onClick={()=>logout()} animated='fade'>
          <Button.Content visible>Exit</Button.Content>
          <Button.Content hidden><Icon name='sign-out'/></Button.Content>
        </Button>


        </Segment>
      </Container>
  </Container>

  );
}

export default Home;
