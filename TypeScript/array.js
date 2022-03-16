var average = function (arr) { return arr.reduce(function (a, b) { return a + b; }, 0) / arr.length; };
var isPrime = function (num) {
    for (var i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0)
            return false;
    return num > 1;
};
var arr = Array();
var arrPrime = Array();
var num;
for (var i = 1; i <= 20; i++) {
    num = Math.floor(Math.random() * 100) + 1;
    while (arr.includes(num)) {
        num = Math.floor(Math.random() * 100) + 1;
    }
    arr.push(num);
}
var max = Math.max.apply(Math, arr);
var min = Math.min.apply(Math, arr);
arr.forEach(function (element) {
    if (isPrime(element)) {
        arrPrime.push(element);
    }
});
console.log('Array: ' + arr);
console.log('Número mínimo: ' + min + " [" + arr.indexOf(min) + "]");
console.log('Número máximo: ' + max + " [" + arr.indexOf(max) + "]");
console.log('Media: ' + Math.round(average(arr)));
console.log('Array ordenado: ' + arr.sort());
console.log('Array primos: ' + arrPrime.sort());
