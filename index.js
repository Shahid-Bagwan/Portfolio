const modalData = [
  {
    main: true,
    name: 'Yoga Application',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    img: './resources/Img Placeholder.png',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box1',
    name: 'Ozark Calculator',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/200',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box2',
    name: 'Weather App',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/200/300',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box3',
    name: 'Project Showcase',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/200/300',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box4',
    name: 'Projects',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/200/300',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box5',
    name: 'Projects',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/200/300',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box6',
    name: 'Projects',
    languages: ['HTML', 'Ruby', 'Flutter'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/200/300',
    livelink: 'https://github.com/Shahid-Bagwan',
    source: 'https://github.com/Shahid-Bagwan',
    class: 'modal-btn',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementsByTagName('button')[0];
  const title = document.getElementsByTagName('h1')[0];
  const links = document.getElementsByTagName('ul')[0];
  const main = document.getElementsByTagName('main')[0];
  const footer = document.getElementsByTagName('footer')[0];
  const nav = document.getElementsByTagName('nav')[0];
  const i = document.querySelector('#close_menu');
  const navLinks = document.querySelectorAll('.nav_links');
  // console.log(i);
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

  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggle());
  });

  function loadcontent() {
    modalData.forEach((project, index) => {
      let lang = '';
      if (project.main) {
        project.languages.forEach((element) => {
          lang += `<li>${element}</li>`;
        });
        document.querySelector('.first_box').innerHTML = `
        <div class="first-box-img ">
        <img class="" src="${project.img}" alt="Project Image">
    </div>
    <div class="first-box-text">
        <h2>${project.name}</h2>
        <p> ${project.description} </p>
        <div>
            <ul class="first_box_lang">
            ${lang}
            </ul>
        </div>
        <button type="button" data-index="${index}" class="first_box_button ${project.class}">See project</button>
    </div>
        `;
      } else {
        project.languages.forEach((item) => {
          lang += `<li>${item}</li>`;
        });
        document.querySelector('.work_section').innerHTML += `
        <div class="box ${project.class_name}">
                    <h2 class="">${project.name}</h2>
                    <p class="">${project.description}
                    
                    </p>
                    <div class="">
                        <ul class="lang_used">
                        ${lang}
                        </ul>
                    </div>
                    <button class="${project.class}" data-index="${index}" type="button">See project</button>
                </div>
        `;
      }
    });
  }
  loadcontent();

  // HTML elements
  const modal = document.querySelector('.overlay');
  const modalContent = document.querySelector('.creator-card');
  // console.log(buttons);
  function openModal(event) {
    let lang = '';
    const val = event;
    // const eventData = data[val];
    modalData[val].languages.forEach((ele) => {
      lang += `<li class="links"><a href="" class="thtml">${ele}</a></li>`;
    });
    modalContent.innerHTML = `
  <div class="creator-card-content">
  
                <div class="primary-text">
                    <div class="f-div">
                        <h2 class="project-title"> ${modalData[val].name} </h2>
                        <button class="close-btn "><i class="fa-solid fa-x fa-xl"></i></button>
                        
                    </div>
                    <ul class="tags">
                        ${lang}  
  
                    </ul>
                </div>
                <div class="left-block">
                    <div class="snapshot-portfolio">
                        <img src="${modalData[val].img}" alt="Image">
                    </div>
                    <div class="aligning">
  
                        <p class="primary-p">${modalData[val].description}</p>
                        <div class="action">
                        <button class="enable" >
                        <a class="down-ancor" href="${modalData[val].livelink}">See Live 
                        <img src="./resources/Icon-Export.png"></a>
                        </button>
                        <button class="enable">
                        <a class="down-ancor" href="${modalData[val].source}">See Source  <img src= "./resources/Icon-Github.png"> </a>
                        </button>
                        </div>
                    </div>
                </div>
            </div>
  `;
    modal.classList.toggle('overlay_dis');
    document.querySelector('.close-btn').addEventListener('click', () => {
      modal.classList.add('overlay_dis');
    });
  }

  // Add event listeners to buttons
  document.querySelectorAll('.modal-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
      openModal(index);
    });
    // button.dataset.index = index;
  });
});
