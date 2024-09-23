document
  .getElementById("donation-section-btn")
  .addEventListener("click", function () {
    document
      .getElementById("donation-section-btn")
      .classList.add("bg-[#B4F461]");

    document.getElementById("history").classList.remove("bg-[#B4F461]");
    removeAndAddHiddenClass("donation-all-section");
  });
