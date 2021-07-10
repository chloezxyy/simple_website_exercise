let videoElem = document.getElementById('vision-video');
let playButton = document.getElementById('play-video-btn');

playButton.addEventListener('click', handlePlayButton, false);
playVideo();

async function playVideo() {
  try {
    await videoElem.play();
    playButton.classList.add('playing');
    playButton.innerText = 'Pause';
  } catch (err) {
    playButton.classList.remove('playing');
  }
}

function handlePlayButton() {
  if (videoElem.paused) {
    playVideo();
  } else {
    videoElem.pause();
    playButton.innerText = 'Watch Video';
    playButton.classList.remove('playing');
  }
}
