// pageviews.js
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.pageViews) {
    localStorage.pageViews = Number(localStorage.pageViews) + 1;
  } else {
    localStorage.pageViews = 1;
  }

  let counter = document.getElementById("page-views");
  if (counter) {
    counter.innerText = "👁 Page Views: " + localStorage.pageViews;
  }
});
