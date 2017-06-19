window.addEventListener('keydown', function(e){
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
if(!audio) return; // stop the function from running
audio.currentTime = 0;
audio.play()
key.classList.add('playing');
});

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
}

const keys = document.querySelectorAll('.keys')
keys.forEach(key => key.addEventListener('transitionend', (e) => {
  console.log(e);
}));
