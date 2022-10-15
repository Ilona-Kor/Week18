let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {errors.push('Поле' + input.placeholder + 'не заполнено');}
    if (validity.patternMismatch) {errors.push('Неверный формат заполнения');}
}

const registrate = document.querySelector ('#registrate');

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorsInfo').innerHTML=
    errors.join('. <br>');
}
registrate.addEventListener('click', checkAll);

const form = document.querySelector('form');
const emailInput = form.querySelector('#email');
const telInput = form.querySelector('#phoneNumber');

const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const phoneReg = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

const validateEmail = (email) => {
    return emailReg.test(email)
}

emailInput.addEventListener('input', (e) => {
    const val = e.target.value;
    console.log (validateEmail(val))
})

const validatePhone = (phone) => {
    return phoneReg.test(phone)
}

telInput.addEventListener('input', (e) => {
    const val = e.target.value;
    console.log(validatePhone(val))
})