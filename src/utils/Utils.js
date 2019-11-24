export const cardOptions = (heroes = []) =>{
  let heroes2 = shuffle(heroes);
  heroes2.map((hero, index)=>{
    let options = [
      hero.name,
      heroes[Math.floor(Math.random() * heroes.length)].name,
      heroes[Math.floor(Math.random() * heroes.length)].name
    ];

    hero.cardOptions = shuffle(options);
    
  })

  return heroes2;
}

function shuffle(array) {
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