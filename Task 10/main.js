function showMultiplicationTable(num) {
    console.log("Multiplication Table for " + num + ":");
    for (let i = 1; i <= 12; i++) {
        console.log(num + " * " + i + " = " + (num * i));
    }
}

function checkEvenOrOdd(num) {
    console.log(num + " is " + (num % 2 === 0 ? "an even" : "an odd") + " number.");
}

function createStars(count) {
    let result = '';
    for (let i = 0; i < count; i++) {
        result += '*';
    }
    return result;
}

function showStarPattern(num) {
    let stars = '';

    for (let i = 1; i <= num; i++) {
        stars += createStars(i * 2 - 1) + '<br>';
    }

    for (let i = num; i >= 1; i--) {
        stars += createStars(i * 2 - 1) + '<br>';
    }

    stars += createStars(num * 2 - 1) + '<br>';
    stars += createStars(num * 2 - 1) + '<br>';

    document.write('<div class="star-pattern">' + stars + '</div>');
    document.write('<style> .star-pattern { text-align: center; font-family: monospace; white-space: pre-wrap; } </style>');
}

let number = prompt("Please enter a number:");

if (!isNaN(number) && number > 0) {
    showStarPattern(number);
    showMultiplicationTable(number);
    checkEvenOrOdd(number);
} else {
    console.log("No valid number entered.");
}
