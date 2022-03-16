const average = arr => arr.reduce((a,b) => a + b, 0) / arr.length;

const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}

let arr: number[] = Array<number>();
let arrPrime: number[] = Array<number>();
let num: number;

for (let i = 1; i <= 20; i++) {
    num = Math.floor(Math.random() * 100) + 1;
    while(arr.includes(num)) {
        num = Math.floor(Math.random() * 100) + 1;
    }
    arr.push(num);
}

let max: number = Math.max(...arr);
let min: number = Math.min(...arr);

arr.forEach(element => {
    if(isPrime(element)) {
        arrPrime.push(element);
    }
});

console.log('Array: ' + arr);
console.log('Número mínimo: ' + min + " [" + arr.indexOf(min) + "]");
console.log('Número máximo: ' + max + " [" + arr.indexOf(max) + "]");
console.log('Media: ' + Math.round(average(arr)));
console.log('Array ordenado: ' + arr.sort());
console.log('Array primos: ' + arrPrime.sort());