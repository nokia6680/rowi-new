var telItems = document.getElementsByClassName('js-phone-input');
var elNodes = document.querySelectorAll(".js-phone-input");

var prefixNumber = function prefixNumber(str) {
    if (str === "7") {
        return "7 (";
    }

    if (str === "8") {
        return "7 (";
    }

    if (str === "9") {
        return "7 (9";
    }

    return "7 (";
};

for (var i = 0; i < telItems.length; i++) {
    var input = telItems[i];

    input.addEventListener("input", function(e) {
        var value = this.value.replace(/\D+/g, "");
        var numberLength = 11;
        var result;

        if (this.value == '+7 ' || this.value == '') {
            this.value = '';
            return false;
        }

        if (this.value.includes("+8") || this.value[0] === "8") {
            result = "+";
        } else {
            result = "+";
        } //


        for (var i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result += prefixNumber(value[i]);
                    continue;

                case 4:
                    result += ") ";
                    break;

                case 7:
                    result += "-";
                    break;

                case 9:
                    result += "-";
                    break;

                default:
                    break;
            }

            result += value[i];
        } //


        this.value = result;
    });
}

function validationTel() {
    let tel = document.getElementById('tel').value;
    let input = document.querySelector('.callback__input');
    let textTel = document.querySelector('.callback__error');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        textTel.classList.add('hidden');
        input.classList.remove('error');

    } else {
        textTel.classList.remove('hidden');
        textTel.innerHTML = "Ошибка в номере телефона";
        input.classList.add('error');
    }

    if (tel == '+') {
        textTel.innerHTML = "Это поле должно быть заполнено";
        input.classList.remove('error');
    }

    if (tel == '+7 (') {
        textTel.innerHTML = "Это поле должно быть заполнено";
        input.classList.remove('error');
    }

    if (tel == '') {
        textTel.innerHTML = "";
        textTel.classList.add('hidden');
        input.classList.remove('error');
    }
};

function validationOrderTel() {
    let tel = document.getElementById('order-tel').value;
    let input = document.getElementById('order-tel');
    let textTel = document.querySelector('.order-form__error--tel');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        textTel.classList.add('hidden');
        input.classList.remove('error');

    } else {
        textTel.classList.remove('hidden');
        textTel.innerHTML = "Ошибка в номере телефона";
        input.classList.add('error');
    }

    if (tel == '+') {
        textTel.innerHTML = "Это поле должно быть заполнено";
        input.classList.remove('error');
    }

    if (tel == '+7 (') {
        textTel.innerHTML = "Это поле должно быть заполнено";
        input.classList.remove('error');
    }

    if (tel == '') {
        textTel.innerHTML = "";
        textTel.classList.add('hidden');
        input.classList.remove('error');
    }
};

function validationCallbackTel() {
    let tel = document.getElementById('callback-form').value;
    let input = document.getElementById('callback-form');
    let textTel = document.querySelector('.callback-form__error');
    let patternTel = /^((\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\-]{7,10}$/;

    if (tel.match(patternTel)) {
        textTel.classList.add('hidden');
        input.classList.remove('error');

    } else {
        textTel.classList.remove('hidden');
        textTel.innerHTML = "Ошибка в номере телефона";
        input.classList.add('error');
    }

    if (tel == '+') {
        textTel.innerHTML = "Это поле должно быть заполнено";
        input.classList.remove('error');
    }

    if (tel == '+7 (') {
        textTel.innerHTML = "Это поле должно быть заполнено";
        input.classList.remove('error');
    }

    if (tel == '') {
        textTel.innerHTML = "";
        textTel.classList.add('hidden');
        input.classList.remove('error');
    }
};

function validationOrderMail() {
    let emailE = document.getElementById('order-mail').value;
    let emailEInput = document.getElementById('order-mail');
    let textMailE = document.querySelector('.order-form__error--mail');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (emailE.match(pattern)) {
        emailEInput.classList.add('hidden');
        emailEInput.classList.remove('error');
        textMailE.innerHTML = "";

    } else {
        emailEInput.classList.add('error');
        emailEInput.classList.remove('hidden');
        textMailE.innerHTML = "Поле должно содержать латинские буквы и @";
    }

    if (emailE == '') {
        emailEInput.classList.remove('error');
        emailEInput.classList.remove('hidden');
        textMailE.innerHTML = "";
    }
}

function validationSubscribeMail() {
    let emailE = document.getElementById('email').value;
    let emailEInput = document.getElementById('email');
    let textMailE = document.querySelector('.callback__error--subscribe');
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{1,3}$/;

    if (emailE.match(pattern)) {
        emailEInput.classList.add('hidden');
        emailEInput.classList.remove('error');
        textMailE.innerHTML = "";

    } else {
        emailEInput.classList.add('error');
        emailEInput.classList.remove('hidden');
        textMailE.innerHTML = "Поле должно содержать латинские буквы и @";
    }

    if (emailE == '') {
        emailEInput.classList.remove('error');
        emailEInput.classList.remove('hidden');
        textMailE.innerHTML = "";
    }
}
