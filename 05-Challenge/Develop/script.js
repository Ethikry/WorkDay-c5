//Set variable
var colorCode = document.querySelectorAll(".color_code");
var saveBtn = document.querySelector(".saveBtn");

//Set current day
currentDay = document.querySelector("#currentDay");
currentDay.innerText = moment().format("LL");

//Set current time in hours
var now = moment().format("H");

//Color code formatting
for (var i = 0; now > i; i += 1) {
  colorCode[i].classList.add("past");
}

if ((now = i)) {
  colorCode[i].classList.add("present");
  i += 1;
}

for (i; i < colorCode.length; i += 1) {
  colorCode[i].classList.add("future");
}

//Save function, called on button click
function save(value) {
  console.log(value);
}