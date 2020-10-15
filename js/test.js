// var time = new Date(),

//   sec = time.getSeconds(),
//   mins = time.getMinutes(),
//   div = document.querySelector("div"),
//   secpass,
//   countDown = setInterval(function () {
//     secpass();
//   }, 1000);
// // Will Call secpass() Evrey 1s;
// // ------------------------------------------------------------------------------------------------------

// function secpass() {
// //   var min = Math.floor(sec / 60), // 119 / 60 =  1.98
//     realSec = sec % 60; // calc real seconds

//   if (sec < 10) {
//     realSec = "0" + realSec; // Put '0' Before sec
//   }
//   if(mins < 10 )
//   {
//     mins = "0" + mins;
//   }

//   div.innerHTML =  mins + ":" + realSec; // Show Value into div
// // ------------------------------------------------------------------------------------------------------
//   if (mins !== 0)  { // if minutes Not Equal 0
//     sec--; // minus 1  from Seconds
//     if (sec == 0)  { // if Seconds Not Equal 0
//       mins--;  // minus 1  from Minutes
//       sec = 59; 
//     }
// // ------------------------------------------------------------------------------------------------------

//   } else { // If Minutes = 0
//     if (mins == 0) { // If Minutes = 0
//       sec--; // minus 1  from Seconds
// // ------------------------------------------------------------------------------------------------------

//       {
//         if (sec == 0) {
//           setTimeout(function () { // Used setTimeOut cause when second = 0 The Value into div being 01 , so i used it for waitn one second more to clearInterval
//             clearInterval(countDown);
//             div.textContent = "done..";
//           }, 1000);
//         }
// // ------------------------------------------------------------------------------------------------------

//       }
//     }
//   }
// }

// secpass();
