// DOM Elements
const bgColorPicker = document.getElementById("bgColor");
const savePrefBtn = document.getElementById("savePrefBtn");
const animatedBox = document.getElementById("animatedBox");
const bounceBtn = document.getElementById("bounceBtn");
const spinBtn = document.getElementById("spinBtn");
const fadeBtn = document.getElementById("fadeBtn");
const resetBtn = document.getElementById("resetBtn");

// Load saved preferences
function loadPreferences() {
  const savedColor = localStorage.getItem("bgColor");
  if (savedColor) {
    document.body.style.backgroundColor = savedColor;
    bgColorPicker.value = savedColor;
  }
}

// Save preferences to localStorage
function savePreferences() {
  const color = bgColorPicker.value;
  localStorage.setItem("bgColor", color);
  document.body.style.backgroundColor = color;

  // Show confirmation animation
  savePrefBtn.textContent = "Saved!";
  savePrefBtn.style.backgroundColor = "#4bb543";
  setTimeout(() => {
    savePrefBtn.textContent = "Save Preferences";
    savePrefBtn.style.backgroundColor = "#4361ee";
  }, 1500);
}

// Apply animation to box
function applyAnimation(animationClass) {
  // Remove all animation classes first
  animatedBox.classList.remove("bounce", "spin", "fade");

  // Add the selected animation
  animatedBox.classList.add(animationClass);
}

// Reset animations
function resetAnimations() {
  animatedBox.classList.remove("bounce", "spin", "fade");
}

// Event Listeners
savePrefBtn.addEventListener("click", savePreferences);
bounceBtn.addEventListener("click", () => applyAnimation("bounce"));
spinBtn.addEventListener("click", () => applyAnimation("spin"));
fadeBtn.addEventListener("click", () => applyAnimation("fade"));
resetBtn.addEventListener("click", resetAnimations);

// Initialize
loadPreferences();
