const TEXTS = [
    {
        main:'戦う',
        under: 'Tatakae',
    },
    {
        main:'お早う',
        under: 'Ohayou',
    },
    {
        main:'E = mc<sup>2</sup>',
    },
    {
        main:'Niuuuuuuuuuuuuuuuuuuu',
    },
    {
        main:'お早う',
        under: 'Ohayou',
    },
    {
        main:'七',
        under: 'Shichi',
    },
]


const mainText = document.querySelector('#main-text'),
    underText = document.querySelector('#under-text');

const INTERVAL_TIMEOUT = 1000 * 60 * 15;

let currentTextIndex = undefined;

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomText() {
    let randomTextIndex = getRandomIntInclusive(0, TEXTS.length);
    return randomTextIndex;
}

function getUniqueRandomText() {
    let randomTextIndex = getRandomText();
    while (randomTextIndex == currentTextIndex) randomTextIndex = getRandomText();
    return randomTextIndex;
}

function getNewText() {
    let newTextIndex = getUniqueRandomText();
    let { main, under } = TEXTS[newTextIndex];
    let obj = {
        main: main ?? '',
        under: under ?? '',
    };
    return obj;
}

function setInAppContent() {
    let newText = getNewText();

    mainText.innerHTML = newText.main;
    underText.innerHTML = newText.under;
}

setInAppContent();
setInterval(setInAppContent, INTERVAL_TIMEOUT);
