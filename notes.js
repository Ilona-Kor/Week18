let errors = [];
function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {errors.push('Поле' + input.placeholder + 'не заполнено');}
    if (validity.patternMismatch) {errors.push('Неверный формат заполнения');}
}

const buttonSave = document.querySelector ('#button-save');

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");

    for (let input of inputs) {
        checkValidity(input);
    }

    document.getElementById('errorsInfo').innerHTML=
    errors.join('. <br>');
}
buttonSave.addEventListener('click', checkAll);

