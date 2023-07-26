// function changeCase(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (char === char.toUpperCase()) {
//         result += char.toLowerCase();
//       } else {
//         result += char.toUpperCase();
//       }
//     }
//     return result;
//   }
  
//   console.log(changeCase('qweRTY'));
//   console.log(changeCase('mAnGo')); 
//   console.log(changeCase('AjAx')); 
  

//   function isEven(num) {
//     return num % 2 === 0;
//   }
  
//   console.log(isEven(4));
//   console.log(isEven(3));
  
//   function myAverageScore(scores) {
//     const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
  
//     if (average >= 91 && average <= 100) {
//       console.log('My average score: A');
//     } else if (average >= 81 && average <= 90) {
//       console.log('My average score: B');
//     } else if (average >= 71 && average <= 80) {
//       console.log('My average score: C');
//     } else {
//       console.log('My average score: D');
//     }
//   }
  
//   console.log(myAverageScore([100, 75, 81, 96]));
//   console.log(myAverageScore([45, 63, 85, 70])); 
//   console.log(myAverageScore([77, 82, 60, 58]));
//   console.log(myAverageScore([93, 99, 93, 96])); 
  