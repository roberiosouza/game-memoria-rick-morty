const input_login = document.querySelector(".login-name");
const button_login = document.querySelector(".login-button");
const form_login = document.querySelector(".login-form");

const validadeInput = ({target}) => {

    if (target.value.length > 2) {
        button_login.removeAttribute('disabled');
        return;
    }       

    button_login.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input_login.value);

    window.location ='pages/game.html';
}

input_login.addEventListener('input', validadeInput);
form_login.addEventListener('submit', handleSubmit);