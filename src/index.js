import "./styles.css";

const frameController = () => {
  const frame = document.querySelector(".frame");
  const imgReelDiv = document.querySelector(".wide");
  let currentMarginLeft = 0;

  const imgs = imgReelDiv.querySelectorAll("img");
  const imgCount = imgs.length;

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const indicators = document.querySelectorAll(".indicator");

  // Change margin-left on imgReelDiv on button clicks (negative scrolls right)
  leftBtn.addEventListener("click", () => {
    if (currentMarginLeft * -1 > 0) {
      currentMarginLeft = currentMarginLeft + 400;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      setActiveIndicator();
    } else if (currentMarginLeft === 0) {
      currentMarginLeft = (imgCount - 1) * 400 * -1;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      setActiveIndicator();
    }
  });

  rightBtn.addEventListener("click", () => {
    if (currentMarginLeft >= (imgCount - 2) * 400 * -1) {
      currentMarginLeft = currentMarginLeft - 400;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      setActiveIndicator();
    } else if (currentMarginLeft === (imgCount - 1) * 400 * -1) {
      currentMarginLeft = 0;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      setActiveIndicator();
    } else {
      console.log(`Current margin is: ${currentMarginLeft}`);
      console.log(`Testing against: ${(imgCount - 2) * 400 * -1}`);
    }
  });

  indicators.forEach((indicator, index) => {
    indicator.id = index;
  });

  const setActiveIndicator = () => {
    const currentImg = (currentMarginLeft / 400) * -1;
    indicators.forEach((indicator) => {
      parseInt(indicator.id) === currentImg
        ? indicator.classList.add("active")
        : indicator.classList.remove("active");
    });
  };

  setActiveIndicator();
};

frameController();
