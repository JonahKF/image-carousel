import "./styles.css";

const frameController = () => {
  const frame = document.querySelector(".frame");
  const imgReelDiv = document.querySelector(".wide");
  let currentMarginLeft = 0;

  const imgs = imgReelDiv.querySelectorAll("img");
  const imgCount = imgs.length;

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  // Change margin-left on imgReelDiv on button clicks (negative scrolls right)
  leftBtn.addEventListener("click", () => {
    if (currentMarginLeft * -1 > 0) {
      currentMarginLeft = currentMarginLeft + 400;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      console.log(currentMarginLeft);
    } else if (currentMarginLeft === 0) {
      currentMarginLeft = (imgCount - 1) * 400 * -1;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      console.log(currentMarginLeft);
    }
  });

  rightBtn.addEventListener("click", () => {
    if (currentMarginLeft >= (imgCount - 2) * 400 * -1) {
      currentMarginLeft = currentMarginLeft - 400;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      console.log(currentMarginLeft);
    } else if (currentMarginLeft === (imgCount - 1) * 400 * -1) {
      currentMarginLeft = 0;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      console.log(currentMarginLeft);
    } else {
      console.log(`Current margin is: ${currentMarginLeft}`);
      console.log(`Testing against: ${(imgCount - 2) * 400 * -1}`);
    }
  });
};

frameController();
