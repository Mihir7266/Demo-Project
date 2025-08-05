// Filter projects
function filterProjects(category) {
  const projects = document.querySelectorAll('.project');
  
  projects.forEach(project => {
    if (category === 'all' || project.classList.contains(category)) {
      project.style.display = 'block';
    } else {
      project.style.display = 'none';
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll effect
    });
  });
});



  
  // Simple image slider for hero section
  const heroBac = document.querySelector('.hero-bac');
  if (heroBac) {
    const images = ['main.png', 'project1.png', 'project2.png'];
    let currentIndex = 0;
    
    function changeBackground() {
      currentIndex = (currentIndex + 1) % images.length;
      heroBac.style.backgroundImage = `url('${images[currentIndex]}')`;
    }
    
    // Change background every 5 seconds
    setInterval(changeBackground, 5000);
    
    // Navigation buttons
    const prevBtn = document.querySelector('.hero-nav button:first-child');
    const nextBtn = document.querySelector('.hero-nav button:last-child');
    
    if (prevBtn && nextBtn) {
      prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        heroBac.style.backgroundImage = `url('${images[currentIndex]}')`;
      });
      
      nextBtn.addEventListener('click', () => {
        changeBackground();
      });
    }
  }
// Get modal elements
const modal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const closeBtn = document.querySelector('.close-button');

// Function to open modal with project details
function openModal(imgSrc, title, description) {
  modalImg.src = imgSrc;
  modalImg.alt = title;
  modalTitle.textContent = title;
  modalDesc.textContent = description;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking X
closeBtn.addEventListener('click', closeModal);

// Close modal when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Add click events to all "Read more" links
document.querySelectorAll('.card a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const card = this.closest('.card');
    const imgSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const description = card.querySelector('p').textContent
      .replace('Read More', '').trim();
    
    openModal(imgSrc, title, description);
  });
});