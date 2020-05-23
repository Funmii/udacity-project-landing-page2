/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables*/
const section_s = document.querySelectorAll('section');
const navigation = document.getElementById('navbar__list');



/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
const buildNavigation = () => {
    let navUI = '';
    // loop to iterate through different sections
    section_s.forEach(section => {
        const sectionId = section.id;
        const sectionNavigatorData = section.dataset.nav;

        navUI += `<li><a class="menu__link" href="#${sectionId}">${sectionNavigatorData}</a></li>`;
    });
    navigation.innerHTML = navUI;
};
buildNavigation();

// Add class 'active' to section when near top of viewport
const activeSection = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};
const classActive = (control,section) => {
    if(control) {
        section.classList.add('your-active-class');
    };
};
// removing the active class
const removeActive =(section) => {
    section.classList.remove('your-active-class');
};


const sectionActivation = () => {
    section_s.forEach(section => {
        const elementOffset = activeSection(section);

        viewPort = () => elementOffset < 180 && elementOffset >= -180;
        removeActive(section);
        classActive(viewPort(),section);
    });
};

window.addEventListener('scroll',sectionActivation);
// Scroll to anchor ID using scrollTO event

 /*scrolling = () => {
    const link_s = document.querySelectorAll('.navbar_menu a');
    link_s.forEach(links => { 
        links.addEventListener('click', () => {
            for(i =0; i<section_s; i++) {
                section_s[i].addEventListener("click",sectionScroll(links));
            }
        });
    });
};

scrolling();*/
function smoothScroll(el) {
    window.scrollTo({
      //scroll to element and account for sticky header offset
      top: getElementOffset(el).top - nav.offsetHeight,
      left: getElementOffset(el).left,
      behavior: "smooth"
    });
  }

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active





console.log("work");


