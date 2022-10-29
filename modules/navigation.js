export default (navItem) => {
  navItem.addEventListener('click', () => {
    if (navItem.classList.contains('nav-active')) {
      return;
    }

    document.querySelector('.nav-active').classList.remove('nav-active');
    navItem.classList.add('nav-active');

    document.querySelector('.page-content').classList.remove('page-content');
    document.getElementById(navItem.dataset.for).classList.add('page-content');
  });
};
