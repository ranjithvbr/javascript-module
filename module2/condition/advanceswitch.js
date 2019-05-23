
var num = 10;
if (num == 10) {
    num = 20;
}

console.log('if statement,\n num>> ' + num);

var num = 10;
if (num > 10) {
    num = 20;
} else {
    num = 0;
}

console.log('if-else statement,\n num>> ' +num);

var max;
var min;

if (min){
    max = min + 10;
} else {
    max = 10;
}
console.log('question1, \n max>> ' + max);

var gear = '';

var cloudColor = 'black';
switch(cloudColor) {
    case 'green': gear += 'spacesuit';
        break;
    case 'black': gear += 'boots, ';

    case 'grey': gear += 'umbrella, ';

    case 'white': gear += 'jacket, ';

    default: gear += 'watch';
}

console.log('switch2,\n gear >> ' + gear);
var gear = '';
var cloudColor = 'black';
switch(cloudColor) {
    case 'green':
      gear += 'spacesuit';
      break;
    case 'black':
      gear += 'boots, ';
      break;
    case 'grey':
      gear += 'umbrella, ';
      break;
    case 'white':
      gear += 'jacket, ';
      break;
    default:
      gear += 'watch';
}

console.log('swtich3,\n gear >> ' + gear);
