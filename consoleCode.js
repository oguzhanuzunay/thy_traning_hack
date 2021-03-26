function testSolver() {
  let kacKere = 75;
  let kacSaiyedeBirTıkla = 5gi;
  let timer = 0;
  let realTime = 0;
  var loop = setInterval(clickNext, kacSaiyedeBirTıkla * 1000);
  var clock = setInterval(setTime, 1000);

  function clickNext() {
    if (timer >= kacKere) {
      clearInterval(clock);
      clearInterval(loop);
    } else {
      timer++;
      console.log('Counter', `${timer}`);
      document.getElementById('control-next').classList.remove('disabled');
      document.getElementById('control-next').click();
    }
  }
}

var minutesLabel = 0;
var secondsLabel = 0;
var totalSeconds = 0;

testSolver();

function setTime() {
  ++totalSeconds;
  secondsLabel = pad(totalSeconds % 60);
  minutesLabel = pad(parseInt(totalSeconds / 60));
  console.log('Time', `${minutesLabel} : ${secondsLabel}`);
}

function pad(val) {
  var valString = val + '';
  if (valString.length < 2) {
    return '0' + valString;
  } else {
    return valString;
  }
}
