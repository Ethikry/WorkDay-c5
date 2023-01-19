//Set variables
var colorCode = document.querySelectorAll(".color_code");
var saveBtn = document.querySelector(".saveBtn");
var inputNine = document.getElementById("nine");
var inputTen = document.getElementById("ten");
var inputEleven = document.getElementById("eleven");
var inputTwelve = document.getElementById("twelve");
var inputOne = document.getElementById("one");
var inputTwo = document.getElementById("two");
var inputThree = document.getElementById("three");
var inputFour = document.getElementById("four");
var inputFive = document.getElementById("five");

//Set current day
currentDay = document.querySelector("#currentDay");
currentDay.innerText = moment().format("LL");

//Set current time in hours
var now = moment().format("H");

function convertHours(value) {
  if (value == 9) {
    n = 0;
  } else if (value == 10) {
    n = 1;
  } else if (value == 11) {
    n = 2;
  } else if (value == 12) {
    n = 3;
  } else if (value == 13) {
    n = 4;
  } else if (value == 14) {
    n = 5;
  } else if (value == 15) {
    n = 6;
  } else if (value == 16) {
    n = 7;
  } else if (value == 17) {
    n = 8;
  } else if (value < 9) {
    n = -1;
  } else {
    n = 9;
  }
  return n;
}

//Color code formatting
now = convertHours(now);
for (var i = 0; now > i; i += 1) {
  colorCode[i].classList.add("past");
}

if (now == i) {
  colorCode[i].classList.add("present");
  i += 1;
}

for (i; i < colorCode.length; i += 1) {
  colorCode[i].classList.add("future");
}

//Persist function
function persistInput(input)
{
  var key = "input-" + input.id;

  var storedItem = localStorage.getItem(key);

  if (storedItem)
      input.value = storedItem;

  input.addEventListener('input', function ()
  {
      localStorage.setItem(key, input.value);
  });
}

persistInput(inputNine);
persistInput(inputTen);
persistInput(inputEleven);
persistInput(inputTwelve);
persistInput(inputOne);
persistInput(inputTwo);
persistInput(inputThree);
persistInput(inputFour);
persistInput(inputFive);
