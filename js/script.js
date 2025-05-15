/* <-============= Typing Feature ============->*/ 

let typed = new Typed(".typing",{
    strings:["HTML Developer","CSS Developer","JS Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/* <-============= Smooth Scrolling Feature ============->*/ 

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main-content'),
    smooth: true
});

/* <-============= Mouse Follower Feature ============->*/ 

Shery.mouseFollower({
  //Parameters are optional.
  skew: true,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});