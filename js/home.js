const homeBtn = document.getElementById("home-btn");
homeBtn.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "./index.html";
});
