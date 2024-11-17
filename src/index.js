import "./styles.css";

const frameController = () => {
  const frame = document.querySelector(".frame");
  const imgReelDiv = document.querySelector(".wide");
  let currentMarginLeft = 0;

  const imgs = imgReelDiv.querySelectorAll("img");
  const imgCount = imgs.length;

  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  const indicatorBox = document.querySelector(".indicator-box");
  const indicators = document.querySelectorAll(".indicator");

  const previousSlide = () => {
    if (currentMarginLeft * -1 > 0) {
      currentMarginLeft = currentMarginLeft + 400;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      setActiveIndicator();
    } else if (currentMarginLeft === 0) {
      currentMarginLeft = (imgCount - 1) * 400 * -1;
      imgReelDiv.style.marginLeft = currentMarginLeft + "px";
      setActiveIndicator();
    }
  };

  const nextSlide = () => {
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
  };

  leftBtn.addEventListener("click", () => {
    previousSlide();
  });

  rightBtn.addEventListener("click", () => {
    nextSlide();
  });

  indicators.forEach((indicator, index) => {
    indicator.id = index;

    // Add functions for clicking indicators, use indicator ID to parse
    // Placeholder
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

  // Add listeners to make buttons, indicators visible only on mouseover
  frame.addEventListener("mouseenter", () => {
    indicatorBox.classList.add("visible");
    leftBtn.classList.add("visible");
    rightBtn.classList.add("visible");
  });

  frame.addEventListener("mouseleave", () => {
    indicatorBox.classList.remove("visible");
    leftBtn.classList.remove("visible");
    rightBtn.classList.remove("visible");
  });
};

frameController();
