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

// Version one with lots of variables 
let emotionOutput;
let n = 1;
let divBy3 = n / 3;
let divBy5 = n / 5;

for (n = 1; n <= 100; n++) {
    Number.isInteger(divBy3) && Number.isInteger(divBy5) ? emotionOutput = 'Happy and sad' :
        Number.isInteger(divBy3) ? emotionOutput = 'Happy' :
        Number.isInteger(divBy5) ? emotionOutput = 'Sad' :
        emotionOutput = n;
    console.log(emotionOutput);
}

// Version two 

for (n = 1; n <= 100; n++) {
    Number.isInteger(n / 3) && Number.isInteger(n / 5) ? console.log(`Happy and Sad (${n})`) :
        Number.isInteger(n / 3) ? console.log(`Happy (${n})`) :
        Number.isInteger(n / 5) ? console.log(`Sad (${n})`) :
        console.log(n);
}