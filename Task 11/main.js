function decimalToBinary(decimal) {
    let binary = '';
    while (decimal > 0) {
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}

let userName = localStorage.getItem('userName') || prompt("Please enter your name:");
localStorage.setItem('userName', userName);

document.body.innerHTML += `
    > Hello ${userName},<br>
    > Ready ?!<br>
    > Welcome to Binary world !<br>
    > Enjoy with this little task !<br><br>
`;

function generateBinaryLine(length) {
    let binaryLine = '';
    for (let i = 0; i < length; i++) {
        let randomDecimal = Math.floor(Math.random() * 512);
        binaryLine += decimalToBinary(randomDecimal);
    }
    return binaryLine;
}

for (let i = 0; i < 30; i++) {
    document.body.innerHTML += generateBinaryLine(15) + '<br>';
}