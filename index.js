let items = document.querySelectorAll('.item');
let next = ducument.getElementById('next');
let prev = document.getElementById('prev');


let active = 3;
function loadShow() {
 let stt = 0;
 items[active].styletransform = "none";
   items[active].style.zIndex = 1;
   items[active].style.filter = "none";
   items[active].style.opacity = 1;
 for(var i = active + 1; i < items.length; i++) {
   stt++;
   items[i].styletransform = "translateX(${120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)";
   items[i].style.zIndex = -stt;
   items[i].style.filter = "blur(5px)";
   items[i].style.opacity = stt > 2 ? 0 : 0.6;
 }
 stt = 0;
 for(var i = active - 1; i >= 0; i--) {
   stt++;
   items[i].style.transform = "translateX(${-120*stt}px) scale(${1 - 0.2*stt}) perspective(16px) rotateY(-1deg)";
   items[i].style.zIndex = -stt;
   items[i].style.filter = "blur(5px)";
   items[i].style.opacity = stt > 2 ? 0 : 0.6;
 }
}
loadShow();
next.onclick = function() {
 active = active + 1 < items.length ? active + 1 : active;
 loadShow();
 }
prev.onclick = function() {
 active = active - 1 >= 0 ? active - 1 : active;
 loadShow();
}

function setResponsiveStyles() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
   
    document.body.classList.add('mobile-layout');
    document.getElementById('myElement').style.fontSize = '14px';
  }
 else {
    
    document.body.classList.remove('mobile-layout');
    document.getElementById('myElement').style.fontSize = '16px';
  }
}

setResponsiveStyles();

window.addEventListener('resize', setResponsiveStyles);
