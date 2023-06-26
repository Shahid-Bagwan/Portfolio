// const navToggle = document.getElementsByTagName('button')[0];
// const links = document.querySelector('.item_navigation');
// // console.log(navToggle);
// navToggle.addEventListener('click', () => {
//   links.classList.add.toggle('show_nav');
// });

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementsByTagName('button')[0];
  const title = document.getElementsByTagName('h1')[0];
  const links = document.getElementsByTagName('ul')[0];
  const main = document.getElementsByTagName('main')[0];
  const footer = document.getElementsByTagName('footer')[0];
  const nav = document.getElementsByTagName('nav')[0];
  const i = document.querySelector('#close_menu');
  console.log(i);
  function toggle() {
    links.classList.toggle('show_nav');
    main.classList.toggle('test');
    footer.classList.toggle('test');
    title.classList.toggle('test');
    nav.classList.toggle('navbar');
    nav.classList.toggle('navbar1');
    i.classList.toggle('fas');
    i.classList.toggle('fa-bars');
    i.classList.toggle('fa-xs');
    i.classList.toggle('fa-solid');
    i.classList.toggle('fa-xmark');
    // nav.classList.add('nav_positioning');
  }
  // console.log(navToggle);
  navToggle.addEventListener('click', () => toggle());
});

// .navbar_toggle {
