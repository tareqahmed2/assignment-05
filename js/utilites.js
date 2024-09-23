function removeAndAddHiddenClass(id) {
  document.getElementById("transition-history").classList.add("hidden");
  document.getElementById("donation-all-section").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}
