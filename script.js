const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("show");
  gsap.from(".navLinks", {
    opacity: 0,
    duration: 0.3,
    ease: "power4.out",
    stagger: 0.1,
    y: "-100vh",
  });
});

//logo animation
gsap.from(".navLogo", { opacity: 0, duration: 2.1, x: -200 });

//navbar links
gsap.from(".navLinks", {
  opacity: 0,
  duration: 0.8,
  ease: "circ.out",
  stagger: 0.2,
  y: "-100vh",
});
// gsap.from(".navLinks", {opacity:0, duration:2, stagger: 1, y: -75});

//hamburger Menu
gsap.from("#hamburger", { opacity: 0, duration: 2, x: 100 });

//contact me button
gsap.from(".viewWorkBtn", { opacity: -1, duration: 1.8, x: "-100vw" });

// down arrow animation
gsap.from(".arrows-1", {
  opacity: -1,
  repeat: -2,
  delay: 0.2,
  duration: 7.5,
  ease: "circ.out",
  y: -300,
});
gsap.from(".arrows-2", {
  opacity: -1,
  repeat: -2,
  delay: 0.3,
  duration: 7.5,
  ease: "circ.out",
  y: -200,
});
gsap.from(".arrows-3", {
  opacity: -1,
  repeat: -2,
  delay: 0.5,
  duration: 7.5,
  ease: "circ.out",
  y: -150,
});

///name section in header
gsap.from(".text-1", {
  opacity: -1,
  delay: 0.3,
  ease: "circ.out",
  duration: 2.1,
  y: -300,
});
gsap.from(".text-2", {
  opacity: -1,
  delay: 0.3,
  ease: "circ.out",
  duration: 2.1,
  y: -200,
});
gsap.from(".text-3", {
  opacity: -1,
  delay: 0.3,
  ease: "circ.out",
  duration: 2.1,
  y: -100,
});

//Macbook Loading screen
const section3Content = document.querySelectorAll(".lapTopSectionWrapper");
section3Content.forEach((section) => {
  window.addEventListener("scroll", () => {
    if (
      window.pageYOffset + window.innerHeight >=
      section.offsetTop + section.offsetHeight / 2
    ) {
      section.classList.add("change");
    }
  });
});
