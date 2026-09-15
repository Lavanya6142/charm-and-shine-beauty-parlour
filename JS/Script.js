/* =========================================================
   1. MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if(menuBtn && navbar) {menuBtn.addEventListener("click", () => {

  navbar.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});

}

/* =========================================================
   2. CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================================= */

const navLinks = document.querySelectorAll(".nav-link, .nav-btn");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if(navbar) { 
        navbar.classList.remove("active");
        }

        if(menuBtn) {
        const icon = menuBtn.querySelector("i");

        if(icon) {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

        }
    }

    });

});

/* =========================================================
   3. ACTIVE NAVIGATION LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   4. APPOINTMENT DATE — PREVENT PAST DATES
========================================================= */

const dateInput = document.getElementById("date");

if (dateInput) {

    const today = new Date();

    const year = today.getFullYear();

    const month = String(today.getMonth() + 1).padStart(2, "0");

    const day = String(today.getDate()).padStart(2, "0");

    const todayDate = `${year}-${month}-${day}`;

    dateInput.setAttribute("min", todayDate);

}


/* =========================================================
   5. APPOINTMENT FORM
========================================================= */

const appointmentForm =
    document.getElementById("appointment-form");

const formMessage =
    document.getElementById("form-message");


if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const phone =
            document.getElementById("phone").value.trim();

        const service =
            document.getElementById("service").value;

        const date =
            document.getElementById("date").value;


        /* -----------------------------------------
           BASIC VALIDATION
        ----------------------------------------- */

        if (name === "") {

            formMessage.textContent =
                "Please enter your name.";

            return;
        }


        if (phone === "") {

            formMessage.textContent =
                "Please enter your phone number.";

            return;
        }


        if (service === "") {

            formMessage.textContent =
                "Please select a service.";

            return;
        }


        if (date === "") {

            formMessage.textContent =
                "Please select your preferred date.";

            return;
        }


        /* -----------------------------------------
           PHONE NUMBER VALIDATION
        ----------------------------------------- */

        const phonePattern = /^[0-9][0-9]{9}$/;

        if (!phonePattern.test(phone)) {

            formMessage.textContent =
                "Please enter a valid 10-digit phone number.";

            return;
        }


        /* -----------------------------------------
           SUCCESS MESSAGE
        ----------------------------------------- */

        formMessage.textContent =
            `Thank you, ${name}! Your appointment request has been received.`;


        formMessage.style.color = "#b76e79";


        /* -----------------------------------------
           CLEAR FORM
        ----------------------------------------- */

        appointmentForm.reset();


        /* -----------------------------------------
           RESTORE DATE RESTRICTION
        ----------------------------------------- */

        if (dateInput) {

            const today = new Date();

            const year = today.getFullYear();

            const month =
                String(today.getMonth() + 1).padStart(2, "0");

            const day =
                String(today.getDate()).padStart(2, "0");

            dateInput.setAttribute(
                "min",
                `${year}-${month}-${day}`
            );

        }

    });

}


/* =========================================================
   6. SCROLL TO TOP WHEN LOGO IS CLICKED
========================================================= */

const logo = document.querySelector(".logo");

if (logo) {

    logo.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   7. PREVENT DEMO SOCIAL LINKS FROM RELOADING PAGE
========================================================= */

const socialLinks =
    document.querySelectorAll(".social-links a");

socialLinks.forEach(link => {

    link.addEventListener("click", event => {

        event.preventDefault();

    });

});

