var addLink = document.getElementById("add-music");
var addView = document.getElementById("add-view");

addLink.addEventListener("click", function() {
  addView.classList.add("visible");
  addView.classList.remove("hidden");

 listView.classList.add("hidden");
 formView.classList.add("hidden");

 listView.classList.remove("visible");
 formView.classList.remove("visible");

});