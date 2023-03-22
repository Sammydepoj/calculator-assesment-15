let result = document.getElementById("result");
const equal = document.getElementById("equal");

let buttons = document.querySelectorAll(".btn");

let clear = document.getElementById("clear");

// console.log(buttons);

for (let i = 0; i < buttons.length; i++) {
  let self = buttons[i];

  self.addEventListener("click", function (e) {
    // console.log(e.target.value);

    result.innerHTML += e.target.value;

    equal.addEventListener("click", function () {
      result.innerHTML = eval(result.innerHTML);
    });
  });
}
clear.onclick = function () {
  result.innerHTML = "0";
};
