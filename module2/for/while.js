

var n = 1, m = 1;

while (n < 4) {
    console.log("n = " + n)
    console.log("m = " + m)
    n += 1;
    m += n;
}
console.log("While loop, at the end n=" + n + " and m=" + m);

// -------------------------------------------------------------------------------
var i = 0;

do {
    console.log('i = ' + i);
    i++;
} while(i < 20);

console.log('Value of i after the do-while statement: ' + i);
// ------------------------------------------------------------------------------

for(var i=0; i < 5; i+=2) {
  console.log(i);
}

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

for(var i=0; i < daysOfWeek.length; i++) {
  console.log(daysOfWeek[i]);
}

var a = [
 [1,2],
 [3,4],
 [5,6]
];
console.log(a[2][1]);
console.log(a[1][0]);
console.log(a.length);

for (var i=0; i < a.length; i++) {
 for (var j=0; j < a[i].length; j++) {
   console.log(a[i][j]);
 }
}
// ------------------------------------------------------------------------------

var michel = {
    familyName:'Buffa',
    givenName: 'Michel',
    age: 51
}

for(var property in michel) {

    console.log(property);

    console.log(michel[property]);

}
