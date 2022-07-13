let columnProgress = document.querySelectorAll(".colum-progress");

columnProgress.forEach((ele) => {
  ele.style.height = `${3 * ele.dataset.height}px`;
});
