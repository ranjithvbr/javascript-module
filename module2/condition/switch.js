var day = Math.round(6*Math.random());

console.log("Picked day number: " + day);

if(day === 0) {
  console.log('Monday');
}
if(day === 1) {
  console.log('Tuesday');
}
if(day === 2) {
  console.log('Wednesday');
} 
if(day === 3) {
  console.log('Thursday');
}
if(day === 4) {
  console.log('Friday');
}
if(day === 5) {
  console.log('Saturday');
}
if(day === 6) {
  console.log('Sunday');
}


if(day === 0) {
  console.log('Monday');
} else if(day === 1) {
  console.log('Tuesday');
} else if(day === 2) {
  console.log('Wednesday');
} else if(day === 3) {
  console.log('Thursday');
} else if(day === 4) {
  console.log('Friday');
} else if(day === 5) {
  console.log('Saturday');
} else if(day === 6) {
  console.log('Sunday');
}


switch(day) {
  case 0:
    console.log('Monday');
    break;
  case 1:
    console.log('Tuesday');
    break;
  case 2:
    console.log('Wednesday');
    break;
  case 3:
    console.log('Thursday');
    break;
  case 4:
    console.log('Friday');
    break;
  case 5:
    console.log('Saturday');
    break;
  case 6:
    console.log('Sunday');
    break;
}

switch(day) {
  case 0:
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('Week day: we go to work!');
    break;
  case 5:
  case 6:
    console.log('WEEK END!');
    break;
}

var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

console.log("DAY (using an array): " + daysOfWeek[day]);
