gsap.set(nav, {
    display: "none",
})
gsap.from('.gTopFade',{
    y: -20,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2
});
function navTrigger(){
    if(isNavBarOpen){ // opened -> close
        gsap.to(nav,{
            x: "60%",
            duration: 1,
            opacity:0,
            ease: "expo.out",
            display: "none"
        })
        isNavBarOpen = false;
    }else{ // closed -> open
        // gsap.from(nav,{
        //     x: "60%",
        //     duration: 1,
        //     opacity:0,
        //     ease: "expo.out",
        //     // display: "flex"
        // })

        gsap.fromTo(nav, {
            x: "60%",
            opacity: 0,
            display: "none"

        }, {
            x: "0%",
            duration: 1,
            opacity: 1,
            ease: "expo.out",
            display: "flex",
        })
        gsap.from('.gTopFadeLi',{
            y: -20,
            duration: 0.5,
            opacity: 0,
            stagger: 0.2
        })
        isNavBarOpen = true;
    }
}

document.addEventListener('mousemove', (position)=>{
    // const rect = position.currentTarget.getBoundingClientRect(); // <--- get the bounding rect
    //     const width = rect.width;
    //     const height = rect.height;
    //     const left = rect.left;
    //     const top = rect.top;
    gsap.to(fluidCursor, {
        x:position.x - fluidCursorContent.clientWidth * 1.2,
        y:position.y - fluidCursorContent.clientHeight * 1.2,
        // duration: 0.2,
        // ease: 'back.out(1)'
    })
    gsap.to(fluidCursorContent, {
        x:position.x - 2,
        y:position.y - 2,
        duration: 0.1,
        // ease: 'back.out(1)'
    })
    // gsap.to(fluidCursor, {
    //         x: left + offsetWidth / 2 - (offsetWidth * 1.2) / 2,
    //         y: top + offsetHeight / 2 - (offsetHeight * 1.2) / 2,
    //         // duration: 0.2
    // });

    gsap.to(vertDivider1, {
        rotate: position.x / 1000,
        duration: 0.1,
        // ease: 'back.out(1)'
    })
    gsap.to(vertDivider2, {
        rotate: (- position.y / 500) - 2,
        duration: 0.1,
        // ease: 'back.out(1)'
    })
});
// console.log(links);
for (const element of links) {
    element.addEventListener('mouseenter', (e)=>{
        const { offsetWidth, offsetHeight } = e.currentTarget;
        fluidCursor.style.width = (offsetWidth * 1.2) + 'px';
        fluidCursor.style.height = (offsetHeight * 1.2) + 'px';
    })
    element.addEventListener('mouseleave', ()=>{
        fluidCursor.style.width = '16px';
        fluidCursor.style.height = '16px';
    })
}
// links.addEventListener('mouseenter', ()=>{
    
// });