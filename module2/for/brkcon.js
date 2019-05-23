var tab = ['michel', 'john', 'donald', 'paul'];

function isNameInTheArray(name, theArray) {
    console.log("Number of elements in the array : " + theArray.length);
    for(var i=0; i < theArray.length; i++) {
        console.log('comparing with element in the array at pos ' + i);

        if(theArray[i] === name) {
           console.log('the name ' + name +
                       ' is in the array at pos: ' + i);
          break;
        } else {
           console.log(name + ' is not at pos ' + i);
        }
    }
}

isNameInTheArray('john', tab);
// -------------------------------------------

for(var i = 1, k = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }

    k += 2*i;
    console.log('k += ' + (2*i));
}
console.log('Final k value:' + k)
