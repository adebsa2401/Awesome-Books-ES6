export default () => {
  setInterval(() => {
    const current = new Date();
    document.getElementById('date-time').innerText = current.toLocaleString();
  }, 1000);
};
