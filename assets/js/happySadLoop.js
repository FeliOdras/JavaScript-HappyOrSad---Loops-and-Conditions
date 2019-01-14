for (i = 1; i <= 100; i++) {
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
        console.log('Happy and Sad');
    } else if (Number.isInteger(i / 3)) {
        console.log('Happy');
    } else if (Number.isInteger(i / 5)) {
        console.log('Sad');
    } else {
        console.log(i);
    }
}