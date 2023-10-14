//Sorting an Array 
var array = [];
for (var i = 0; i < 6; i++) {
  var num = parseInt(prompt("Enter a number:"));
  array.push(num);
}
var temp;
for (var i = 0; i < 6; i++) {
  for (var j = i + 1; j < 6; j++) {
    if (array[i] < array[j]) {
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  console.log(array[i]);
}
