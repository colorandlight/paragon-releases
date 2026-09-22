
document.querySelectorAll("figure.shot img").forEach(function (img) {
  function show() { img.classList.add("is-loaded"); }
  if (img.complete && img.naturalWidth > 0) show();
  img.addEventListener("load", show);
});
