// 1. Toggle Mobile Menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// 2. Project Filter Buttons
const filterButtons = document.querySelectorAll('.filters button');
const projectItems = document.querySelectorAll('.project');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const filter = button.textContent.toLowerCase();

    projectItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// 3. Testimonial Auto Slider (Simple Loop)
const testimonials = document.querySelectorAll('.testimonial-box > div');
let testimonialIndex = 0;

function showTestimonial(index) {
  testimonials.forEach(t => (t.style.display = 'none'));
  testimonials[index].style.display = 'block';
}

// Initialize first testimonial
if (testimonials.length > 0) {
  showTestimonial(testimonialIndex);

  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonials.length;
    showTestimonial(testimonialIndex);
  }, 5000); // change every 5 seconds
}

function toggleText(link) {
  const moreText = link.previousElementSibling;
  const isVisible = moreText.style.display === "inline";
  moreText.style.display = isVisible ? "none" : "inline";
  link.textContent = isVisible ? "Read more" : "Read less";
}

