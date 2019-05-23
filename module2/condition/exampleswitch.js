
var foo=5;

var bar1,bar2,bar3;

if(foo===1){
  bar1='one';
}
else if(foo===2){
  bar1='two';
}
else{
  bar1='something';
}


bar2 = (foo===1)?'one':(foo===2)?'two':'something';


switch(foo){
  case 1 :
    bar3='one';
    break;
  case 2 :
    bar3 ='two';
    break;
  default:
    bar3 ='something';
}

console.log('example1,\n bar1 >> ' + bar1);
console.log('example2,\n bar2 >> ' + bar2);
console.log('example3,\n bar3 >> ' + bar3);
