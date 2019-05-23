// window.addEventListener('click', processClick);
//
// function processClick(event) {
//   document.body.innerHTML += "Button clicked<br>";
// }
// window.addEventListener('click', function(evt) {
//   document.body.innerHTML += "Button clicked version 2<br>";
// });


// var sum = function(a, b) {
//   return (a + b);
// };
//
// var displayInPage = function(message, value) {
//   document.body.innerHTML += message + value + "<br>";
// };
//
// var result = sum(3, 4);
// displayInPage("Result: ", result);
//
// displayInPage("Result: ", sum(10, 15));
<!doctype html>
 <html>
 <head lang="en">
   <title>Function part 1</title>
 </head>
 <body>
   <script>
     var sum = function(a, b) {
       return (a + b);
     };
     var displayInPage = function(message, value) {
      document.body.innerHTML += message + value + "<br>";
     };

     var result = sum(3, 4);
     displayInPage("Result: ", result);

     displayInPage("Result: ", sum(10, 15));
   });
   </script>

 </body>
 </html>
