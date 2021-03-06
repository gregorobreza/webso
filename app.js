//remove preloader

window.addEventListener("load", () =>{
  setTimeout(()=>{
    const preload = document.getElementById("preload");
    preload.classList.add("preload-finish")
  }, 2000)
  

} )



TweenMax.defaultEase = Linear.easeOut;
let firstTyping;
new fullpage("#fullpage", {
  //options here
  licenseKey: "16C8B169-43374614-A5C8E626-14E12568",
  autoScrolling: true,
  navigation: true,
  navigationPosition: "left",
  easing: "easeInOutCubic",
  keyboardScrolling: true,
  animateAnchor: true,
  css3: true,
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

    
    
    if(destination.index === 2){
      

      if (firstTyping == undefined){
        firstTyping = 2; // prvic ko prides na slide se zamenja vrednost, da ne zacne ponovno pisat
        var typed1 = new Typed(".type_gregor1", {
          strings: ["Hrana: Losos"],
          typeSpeed: 100,
          backSpeed: 0,
          startDelay: 900,
          loop: false,
        });
        var typed2 = new Typed(".type_gregor2", {
          strings: ["Knjiga: D. Goggins - Can't hurt me"],
          typeSpeed: 100,
          backSpeed: 0,
          startDelay: 2800,
          loop: false,
          preStringTyped: (arrayPos, self) => {
            showCursor: false;
          },
        });
        var typed3 = new Typed(".type_gregor3", {
          strings: ["Šport: Street workout"],
          typeSpeed: 100,
          backSpeed: 0,
          startDelay: 4500,
          loop: false,
        });
    
        var typed4 = new Typed(".type_jure1", {
          strings: ["Aplikacija: Beležnica"],
          typeSpeed: 100,
          backSpeed: 0,
          startDelay: 900,
          loop: false,
        });
    
        var typed5 = new Typed(".type_jure2", {
          strings: ["Knjiga: MJ Demarco - Unscripted"],
          typeSpeed: 100,
          backSpeed: 0,
          startDelay: 2800,
          loop: false,
        });
    
        var typed6 = new Typed(".type_jure3", {
          strings: ["Šport: Street workout"],
          typeSpeed: 100,
          backSpeed: 0,
          startDelay: 4500,
          loop: false,
        });

      }

      

    }else{
      
    }

    
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

//paralax
var scene = document.getElementById("paralax-scene");
var parallax = new Parallax(scene);

var scene2 = document.getElementById("paralax-scene-2");
var parallax2 = new Parallax(scene2);





// orientacija zaslona
const mediaQuery = window.matchMedia('(max-width: 700px)')

if(mediaQuery.matches){
 

const rotateMessage = document.getElementById("rotate");
console.log(window.orientation)
if(window.orientation === 90){
    
  rotateMessage.classList.add("rotate-landscape")
  }
  else if(window.orientation === 270){
 
    rotateMessage.classList.add("rotate-landscape")
  }
  else if(window.orientation === 0){
  
    rotateMessage.classList.remove("rotate-landscape")
  }
  else if(window.orientation=== 180){
    
    rotateMessage.classList.remove("rotate-landscape")
  }

window.addEventListener("orientationchange", function(event) {
  if(event.target.screen.orientation.angle === 90){
    
  rotateMessage.classList.add("rotate-landscape")
  }
  else if(event.target.screen.orientation.angle === 270){
 
    rotateMessage.classList.add("rotate-landscape")
  }
  else if(event.target.screen.orientation.angle === 0){
  
    rotateMessage.classList.remove("rotate-landscape")
  }
  else if(event.target.screen.orientation.angle === 180){
    
    rotateMessage.classList.remove("rotate-landscape")
  }
  
});}
