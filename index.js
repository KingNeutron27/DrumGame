let numberOfDrums = document.querySelectorAll('.drum')

for (let i = 0; i < numberOfDrums.length; i++) {
  numberOfDrums[i].addEventListener('click', function () {
   
    let buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  })
  
};

document.addEventListener('keypress', function (event) {
  makeSound(event.key)
  buttonAmination (event.key)
});


function makeSound(key) {
  
  switch (key) {
    case 'w': let tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play()
    break;

    case 'a': let tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play()
    break;

    case 's': let tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play()
    break;

    case 'd': let tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play()
    break;
   
    case 'j': let snare = new Audio('sounds/snare.mp3');
      snare.play()
    break;

    case 'k': let kick = new Audio('sounds/kick-bass.mp3');
      kick.play()
    break;

    case 'l': let crash = new Audio('sounds/crash.mp3');
      crash.play()
    break;

    default: console.log(buttonInnerHTML);
      break;
  }
}

 function buttonAmination (currentKey) {
  let activedKey = document.querySelector('.' + currentKey);
  activedKey.classList.add('pressed');

  setTimeout (function () {
    activedKey.classList.remove('pressed')
  }, 100)
 }

 
 const names = ['Angela', 'Ben', 'Jinny','Chloe', 'Michael'];
 
 function whosPaying () {
   let numberOfPeople = names.length;
  let randomPersonsPosition = Math.floor(Math.random() * numberOfPeople);
  let randomPerson = names[randomPersonsPosition];
 console.log(randomPerson + ' is going to pay for lunch today')
 
}
    
//whosPaying();

 




















