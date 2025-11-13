const boxes = document.querySelectorAll(".box");
const inputs = document.querySelectorAll(".color-input");
document.querySelector("#changeButton")
.addEventListener("click", function() {
  for(let i = 0; i < inputs.length; i++) {
    boxes[i].style.backgroundColor = inputs[i].value;
  }
});