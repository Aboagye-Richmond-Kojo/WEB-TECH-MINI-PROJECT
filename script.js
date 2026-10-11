// Show the current year in the footer.
document.getElementById("year").textContent = new Date().getFullYear();

// Open and close the navigation menu on smaller screens.
const menuButton = document.getElementById("menu-button");
const mainNav = document.getElementById("main-nav");

menuButton.addEventListener("click", function () {
  const menuIsOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", menuIsOpen);
});

// Close the mobile menu after a navigation link is selected.
const navLinks = mainNav.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Switch between light and dark themes.
const themeButton = document.getElementById("theme-button");

themeButton.addEventListener("click", function () {
  const darkModeIsOn = document.body.classList.toggle("dark-theme");
  themeButton.textContent = darkModeIsOn ? "Light mode" : "Dark mode";
  themeButton.setAttribute("aria-pressed", darkModeIsOn);
});

// Give the visitor a message when the sample contact form is submitted.
const contactForm = document.getElementById("contact-form");
const formFeedback = document.getElementById("form-feedback");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const visitorName = document.getElementById("name").value.trim();
  formFeedback.textContent = "Thanks, " + visitorName + "! The sample form works.";
  contactForm.reset();
});
