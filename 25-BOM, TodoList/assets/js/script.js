// const setTime = () => {
//   let h5 = document.querySelector("h5");
//   h5.textContent = "Loading....";
// };

// let time = setTimeout(setTime, 2000);

// // clearTimeout(time);
// let count = 0;
// let test = setInterval(() => {
//   count++;
//   console.log(count);
//   if (count == 5) {
//     clearInterval(test);
//   }
// }, 1000);
// let h1 = document.querySelector("h1");

// setInterval(() => {
//   let date = new Date();

//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let seconds = date.getSeconds();

//   let ampm = hours >= 12 ? "PM" : "AM";
//   hours = hours % 12;
//   hours = hours ? hours : 12;

//   hours = hours < 10 ? "0" + hours : hours;
//   minutes = minutes < 10 ? "0" + minutes : minutes;
//   seconds = seconds < 10 ? "0" + seconds : seconds;

//   h1.textContent = `${hours}: ${minutes}: ${seconds} ${ampm}`;
// });

// let loadingItem = document.querySelector(".loadingItem");
// let loadingCount = document.querySelector(".count");
// let loadingWidth = 0;

// let loading = setInterval(() => {
//   loadingWidth++;
//   loadingItem.style.width = loadingWidth + "%";
//   loadingCount.textContent = loadingWidth + "%";

//   if (loadingWidth < 25) {
//     loadingItem.style.backgroundColor = "red";
//   } else if (loadingWidth >= 25 && loadingWidth < 50) {
//     loadingItem.style.backgroundColor = "orange";
//   } else if (loadingWidth >= 50 && loadingWidth < 75) {
//     loadingItem.style.backgroundColor = "greenyellow";
//   } else if (loadingWidth >= 75 && loadingWidth < 100) {
//     loadingItem.style.backgroundColor = "green";
//   }
//   if (loadingWidth == 100) {
//     clearInterval(loading);
//   }
// }, 30);
