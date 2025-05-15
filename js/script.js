// Auto Slide Banner
let current = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 3000);
showSlide(current);

// Contact Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const destination = document.getElementById("destination").value;

  if (!name || !email || !destination) {
    alert("Please fill in all fields.");
    e.preventDefault();
  } else if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email format.");
    e.preventDefault();
  }
});
