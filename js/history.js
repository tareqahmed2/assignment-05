document.getElementById("history").addEventListener("click", function () {
  document
    .getElementById("donation-section-btn")
    .classList.remove("bg-[#B4F461]");

  document.getElementById("history").classList.add("bg-[#B4F461]");
  removeAndAddHiddenClass("transition-history");
});
