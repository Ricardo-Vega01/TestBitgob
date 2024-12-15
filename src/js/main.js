//Parametros del carousel
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

//Funcionalidad Linea del tiempo
(function () {
    "use strict";
    var items = document.querySelectorAll(".timeline li");

    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
})();

/*Validacion y envio de formulario*/
const formEmail = document.querySelector('form');
formEmail.addEventListener('submit', sendInfo);

const emailService = 'service_jivzuor';
const templateService = 'template_afynmhb';
const accountKey = 'XQE0HsDOR5mO2xYtk';

function sendInfo(event) {
    event.preventDefault();
    emailjs.init(emailService);

    emailjs.sendForm(emailService, templateService, formEmail, accountKey).then(
        (result) => alert("Mensaje enviado con exito."), formEmail.reset())
    .catch(
        (error) => {
            alert("Tuvimos un error al enviar la informacion, por favor intentelo mas tarde.");
            formEmail.reset();
        }
    );
}