const modalData = [
  {
    main: true,
    name: 'Yoga Application',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry',
    img: './resources/Img Placeholder.png',
    livelink: '#',
    source: '#',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box1',
    name: 'Ozark Calculator',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/310',
    livelink: '#',
    source: '#',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box2',
    name: 'Weather App',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/310',
    livelink: '#',
    source: '#',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box3',
    name: 'Project Showcase',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/310',
    livelink: '#',
    source: '#',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box4',
    name: 'Projects',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/310',
    livelink: '#',
    source: '#',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box5',
    name: 'Projects',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/310',
    livelink: '#',
    source: '#',
    class: 'modal-btn',
  },
  {
    main: false,
    class_name: 'box6',
    name: 'Projects',
    languages: ['HTML', 'Bootstrap', 'Ruby on rails'],
    description:
      "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    img: 'https://picsum.photos/310',
    livelink: '#',
    source: '#',
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
                        <button class="enable">
                        <a class="down-ancor" href="${modalData[val].livelink}">See Live </a>
                         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Icons/Icon - Export">
                        <path id="Icon-see live" fill-rule="evenodd" clip-rule="evenodd" d="M5 12C5 8.13401 8.13401 5 12 5C12.5523 5 13 4.55228 13 4C13 3.44772 12.5523 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 11.4477 20.5523 11 20 11C19.4477 11 19 11.4477 19 12C19 15.866 15.866 19 12 19C8.13401 19 5 15.866 5 12ZM16 3C15.4477 3 15 3.44772 15 4C15 4.55228 15.4477 5 16 5H17.5858L11.2929 11.2929C10.9024 11.6834 10.9024 12.3166 11.2929 12.7071C11.6834 13.0976 12.3166 13.0976 12.7071 12.7071L19 6.41421V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H16Z" fill="white"/>
                        </g>
                        </svg>
                        </button>
                        <button class="enable">
                        <a class="down-ancor" href="${modalData[val].source}">See Source </a>
                        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame" clip-path="url(#clip0_34_2028)">
                        <g id="Group">
                        <path id="Vector" d="M17.9989 7.46114C17.9989 6.32124 17.6329 5.25043 16.9342 4.31779C17.2004 3.41969 17.2669 2.27979 17.2004 0.967185C17.1671 0.414508 16.7345 0 16.2022 0C15.9028 0 13.3741 0.0345423 11.9101 1.38169C10.6458 1.1399 9.31495 1.1399 8.01736 1.38169C6.58667 0.0345423 4.05802 0 3.7253 0C3.19296 0 2.76042 0.414508 2.72715 0.967185C2.62734 2.27979 2.72715 3.41969 2.99333 4.31779C2.29462 5.28497 1.92863 6.35579 1.92863 7.46114C1.92863 9.8791 3.7253 12.0553 6.45358 13.0915C6.35377 13.2988 6.28723 13.5406 6.22068 13.7824C3.32604 13.4715 1.9619 10.7427 1.89536 10.639C1.66246 10.1209 1.06357 9.91364 0.56449 10.19C0.0654144 10.4318 -0.134216 11.0535 0.131958 11.5717C0.198501 11.7444 2.02845 15.4404 6.05432 15.8549V18.9637C6.05432 19.5509 6.48686 20 7.05248 20H12.875C13.4406 20 13.8732 19.5509 13.8732 18.9637V14.8532C13.8732 14.2314 13.7401 13.6442 13.5072 13.1261C16.2022 12.0553 17.9989 9.91364 17.9989 7.46114Z" fill="white"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_34_2028">
                        <rect width="18" height="20" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
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

  function validateEmail() {
    const emailValue = document.getElementById('email').value;

    if (emailValue.toLowerCase() !== emailValue) {
      document.getElementById('emailError').innerHTML = 'The Email must be in lower case.';
      return false;
    }

    return true;
  }

  document.getElementById('myForm').addEventListener('submit', (event) => {
    event.preventDefault();
    // checking for the email is verified or not
    // Validate the email
    const isValid = validateEmail();

    // If the email is valid, submit the form
    if (isValid) {
      document.getElementById('myForm').submit();
    }
  });
});
