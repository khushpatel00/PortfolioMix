"use strict";
// ["#000000","#00020b","#000315","#000420","#00052a","#000735","#00083f","#000949","#000a53"]
let nav = document.querySelector("nav");
let isNavBarOpen = false;
let banner = document.getElementById("banner");
let fluidCursor = document.getElementById("fluidCursorElement");
let fluidCursorContent = document.getElementById("fluidCursorContent");
let vertDivider1 = document.querySelector("#vertDivider1");
let vertDivider2 = document.querySelector("#vertDivider2");
let vertDivider3 = document.querySelector("#vertDivider3");
let interactions = document.querySelectorAll(".interaction");
let links = document.querySelectorAll(".link");
let transitionBall = document.querySelector('#transition-ball');

let targetX = 0; // position to be animated
let targetY = 0;
let mouseX = 0; //actual position
let mouseY = 0;
let ease = 0.1;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

});

function animate() {
    targetX += (mouseX - targetX) * ease;
    targetY += (mouseY - targetY) * ease;

    banner.style.background = `radial-gradient(circle at ${targetX}px ${targetY}px, rgba(0, 13, 71, 1) 0%, rgba(0, 0, 0, 1) 100%)`;
    requestAnimationFrame(animate);
}

animate();
document.addEventListener('keyup', (key)=>{
    if(key.key == 'Escape') navTrigger();
})
banner.addEventListener('mousemove',(e)=>{
    fluidCursor.classList.add('p-8');
    if(e.clientX < window.innerWidth / 2)  fluidCursorContent.innerHTML = `<img src="src/img/mac_pointer.png" class="max-w-6" alt="">`;
    else fluidCursorContent.innerHTML = '<img src="src/img/mickey_pointer.png" class="max-w-7" alt="">';
});
banner.addEventListener('mouseleave',(e)=>{
    fluidCursor.classList.remove('p-8');
    fluidCursorContent.innerHTML = '';
});