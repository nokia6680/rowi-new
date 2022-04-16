/* Validate Function */
function validate() {
    /* Get Values */
    let i1 = document.getElementById('phone-mail').value;
    let textError = document.querySelector('.form__error--mail');

    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;
    let patternMail = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;
    /* Phone Test */
    if (i1.match(patternTel)) {
        i1.classList.add('true');
        textError.classList.add('hidden');

    } else {
        i1.classList.add('invalid');
        textError.classList.remove('hidden');
        textError.innerHTML = "Ошибка в номере телефона";
    };

    /* Email Test */
    if (i1.match(patternMail)) {
        i1.classList.add('true');
        textError.classList.add('hidden');

    } else {
        i1.classList.add('invalid');
        textError.classList.remove('hidden');
        textError.innerHTML = "Ошибка в адресе электронной почты";
    };
}
