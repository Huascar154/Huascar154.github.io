window.addEventListener("load", function () {
  var loaderWrapper = document.querySelector(".loader-wrapper");
  var content = document.querySelector("section.hidden");

  setTimeout(function () {
    loaderWrapper.classList.add("hidden");
    content.classList.remove("hidden");
  }, 2000);
});
