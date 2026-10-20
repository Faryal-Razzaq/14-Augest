// SWEET ALERT WELCOME


window.onload = function () {

    Swal.fire({
        title: "🇵🇰 Happy Independence Day!",
        text: "Welcome to Pakistan Independence Day Celebration.",
        icon: "success",
        confirmButtonColor: "#006400",
        confirmButtonText: "Pakistan Zindabad ❤️"
    });

};


// DARK MODE

const modeBtn = document.getElementById("modeBtn");

if (modeBtn) {
    modeBtn.onclick = () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            modeBtn.innerHTML = `<i class="fa-solid fa-sun"></i>`;

        } else {

            modeBtn.innerHTML = `<i class="fa-solid fa-moon"></i>`;

        }

    };
}


// MOBILE NAV TOGGLE


const navToggle = document.getElementById("navToggle");
const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav .nav-links a");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        nav.classList.toggle("active");

        const icon = navToggle.querySelector("i");

        if (nav.classList.contains("active")) {
            icon.className = "fa-solid fa-xmark";
        } else {
            icon.className = "fa-solid fa-bars";
        }
    });
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (nav) {
            nav.classList.remove("active");
        }

        if (navToggle) {
            const icon = navToggle.querySelector("i");
            icon.className = "fa-solid fa-bars";
        }
    });
});



// BUTTON SCROLL


document.querySelector(".btn").addEventListener("click",()=>{

    document.querySelector("#about").scrollIntoView({

        behavior:"smooth"

    });

});
