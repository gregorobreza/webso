TweenMax.defaultEase = Linear.easeOut;

new fullpage("#fullpage", {
  //options here
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
  easing: "easeInOutCubic",
  keyboardScrolling: true,
  animateAnchor: true,
  css3: true,
  responsiveSlides: true,
  anchors: ["domov-stran", "projekti-stran", "onas-stran", "kontakt-stran"],
  menu: "#sidebarMenu",
  onLeave: (origin, destination, direction) => {
    const section = destination.item;
    const title = section.querySelector("h2");
    const tl = new TimelineMax({ delay: 0.1 });
    const tl4 = new TimelineMax({ delay: 0.4 });
    tl4.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

    const line = document.querySelectorAll(".verticalLine");
    const tl2 = new TimelineMax();
    tl2.fromTo(line, 0.8, { y: 0, opacity: 1 }, { y: 1000, opacity: 0 });
    tl.fromTo(line, 0.7, { y: "1000", opacity: 0 }, { y: 0, opacity: 1 });

    const sectionname = document.querySelectorAll(".sectionname");
    const tl3 = new TimelineMax({ delay: 1.0 });
    tl3.fromTo(sectionname, 0.8, { x: -10, opacity: 0 }, { x: 0, opacity: 1 });

    const pike = document.querySelectorAll(".pike");
    tl.fromTo(pike, 0.8, { x: -20, opacity: 0 }, { x: 0, opacity: 1 });
  },
});

// odpre in zapre stranski meni in naredi animacijo burger menija
const menuBtn = document.querySelector(".menu-btn");
const sidebarBtn = document.querySelector(".sidebar");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    sidebarBtn.classList.add("open");
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    sidebarBtn.classList.remove("open");
  }
});

// ob kliku na link, ki ima ustrezen atribut onclick="closeMenu", se meni zapre
function closeMenu() {
  menuBtn.classList.remove("open");
  menuOpen = false;
  sidebarBtn.classList.remove("open");
}

//day night mode
const chk = document.getElementById("chk");

chk.addEventListener("change", () => {
  document.body.classList.toggle("day");
});

// Menjava slik pri sliderjih
var slideIndex = 1;
showSlides(slideIndex);

//next previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("proSlide");
  var captionText = document.getElementsByClassName("pro1");
  //var alts= document.getElementsByClassName("slika");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    captionText[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
  captionText[slideIndex - 1].style.display = "block";
  
}
