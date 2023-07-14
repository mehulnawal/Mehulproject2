function addItem() {
    var li = document.createElement("li");
    li.innerHTML = prompt("Enter a new item");
    document.querySelector("ul").appendChild(li);
  }