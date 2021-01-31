function onPlaySound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // if (!audio) return; //stop the function running
  // audio.currentTime = 0; //rewind to the start
  // audio.play();
  // key.classList.add('playing');

  if (!audio.paused) {
    /* Check if it"s not paused */
    audio.pause(); /* To pause the audio */
    audio.currentTime = 0; /* To reset the time back to 0 */
  } else {
    audio.play(); /* To make it play again */
    key.classList.add('playing');
  }
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; //skip it if it's not a transform
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach((key) => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', onPlaySound);
