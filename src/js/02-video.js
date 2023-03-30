import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');

player.on('timeupdate', throttle(({seconds}) => {
  localStorage.setItem('videoplayer-current-time', `${seconds}`);
}, 1000));

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime !== null) {
    player.setCurrentTime(currentTime);
  }
});
