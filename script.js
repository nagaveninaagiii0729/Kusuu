/* =====================================
   KUSUU ❤️ NAAGII
   HOME PAGE
===================================== */

// Fade in animation

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});


// Button click effect

const btn = document.querySelector(".btn");

if (btn) {

    btn.addEventListener("click", () => {

        document.body.style.transition = "opacity 1s ease";

        document.body.style.opacity = "0";

    });

}


// Small parallax effect

document.addEventListener("mousemove", (e) => {

    const content = document.querySelector(".content");

    if (content) {

        const x = (e.clientX - window.innerWidth / 2) / 80;
        const y = (e.clientY - window.innerHeight / 2) / 80;

        content.style.transform = `translate(${x}px, ${y}px)`;

    }

});
