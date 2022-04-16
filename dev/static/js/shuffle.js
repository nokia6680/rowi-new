var ctaTitles = [
    "Ещё сомневаешься?",
    "Не нашел нужную вакансию?",
    "Не хватает опыта?",
    "Живешь в другом городе?",
    "Остались вопросы?",
    "Хочешь увидеть офис и будущих коллег?",
    "Хочешь пообщаться?",
    "Хочешь узнать больше?",
    "Не из IT, но хочешь в команду?"
];

var ctaLinksClasses = [
    "secondLine",
    "thirdLine",
    "fourthLine"
];

function reloadText() {
    var ctaTitleWrap = document.querySelector('.cta__title');
    var ctaDescriptionsWrap = document.querySelector('.cta__description');
    var ctaLinksWrap = document.querySelector('.cta__link');
    var ctaBlock = document.querySelector('.cta__button');
    var ctaWrapper = document.querySelector('.cta__wrapper');
    var ctaTitleItem = ctaTitles[Math.floor(Math.random() * ctaTitles.length)];
    var ctaLinksDecoration = ctaLinksClasses[Math.floor(Math.random() * ctaLinksClasses.length)];

    ctaTitleWrap.innerHTML = ctaTitleItem;

    setTimeout(reloadText, 5000);
    ctaWrapper.classList.add('loaded');

    setTimeout(function() {
        return ctaWrapper.classList.remove('loaded');
    }, 6444);

    class AccentTypographyBuild {
        constructor(
            elementSelector,
            timer,
            classForActivate,
            property
        ) {
            this._TIME_SPACE = 100;

            this._elementSelector = elementSelector;
            this._timer = timer;
            this._classForActivate = classForActivate;
            this._property = property;
            this._element = document.querySelector(this._elementSelector);
            this._timeOffset = 0;

            this.prePareText();
        }

        createElement(letter) {
            const span = document.createElement(`span`);
            span.textContent = letter;
            span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;
            this._timeOffset += 20;
            return span;
        }

        prePareText() {
            if (!this._element) {
                return;
            }
            const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== '');

            const content = text.reduce((fragmentParent, word) => {
                const wordElement = Array.from(word).reduce((fragment, latter) => {
                    fragment.appendChild(this.createElement(latter));
                    return fragment;
                }, document.createDocumentFragment());
                const wordContainer = document.createElement(`span`);
                wordContainer.classList.add(`cta__word`);
                wordContainer.appendChild(wordElement);
                fragmentParent.appendChild(wordContainer);
                return fragmentParent;
            }, document.createDocumentFragment());

            this._element.innerHTML = ``;
            this._element.appendChild(content);
        }

        runAnimation() {
            if (!this._element) {
                return;
            }
            this._element.classList.add(this._classForActivate);
        }

        destroyAnimation() {
            this._element.classList.remove(this._classForActivate);
        }
    }

    const animationTopScreenTextLine = new AccentTypographyBuild(`.cta__title`, 500, `active`, `transform`);
    setTimeout(() => {
        animationTopScreenTextLine.runAnimation();
    }, 500);

    setTimeout(() => {
        animationTopScreenTextLine.destroyAnimation();
    }, 4888);

    if (ctaTitleItem === 'Ещё сомневаешься?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Просто '
        ctaLinksWrap.innerHTML = 'напиши!';
        ctaLinksWrap.setAttribute('data-type', ctaLinksDecoration);
    }

    if (ctaTitleItem === 'Не нашел нужную вакансию?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Все равно '
        ctaLinksWrap.innerHTML = 'пиши!';
        ctaLinksWrap.setAttribute('data-type', ctaLinksDecoration);
    }

    if (ctaTitleItem === 'Не хватает опыта?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Все равно '
        ctaLinksWrap.innerHTML = 'пиши!';
        ctaLinksWrap.setAttribute('data-type', ctaLinksDecoration);
    }

    if (ctaTitleItem === 'Живешь в другом городе?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Все равно '
        ctaLinksWrap.innerHTML = 'напиши!';
        ctaLinksWrap.setAttribute('data-type', ctaLinksDecoration);
    }

    if (ctaTitleItem === 'Остались вопросы?') {
        ctaBlock.setAttribute('data-type', 'firstLine');
        ctaDescriptionsWrap.innerHTML = ''
        ctaLinksWrap.innerHTML = 'Напиши нам!';
        ctaLinksWrap.setAttribute('data-type', 'firstLine');
    }

    if (ctaTitleItem === 'Хочешь увидеть офис и будущих коллег?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Действуй - '
        ctaLinksWrap.innerHTML = 'пиши!';
        ctaLinksWrap.setAttribute('data-type', ctaLinksDecoration);
    }

    if (ctaTitleItem === 'Хочешь пообщаться?') {
        ctaBlock.setAttribute('data-type', 'firstLine');
        ctaDescriptionsWrap.innerHTML = 'Просто '
        ctaLinksWrap.innerHTML = 'напиши нам!';
        ctaLinksWrap.setAttribute('data-type', 'firstLine');
    }

    if (ctaTitleItem === 'Хочешь узнать больше?') {
        ctaBlock.setAttribute('data-type', ctaLinksDecoration);
        ctaDescriptionsWrap.innerHTML = 'Скорее '
        ctaLinksWrap.innerHTML = 'пиши!';
        ctaLinksWrap.setAttribute('data-type', ctaLinksDecoration);
    }

    if (ctaTitleItem === 'Не из IT, но хочешь в команду?') {
        ctaBlock.setAttribute('data-type', 'firstLine');
        ctaDescriptionsWrap.innerHTML = ''
        ctaLinksWrap.innerHTML = 'Напиши нам!';
        ctaLinksWrap.setAttribute('data-type', 'firstLine');
    }

    const animationTopScreenTextTitle = new AccentTypographyBuild(`.cta__description`, 400, `active`, `transform`);
    setTimeout(() => {
        animationTopScreenTextTitle.runAnimation();
    }, 1000);

    setTimeout(() => {
        animationTopScreenTextTitle.destroyAnimation();
    }, 4500);

    const animationTopScreenTextLink = new AccentTypographyBuild(`.cta__link`, 400, `active`, `transform`);
    setTimeout(() => {
        animationTopScreenTextLink.runAnimation();
    }, 1000);

    setTimeout(() => {
        animationTopScreenTextLink.destroyAnimation();
    }, 4500);

    const svgCont = document.querySelector('.cta__underline--desktop');

    setTimeout(() => {
        svgCont.classList.add('visible');
    }, 1300);

    setTimeout(() => {
        svgCont.classList.remove('visible');
    }, 4700);
}

reloadText();
