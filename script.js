let buttons = document.querySelectorAll('.key');

let calDisplay = document.querySelector('.output');

buttons.forEach((key) => {

    key.addEventListener('click', () => {

        let keyText = key.textContent.trim();

        if ((calDisplay.textContent === "error" || calDisplay.textContent === "undefined") && keyText !== "AC") {
            return;
        }


        if (keyText === "AC") {

            calDisplay.textContent = '0';

            return;
        }

        if (keyText === '=') {
            if (calDisplay.textContent === '0' || calDisplay.textContent === '') {
                calDisplay.textContent = 'error';
            } else {
                calDisplay.textContent = eval(calDisplay.textContent);
            }
            return;
        }

        let lastItem = calDisplay.textContent.slice(-1);
        let operators = ['+', '-', '/', '*', '.', '%', '+/-'];

        if (operators.includes(lastItem) && operators.includes(keyText)) {
            return;
        }

        if (calDisplay.textContent === '0') {
            calDisplay.textContent = keyText;
        } else {
            calDisplay.textContent = calDisplay.textContent + keyText;
        }

        if (calDisplay.textContent.length > 9) {
            calDisplay.textContent = 'undefined';
        } else if (calDisplay.textContent.length >= 8) {
            calDisplay.style.fontSize = '3rem';
        } else {
            calDisplay.style.fontSize = '4rem';
        }


    })
})



document.addEventListener("keydown", (event) => {
    let key = event.key;

    if ((calDisplay.textContent === "error" || calDisplay.textContent === "undefined") && key !== "Escape") {
        return;
    }

    if (key === "Escape") {
        calDisplay.textContent = "0";
        return;
    }

    if (key === "Enter") {
        if (calDisplay.textContent === "0" || calDisplay.textContent === "") {
            calDisplay.textContent = "error";
        } else {
            calDisplay.textContent = eval(calDisplay.textContent);
        }
        return;
    }

    let operators = ['+', '-', '/', '*', '.', '%',];

    if (operators.includes(key) || /\d/.test(key)) {
        let lastItem = calDisplay.textContent.slice(-1);

        if (operators.includes(lastItem) && operators.includes(key)) {
            return;
        }

        if (calDisplay.textContent === "0") {
            calDisplay.textContent = key;
        } else {
            calDisplay.textContent += key;
        }
    }

    if (calDisplay.textContent.length > 9) {
        calDisplay.textContent = "undefined";
    } else if (calDisplay.textContent.length >= 8) {
        calDisplay.style.fontSize = "3rem";
    } else {
        calDisplay.style.fontSize = "4rem";
    }
});
