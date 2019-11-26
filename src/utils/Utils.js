export const cardOptions =  (heroes = []) =>{
  let heroes2 = shuffle(heroes);
  //let toRemove = [];
  heroes2.map((hero, index)=>{
    let options = [
      hero.name,
      heroes[Math.floor(Math.random() * heroes.length)].name,
      heroes[Math.floor(Math.random() * heroes.length)].name
    ];

    hero.cardOptions = shuffle(options);

    //test if image is broken
     //toRemove.push(index);
    //getImageOrFallback(hero.image.url,true)
   
    return null;
  })
  //removeFromArray(toRemove, heroes2)
  const numberOfCards = 15;
  const maxTime = 30;
  localStorage.setItem('heroes', JSON.stringify(heroes2));
  localStorage.setItem('numberOfHeroes', heroes2.length);
  localStorage.setItem('score', 0);
  localStorage.setItem('numberOfCards', numberOfCards);
  localStorage.setItem('actualCards', numberOfCards);
  localStorage.setItem('maxTime', maxTime);

  startTimer(maxTime);

  return heroes2;
}

const shuffle = (array) => {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


const removeFromArray = (indexes, array) => {
  for (let i = 0; i < indexes.length; i++) {
    array.splice(indexes[i])
  }
}


 const getImageOrFallback = (path, fallback) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {};
    img.onerror = () => console.log("ferrou");
};



export const isAuthenticated = () =>{
    return localStorage.getItem('user')!==undefined && localStorage.getItem('user')!==null && localStorage.getItem('user')!=="undefined" && localStorage.getItem('user')!=="null" ? true : false;
}

export const fadeOut = (element) => {
  var op = 1;  // initial opacity
  var timer = setInterval(function () {
      if (op <= 0.1){
          clearInterval(timer);
          element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ")";
      op -= op * 0.1;
  }, 50);
}

export const getCardsNumber = () =>{
  return localStorage.getItem('actualCards');
}

export const logout = () =>{
  localStorage.clear();
  window.location.href="/login";
}

export const startTimer = (maxTime) =>{
  let time = 0;
  
  setInterval(() =>{
    localStorage.setItem('time', time);
    time++;

    /*if(time>=maxTime){
      localStorage.setItem('actualCards', 0);
      return;
    }*/

    if(localStorage.getItem('actualCards') == 0){
      return;
    }

  }, 1000)

}
