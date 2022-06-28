function writeCards(names, event) {
    const thankYous = [];

    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        debugger;
    }

    return thankYous;
}

function countDown(num) {
    while(num + 1) {
        console.log(num);
        num -= 1;
    }
}

countDown(10);