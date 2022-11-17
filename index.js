const childEl = document.getElementById("last-div");
console.log();
function parentEl(param) {
  [param].map((e) => {
    if (e.parentElement.className === "d-none") {
      console.log("stop");
    } else parentEl(param.parentElement);
    console.log(e.className);
  });
}
parentEl(childEl);


