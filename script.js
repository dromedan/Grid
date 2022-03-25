

const bleep = document.getElementById('audio');
const upArrow = document.getElementById('up');
const downArrow = document.getElementById('down');
const leftArrow = document.getElementById('left');
const rightArrow = document.getElementById('right');
const personPath = 'http://127.0.0.1:5500/Grid/maze%20images/person.png';
const blankPath = 'http://127.0.0.1:5500/Grid/maze%20images/blank.png';
const orbPath = 'http://127.0.0.1:5500/Grid/maze%20images/orb.png';
const monsterPath = 'http://127.0.0.1:5500/Grid/maze%20images/monster.png';
let currentTarget = 89;
let borderNumbers = [1,2,3,4,5,6,7,8,9,10,20,30,40,50,60,70,80,90,100,99,98,97,96,95,94,93,92,91,81,71,61,51,41,31,21,11];
let orbNumber = 0;
let score = 0;
let monsterTarget = 82; 

console.log('2')




// creates object to collect

const orbs = () => {
    let randomNumber = Math.floor((Math.random() * 100)+1);
    while (randomNumber === currentTarget || borderNumbers.includes(randomNumber)){
        randomNumber = Math.floor((Math.random() * 100)+1);
    }
    document.getElementById(randomNumber).src = orbPath;
    orbNumber = randomNumber;

}



// removes object and iterates score

const eatOrbs = () =>{
    if(currentTarget === orbNumber ){
        score += 1;
        document.getElementById('score').innerHTML = score;
        bleep.play();
        orbs();
    }
}

const showMonster = (location) => {
    document.getElementById(location).src = monsterPath;
}

const showPerson = (location) =>{
    document.getElementById(location).src = personPath;
}

const makeBlank = (location) =>{
    document.getElementById(location).src = blankPath;
}

showPerson(currentTarget);
//showMonster(monsterTarget);
orbs();

// WIP adding an adversary for more of a challenge
/*
monsterMove = () =>{
    let up = -10;
    let down = 10;
    let left = -1;
    let right = 1;

    let moveNumber = monsterTarget - currentTarget;

    if(moveNumber <= 10 && moveNumber > 3 && document.getElementById(monsterTarget + 10).src === blankPath ) {
        monsterTarget += 10;
        makeBlank(monsterTarget -10);
        showMonster(monsterTarget);
    } else if(moveNumber >= 10 && document.getElementById(monsterTarget - 10).src === blankPath) {
        monsterTarget -=10;
        makeBlank(monsterTarget +10);
        showMonster(monsterTarget);
    } else if(moveNumber < 10 && document.getElementById(monsterTarget - 1).src === blankPath) {
        monsterTarget -=1;
        makeBlank(monsterTarget +1);
        showMonster(monsterTarget);
    }  else if(moveNumber >= 3 && moveNumber < 10 && document.getElementById(monsterTarget + 1).src === blankPath) {
        monsterTarget +=1;
        makeBlank(monsterTarget -1);
        showMonster(monsterTarget);
    }   else if(moveNumber < 3 && document.getElementById(monsterTarget + 1).src === blankPath) {
        monsterTarget +=1;
        makeBlank(monsterTarget -1);
        showMonster(monsterTarget);
    }
}
*/


rightArrow.onclick = () =>{
    if(document.getElementById(currentTarget + 1).src === blankPath || document.getElementById(currentTarget + 1).src === orbPath){
        currentTarget += 1;
        makeBlank(currentTarget -1);
        //monsterMove();
        showPerson(currentTarget);
        eatOrbs();
 
    } 
}

leftArrow.onclick = () =>{
    if(document.getElementById(currentTarget - 1).src === blankPath || document.getElementById(currentTarget - 1).src === orbPath){
        currentTarget -= 1;
        makeBlank(currentTarget +1);
        //monsterMove();
        showPerson(currentTarget);
        eatOrbs();
     
    } 
}
upArrow.onclick = () =>{
    if(document.getElementById(currentTarget - 10).src === blankPath || document.getElementById(currentTarget - 10).src === orbPath){
        currentTarget -= 10;
        makeBlank(currentTarget +10);
        //monsterMove();
        showPerson(currentTarget);
        eatOrbs();
    
    } 
}
downArrow.onclick = () =>{
    if(document.getElementById(currentTarget + 10).src === blankPath || document.getElementById(currentTarget + 10).src === orbPath){
        currentTarget += 10;
        makeBlank(currentTarget -10);
        //monsterMove();
        showPerson(currentTarget);
        eatOrbs();
    } 
}


