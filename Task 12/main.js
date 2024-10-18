document.addEventListener('DOMContentLoaded', function() {
    const textBtn = document.getElementById('textBtn');
    const headBtn = document.getElementById('headBtn');
    const buttonBtn = document.getElementById('buttonBtn');
    const inputBtn = document.getElementById('inputBtn');
    const textContent = document.getElementById('textContent');
    const textColor = document.getElementById('textColor');
    const textWidth = document.getElementById('textWidth');
    const textHeight = document.getElementById('textHeight');
    const textMargin = document.getElementById('textMargin');
    const textPadding = document.getElementById('textPadding');
    const fontFamily = document.getElementById('fontFamily');

    let currentElement = null; 

    function createElement(type) {
        let element;
        if (type === 'text') {
            element = document.createElement('p');
        } else if (type === 'head') {
            element = document.createElement('h1');
        } else if (type === 'button') {
            element = document.createElement('button');
            element.innerHTML = 'Submit'; 
        } else if (type === 'input') {
            element = document.createElement('input');
            element.setAttribute('placeholder', 'Enter text');
        }

        document.body.appendChild(element); 
        currentElement = element;

        updateElementStyles();
        return element; 
    }

    function updateElementStyles() {
        if (currentElement) {
            currentElement.style.color = textColor.value;
            currentElement.style.width = textWidth.value ? textWidth.value + 'px' : 'auto';
            currentElement.style.height = textHeight.value ? textHeight.value + 'px' : 'auto';
            currentElement.style.margin = textMargin.value ? textMargin.value + 'px' : '0';
            currentElement.style.padding = textPadding.value ? textPadding.value + 'px' : '0';
            currentElement.style.fontFamily = fontFamily.value;

            if (currentElement.tagName !== 'INPUT') {
                currentElement.innerHTML = textContent.value;
            }
        }
    }
    textBtn.addEventListener('click', () => {
        createElement('text');
        textContent.addEventListener('input', updateElementStyles);
    });
    headBtn.addEventListener('click', () => {
        createElement('head');
        textContent.addEventListener('input', updateElementStyles);
    });
    buttonBtn.addEventListener('click', () => {
        const newElement = createElement('button');
        newElement.innerHTML = textContent.value || 'Submit'; 
        textContent.addEventListener('input', () => {
            newElement.innerHTML = textContent.value; 
        });
    });
    inputBtn.addEventListener('click', () => {
        createElement('input');
    });
    textColor.addEventListener('input', () => {
        if (currentElement) {
            currentElement.style.color = textColor.value; 
        }
    });
    textWidth.addEventListener('input', () => {
        if (currentElement) {
            currentElement.style.width = textWidth.value + 'px'; 
        }
    });
    textHeight.addEventListener('input', () => {
        if (currentElement) {
            currentElement.style.height = textHeight.value + 'px'; 
        }
    });
    textMargin.addEventListener('input', () => {
        if (currentElement) {
            currentElement.style.margin = textMargin.value + 'px'; 
        }
    });
    textPadding.addEventListener('input', () => {
        if (currentElement) {
            currentElement.style.padding = textPadding.value + 'px'; 
        }
    });
    fontFamily.addEventListener('change', () => {
        if (currentElement) {
            currentElement.style.fontFamily = fontFamily.value; 
        }
    });
});
