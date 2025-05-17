/* <-============= Typing Feature ============->*/

let typed = new Typed(".typing", {
  strings: ["HTML Developer", "CSS Developer", "JS Developer"],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* <-============= Smooth Scrolling Feature ============->*/

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: window.innerWidth > 1024,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

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
    const targetId = this.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        lenis.scrollTo(targetSection);
      }
    }
  });
});

/* <-============= Mouse Follower Feature ============->*/

const enableMouseFollowerAndMegneteffect = () => {
  if (window.innerWidth > 1024) {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.5,
    });

/* <-============= Megnet Feature ============->*/

    Shery.makeMagnet(".theme-switch, .btn, .logo", {
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    });
  }
};
enableMouseFollowerAndMegneteffect();

window.addEventListener("resize", function () {
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

const navToggler = document.querySelector(".nav-toggler");
const aside = document.querySelector(".aside");
const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const navLinks = nav.querySelectorAll(".nav a");

// Toggler par click: aside show/hide
if (navToggler && aside) {
  navToggler.addEventListener("click", function () {
    aside.classList.toggle("show");
  });
}

// Nav links par click event
navLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    // 1. Smooth scroll (Locomotive)
    const targetId = this.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      e.preventDefault();
      const targetSection = document.querySelector(targetId);
      if (targetSection) {
        lenis.scrollTo(targetSection);
      }
    }

    // 2. Active class update
    navList.forEach((li) => li.querySelector("a").classList.remove("active"));
    this.classList.add("active");

    // 3. Aside close on small screen
    if (window.innerWidth <= 1400 && aside) {
      aside.classList.remove("show");
    }
  });
});


/* <-============= Gsap Animations ============->*/

gsap.from(".nav li, .logo", {
  stagger: 0.2,
  y: 15,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from(".theme-switch", {
  stagger: 0.2,
  x: 25,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from(".nav-toggler", {
  stagger: 0.2,
  x: -25,
  duration: 1,
  ease: Power2,
  opacity: 0,
});

gsap.from(".hello, .my-profation", {
  stagger: 0.2,
  y: 30,
  duration: 1,
  ease: Expo,
  opacity:0
});

gsap.from(".home-img", {
  stagger: 0.2,
  x: 30,
  duration: 1,
  ease: Expo,
  opacity:0
});