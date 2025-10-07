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
    gsap.to(fluidCursor, {
        x:position.x - 8,
        y:position.y - 8,
        duration: 0.2,
        // ease: 'back.out(1)'
    })
    gsap.to(fluidCursorContent, {
        x:position.x - 3,
        y:position.y - 3,
        duration: 0.1,
        // ease: 'back.out(1)'
    })
})