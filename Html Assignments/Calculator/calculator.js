// let string = "";
// let buttons = document.querySelectorAll('.button');
// let inputField = document.querySelector('input');

// Array.from(buttons).forEach((button) => {
//   button.addEventListener('click', (e) => {
//     if (e.target.innerHTML == '=') {
//       string = eval(string);
//       inputField.value = string;
//     } else if (e.target.innerHTML == 'C') {
//       string = "";
//       inputField.value = string;
//     } else if (e.target.innerHTML == 'OFF') {
//       inputField.value = "Thank You For Using!!";
//       setTimeout(() => {
//         inputField.value = "";
//       }, 2000);
//     } else if (e.target.innerHTML == 'ON') {
//       inputField.value = "Math is Fun. Let's Begin!!";
//       setTimeout(() => {
//         inputField.value = "";
//       }, 2000);
//     } else {
//       console.log(e.target);
//       string = string + e.target.innerHTML;
//       inputField.value = string;
//     }
//   });
// });

let string = "";
let buttons = document.querySelectorAll('.button');
let inputField = document.querySelector('input');
let calculatorOn = true;

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (calculatorOn) {
      if (e.target.innerHTML == '=') {
        string = eval(string);
        inputField.value = string;
      } else if (e.target.innerHTML == 'C') {
        string = "";
        inputField.value = string;
      } else if (e.target.innerHTML == 'OFF') {
        inputField.value = "Calculator turned OFF. Thank You For Using!!";
        calculatorOn = false;
        setTimeout(() => {
          inputField.value = "";
        }, 2000);
      } else {
        string = string + e.target.innerHTML;
        inputField.value = string;
      }
    } else if (e.target.innerHTML == 'ON') {
      inputField.value = "Calculator turned ON. Math is Fun. Let's Begin!!";
      calculatorOn = true;
      setTimeout(() => {
        inputField.value = "";
      }, 2000);
    }
  });
});


