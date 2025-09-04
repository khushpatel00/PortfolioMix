let nav = document.querySelector('nav');
let isNavBarOpen = false;
function navTrigger(){
    if(isNavBarOpen){
        gsap.to(nav,{
            x: "60%",
            duration: 1,
            opacity:0,
            ease: "expo.out"
        })
        isNavBarOpen = false;
    }else{
        gsap.to(nav,{
            x: 0,
            duration: 1,
            opacity:1,
            ease: "expo.out"
        })
        isNavBarOpen = true;
    }

}