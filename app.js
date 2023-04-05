const dice = document.getElementById('cube');
const button = document.getElementById('roll');


let min = 1;
let max = 6;

button.onclick = function rollTheDice() {
    var xRand = getRandom(max, min);
    var yRand = getRandom(max, min);

    dice.style.webkitTransform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
    dice.style.transform = 'rotateX('+xRand+'deg) rotateY('+yRand+'deg)';
}

function getRandom(max, min) {
    return (Math.floor(Math.random() * (max-min)) + min) * 90;
  }