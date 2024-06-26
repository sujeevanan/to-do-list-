// select  the input and make a element and repeat teh task this should happen once the button is on click
var inputText = document.getElementById("inputText");
var listItems = document.querySelector(".listItems");

function add() {
  if (inputText.value === "") {
    alert("you must write something");
  } else {
    var list = document.createElement("li");
    list.innerHTML = inputText.value;
    listItems.appendChild(list);
    inputText.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    list.appendChild(span);
    saveData();
  }
  listItems.addEventListener(
    "click",
    function (event) {
      if (event.target.tagName === "LI") {
        event.target.classList.toggle("checked");
        saveData();
      } else if (event.target.tagName === "SPAN") {
        event.target.parentElement.remove();
        saveData();
      }
    },
    false
  );
}
function saveData() {
  localStorage.setItem("data", listItems.innerHTML);
}
function showData() {
  listItems.innerHTML = localStorage.getItem("data");
}
showData();
