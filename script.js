const counterElement = document.querySelector(".counter");
const preloader = document.querySelector(".preloader");
const images = document.querySelectorAll(".stack-img");
const totalImages = images.length;
const body = document.querySelector("body");

const duration = 2000;
const startTime = performance.now();
const imageIntervalStep = 100 / totalImages;

const imageStartTimes = new Array(totalImages).fill(null);
const minScale = 0.3;
const maxScale = 1.0;
const imageZoomDuration = 400;
const maxBlur = 3;

const rotations = [-5, 4, -4, 4, -4];

function updateCounter() {
  const currentTime = performance.now();
  const elapsed = currentTime - startTime;
  const progress = Math.min((elapsed / duration) * 100, 100);

  const displayCount = Math.floor(progress);

  counterElement.innerText = displayCount + "%";

  let currentImageIndex = Math.floor(displayCount / imageIntervalStep);

  if (currentImageIndex >= totalImages) currentImageIndex = totalImages - 1;

  images.forEach((img, index) => {
    if (index <= currentImageIndex) {
      img.classList.add("active");

      if (imageStartTimes[index] === null) {
        imageStartTimes[index] = currentTime;
      }

      const imageElapsed = currentTime - imageStartTimes[index];
      const imageProgress = Math.min(imageElapsed / imageZoomDuration, 1);
      const scale = minScale + imageProgress * (maxScale - minScale);

      const blur = maxBlur * (1 - imageProgress);

      const rotation = rotations[index] || 0;
      img.style.transform = `rotate(${rotation}deg) scale(${scale})`;
      img.style.filter = `blur(${blur}px)`;
    }
  });

  if (progress < 100) {
    requestAnimationFrame(updateCounter);
  } else {
    finishAnimation();
  }
}

function finishAnimation() {
  preloader.classList.add("fade-out");

  setTimeout(() => {
    body.classList.add("show-content");
  }, 600);
}

requestAnimationFrame(updateCounter);
