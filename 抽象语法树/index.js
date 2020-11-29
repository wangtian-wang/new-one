var a = 0,
current = 0;

while ( a < 10) {
    current++;
    a++;
    continue;
    console.log(a, 'in side');
}
console.log(a, 'out side');
let b = a + 12;
