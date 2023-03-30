import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(() => {
    const currentTime = player.getCurrentTime();
    localStorage.setItem('videoplayer-current-time', currentTime);
  }, 1000)
);

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(currentTime);
  }
});
