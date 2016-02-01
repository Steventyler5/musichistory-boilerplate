var listLink = document.getElementById("list-music");
var listView = document.getElementById("returned-songs");
var formView = document.getElementById("selection-form")

var viewList = function() {
  addView.classList.add("hidden");
  addView.classList.remove("visible");

  listView.classList.remove("hidden");
  formView.classList.remove("hidden");

  listView.classList.add("visible");
  formView.classList.add("visible");
};

listLink.addEventListener("click", viewList());