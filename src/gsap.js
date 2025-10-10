gsap.set(nav, {
    display: "none",
});
gsap.from(".gTopFade", {
    y: -20,
    duration: 0.7,
    opacity: 0,
    stagger: 0.2,
});
function navTrigger() {
    if (isNavBarOpen) {
        gsap.to(nav, {
            // x: "60%",
            duration: 1,
            opacity: 0,
            ease: "expo.out",
            display: "none",
        });
        isNavBarOpen = false;
    } else {
        gsap.fromTo(
            nav,
            {
                // x: "60%",
                opacity: 0,
                display: "none",
            },
            {
                // x: "0%",
                duration: 1,
                opacity: 1,
                ease: "expo.out",
                display: "flex",
            }
        );
        gsap.from(".gTopFadeLi", {
            y: -20,
            duration: 0.5,
            opacity: 0,
            stagger: 0.2,
        });
        isNavBarOpen = true;
    }
}

document.addEventListener("mousemove", (position) => {
    gsap.to(fluidCursorContent, {
        x: position.x - 2,
        y: position.y - 2,
        duration: 0.1,
    });
    const cursorWidth = fluidCursor.offsetWidth;
    const cursorHeight = fluidCursor.offsetHeight;
    gsap.to(fluidCursor, {
        x: position.clientX - cursorWidth / 2,
        y: position.clientY - cursorHeight / 2,
    });
    gsap.to(vertDivider1, {
        rotate: position.x / 1300,
        duration: 0.1,
    });
    gsap.to(vertDivider2, {
        rotate: -position.y / 1000 - 2,
        duration: 0.1,
    });
    gsap.to(vertDivider3, {
        rotate: position.x / 800,
        duration: 0.1,
    });
});


let activeTimeouts = []; 

interactions.forEach(item => {
  item.addEventListener('mouseenter', e => {
    const text = e.currentTarget.dataset.cursorText;

    gsap.from(fluidCursor, {
        scale: 0.7
    })
    fluidCursor.textContent = text;
});

item.addEventListener('mouseleave', () => {
    gsap.from(fluidCursor, {
        scale: 1.7
    })
    fluidCursor.textContent = '';
  });
});
    