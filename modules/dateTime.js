import { DateTime } from '../node_modules/luxon/build/es6/luxon.js';

export default () => {
  setInterval(() => {
    const now = DateTime.now();
    document.getElementById('date-time').innerText = now.toLocaleString({
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
    });
  }, 1000);
};
