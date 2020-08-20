'use strict';

(function() {
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон']
    var WIZARD_SECOND_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг']
    var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)']
    var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green']
    var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
    
    var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
    var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    var fireball = document.querySelector('.setup-fireball-wrap');

    function arrayRandElement(arr) {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    wizardCoat.addEventListener('click', function() {
        wizardCoat.style.fill = arrayRandElement(WIZARD_COAT_COLORS);
    });

    wizardEyes.addEventListener('click', function() {
        wizardEyes.style.fill = arrayRandElement(WIZARD_EYES_COLORS);
    });

    fireball.addEventListener('click', function() {
        fireball.style.backgroundColor = arrayRandElement(FIREBALL_COLORS);
    });

    document.querySelector('.setup-similar').classList.remove('hidden');

    var similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

    var wizards = [
        {
            name: arrayRandElement(WIZARD_NAMES) + ' ' + arrayRandElement(WIZARD_SECOND_NAMES),
            coatColor: arrayRandElement(WIZARD_COAT_COLORS),
            eyesColor: arrayRandElement(WIZARD_EYES_COLORS)
        },
        {
            name: arrayRandElement(WIZARD_NAMES) + ' ' + arrayRandElement(WIZARD_SECOND_NAMES),
            coatColor: arrayRandElement(WIZARD_COAT_COLORS),
            eyesColor: arrayRandElement(WIZARD_EYES_COLORS)
        },
        {
            name: arrayRandElement(WIZARD_NAMES) + ' ' + arrayRandElement(WIZARD_SECOND_NAMES),
            coatColor: arrayRandElement(WIZARD_COAT_COLORS),
            eyesColor: arrayRandElement(WIZARD_EYES_COLORS)
        },
        {
            name: arrayRandElement(WIZARD_NAMES) + ' ' + arrayRandElement(WIZARD_SECOND_NAMES),
            coatColor: arrayRandElement(WIZARD_COAT_COLORS),
            eyesColor: arrayRandElement(WIZARD_EYES_COLORS)
        }
    ]

    for (var i = 0; i < wizards.length; i++) {
        var wizardElement = similarWizardTemplate.cloneNode(true);

        wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

        similarListElement.appendChild(wizardElement);
    }
})();