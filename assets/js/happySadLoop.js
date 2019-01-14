/*for (n = 1; n <= 100; n++) {
    if (Number.isInteger(n / 3) && Number.isInteger(n / 5)) {
        console.log('Happy and Sad');
    } else if (Number.isInteger(n / 3)) {
        console.log('Happy');
    } else if (Number.isInteger(n / 5)) {
        console.log('Sad');
    } else {
        console.log(n);
    }
}*/

for (n = 1; n <= 100; n++) {
    Number.isInteger(n / 3) && Number.isInteger(n / 5) ? console.log('Happy and Sad') :
        Number.isInteger(n / 3) ? console.log('Happy') :
        Number.isInteger(n / 5) ? console.log('Sad') :
        console.log(n);
}