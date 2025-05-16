/* <-============= Typing Feature ============->*/

let typed = new Typed(".typing", {
  strings: ["HTML Developer", "CSS Developer", "JS Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* <-============= Smooth Scrolling Feature ============->*/

const scroll = new LocomotiveScroll({
  el: document.querySelector(".scroll-section"),
  smooth: true,
});

/*
// Nav ma je links che, ena click par smooth scroll karva mate
document.querySelectorAll('.nav a').forEach(function(link) {
  link.addEventListener('click', function(event) {
    // href ni value (e.g. "#about")
    var targetId = this.getAttribute('href');
    // Jou ke href # thi start thay che ke nai (matlab section par javu che)
    if (targetId && targetId.startsWith('#')) {
      event.preventDefault(); // Default jump rokvi devo
      var targetSection = document.querySelector(targetId); // Section find karvo
      if (targetSection) {
        scroll.scrollTo(targetSection); // Locomotive thi scroll karvu
      }
    }
  });
});
*/

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", function (e) {
    // console.log(value.target.getAttribute("href"));
    let targetedID = e.target.getAttribute("href");
    if (targetedID.startsWith("#")) {
      e.preventDefault();
      let findedSection = document.querySelector(targetedID);
      if (findedSection) {
        scroll.scrollTo(findedSection);
      }
    }
  });
});

/* <-============= Mouse Follower Feature ============->*/

const enableMouseFollower = () => {
  if (window.innerWidth > 1024) {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
    });
  }
};
enableMouseFollower()

window.addEventListener('resize', function() {
  // Optionally, you can reload the page or handle destroy/init here
   location.reload(); // Uncomment if you want to reload on resize
});

/* <-============= submit form Feature ============->*/

let contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  setTimeout(() => {
    contactForm.reset();
  }, 1000);
});

/* <-============= dark-light mode Feature ============->*/

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.querySelector(".theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};
const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") {
  enableDarkmode();
}

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  if (darkmode !== "active") {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
});

/* <-============= Aside ============->*/

const navToggler = document.querySelector('.nav-toggler');
const aside = document.querySelector('.aside');
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const navLinks = nav.querySelectorAll('.nav a');

// Toggler par click: aside show/hide
if (navToggler && aside) {
  navToggler.addEventListener('click', function () {
    aside.classList.toggle('show');
  });
}

// Nav links par click event
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // 1. Smooth scroll (Locomotive)
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        scroll.scrollTo(targetSection);
      }
    }

    // 2. Active class update
    navList.forEach(li => li.querySelector('a').classList.remove('active'));
    this.classList.add('active');

    // 3. Aside close on small screen
    if (window.innerWidth <= 1400 && aside) {
      aside.classList.remove('show');
    }
  });
});