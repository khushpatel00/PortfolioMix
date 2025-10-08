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
            x: "60%",
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
                x: "60%",
                opacity: 0,
                display: "none",
            },
            {
                x: "0%",
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
        // ease: 'back.out(1)'
    });
    const cursorWidth = fluidCursor.offsetWidth;
    const cursorHeight = fluidCursor.offsetHeight;
    gsap.to(fluidCursor, {
        // x:position.x - fluidCursorContent.clientWidth * 1.2,
        // y:position.y - fluidCursorContent.clientHeight * 1.2,

        x: position.clientX - cursorWidth / 2,
        y: position.clientY - cursorHeight / 2,
    });

    gsap.to(vertDivider1, {
        rotate: position.x / 1000,
        duration: 0.1,
    });
    gsap.to(vertDivider2, {
        rotate: -position.y / 500 - 2,
        duration: 0.1,
    });
});

// interactions.forEach((item) => {
//     item.addEventListener("mouseenter", (e) => {
//         const text = e.currentTarget.dataset.cursorText; // gets 'More', 'Less', etc.
//         activeTimeouts.forEach((id) => clearTimeout(id));
//         activeTimeouts = [];    
//         fluidCursor.textContent = ""; // reset
//         for (let i = 0; i < text.length; i++) {
//             setTimeout(() => {
//                 fluidCursor.textContent += text[i];
//             }, i * 25); // stagger each character by 100ms
//             activeTimeouts.push(timeoutId);F
//         }
//     });
//     item.addEventListener("mouseleave", (e) => {
//         activeTimeouts.forEach((id) => clearTimeout(id));
//         activeTimeouts = [];
//         fluidCursor.textContent = "";
//     });
// });


let activeTimeouts = [];

interactions.forEach(item => {
  item.addEventListener('mouseenter', e => {
    const text = e.currentTarget.dataset.cursorText;
    fluidCursor.textContent = '';

    // clear any previous animation
    activeTimeouts.forEach(id => clearTimeout(id));
    activeTimeouts = [];

    // start printing letters
    for (let i = 0; i < text.length; i++) {
      const t = setTimeout(() => {
        fluidCursor.textContent += text[i];
      }, i * 100);
      activeTimeouts.push(t);
    }
  });

  item.addEventListener('mouseleave', () => {
    // cancel all timeouts immediately
    activeTimeouts.forEach(id => clearTimeout(id));
    activeTimeouts = [];

    // clear the cursor
    fluidCursor.textContent = '';
  });
});
    