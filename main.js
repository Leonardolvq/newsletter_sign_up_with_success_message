
const mainContent = document.querySelector('.main__content');
const validation = document.querySelector('.validation');

const form = document.querySelector('.form');

const emailInput = document.getElementById('email');

function checkError(event) {    
    event.preventDefault();

    const email = emailInput.value;

    if (!emailInput.checkValidity()) {
        document.querySelector('.form__error__message').style.display = 'block';
        document.querySelector('.form__input').classList.add('error');

    } else if (emailInput.checkValidity()){
        document.getElementById('client__email').textContent = email;
        
        mainContent.classList.add('disabled');
        validation.classList.remove('disabled');
    }
}

function reset(event){
    event.preventDefault();

    mainContent.classList.remove('disabled');
    validation.classList.add('disabled');
    emailInput.value = '';
}

const decorationImg = document.querySelector('.decoration__img');
const mediaQuery = window.matchMedia("(min-width: 768px)");

function changeImg(mediaQuery) {
    if (mediaQuery.matches) {
        
        decorationImg.src = "./assets/images/illustration-sign-up-desktop.svg";
        decorationImg.alt = "Image desktop";
    } else {
        // Si le média query n'est pas activé (la largeur de la fenêtre est < 768px)
        decorationImg.src = "./assets/images/illustration-sign-up-mobile.svg";
        decorationImg.alt = "Image mobile";
    }
}

changeImg(mediaQuery);
mediaQuery.addListener(changeImg);

