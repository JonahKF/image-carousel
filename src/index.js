import "./styles.css";

const frameController = () => {
  const frame = document.querySelector(".frame");
  const imgReelDiv = document.querySelector(".wide");
  let currentMarginLeft = 0;

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  // Change margin-left on imgReelDiv on button clicks (negative scrolls right)
  leftBtn.addEventListener("click", () => {
    console.log("Left button pressed");
  });

  rightBtn.addEventListener("click", () => {
    currentMarginLeft = currentMarginLeft - 400;
    imgReelDiv.style.marginLeft = currentMarginLeft + "px";
    console.log(currentMarginLeft);
  });
};

frameController();
