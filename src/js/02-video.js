import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

function saveCurrentTimeToLocalStorage(seconds) {
  localStorage.setItem('videoplayer-current-time', `${seconds}`);
}

const throttledSaveCurrentTime = throttle(saveCurrentTimeToLocalStorage, 1000);

function loadCurrentTimeFromLocalStorage() {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  return currentTime !== null ? currentTime : 0;
}

function setCurrentTimeOnPlayer() {
  const currentTime = loadCurrentTimeFromLocalStorage();
  player.setCurrentTime(currentTime);
}

player.on('timeupdate', ({ seconds }) => {
  throttledSaveCurrentTime(seconds);
});

document.addEventListener('DOMContentLoaded', setCurrentTimeOnPlayer);
