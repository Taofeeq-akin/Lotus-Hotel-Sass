'use strict'
const headerNav = document.querySelector('.header-nav');
const header = document.querySelector('.header');
const section1 = document.querySelector('.accommodation');

// const stickyNav = function(entries) {
//     const [entry] = entries;
//     if (!entry.isIntersecting) {
//         headerNav.classList.add("sticky")
//     }
// };

// const headerObserver = new IntersectionObserver (stickyNav, {
//     root: null,
//     threshold: 0,
// });
 
// headerObserver.observe(section1);

// const navHeight = nav.getBoundingClintReact().height;

const stickyNav = function (entries) {
    const [entry] = entries;
    if (!entry.isIntersecting) {
       headerNav.classList.add("sticky")
   }else headerNav.classList.remove('sticky')
};

const headerObserver = new IntersectionObserver (stickyNav, {
    root: null,
    threshold: 0.1,
    // rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);