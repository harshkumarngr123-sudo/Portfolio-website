// JavaScript will be added later (animations / interactions)
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navItems = navLinks.querySelectorAll("a");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("section-hidden");
  observer.observe(section);
});
