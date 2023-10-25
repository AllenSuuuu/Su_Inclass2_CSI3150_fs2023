document.addEventListener("DOMContentLoaded", function () {
  const letters = document.querySelectorAll(".letter");
  const features = document.querySelectorAll(".feature");

  letters.forEach((letter) => {
    letter.addEventListener("click", function () {
      const featureLetter = this.dataset.letter;
      const featureDiv = document.querySelector(
        `.feature[data-letter="${featureLetter}"]`
      );
      featureDiv.style.display = "block"; // Show the feature
    });
  });

  features.forEach((feature) => {
    const hideButton = feature.querySelector(".hide-feature");
    hideButton.addEventListener("click", function () {
      feature.style.display = "none"; // Hide the feature
    });
  });
});
