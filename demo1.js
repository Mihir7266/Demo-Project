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
// (Keep for backward compatibility)
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

// Add click events to all "View Details" overlay buttons
function getCardDetails(card) {
  const imgSrc = card.querySelector('img').src;
  const title = card.querySelector('h3').textContent;
  const description = card.querySelector('p').textContent.trim();
  // Get tags if present
  let tags = [];
  const tagEls = card.querySelectorAll('.card-tag');
  tagEls.forEach(tag => tags.push(tag.textContent));
  return { imgSrc, title, description, tags };
}

document.querySelectorAll('.card-overlay-btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const card = this.closest('.card');
    const { imgSrc, title, description, tags } = getCardDetails(card);
    openModalWithTags(imgSrc, title, description, tags);
  });
});

// Enhance modal to show tags if present
function openModalWithTags(imgSrc, title, description, tags) {
  modalImg.src = imgSrc;
  modalImg.alt = title;
  modalTitle.textContent = title;
  modalDesc.innerHTML = description;
  // Add tags if present
  let tagsHtml = '';
  if (tags && tags.length > 0) {
    tagsHtml = '<div class="card-tags" style="margin-top:14px;">' +
      tags.map(tag => `<span class='card-tag'>${tag}</span>`).join('') +
      '</div>';
  }
  modalDesc.innerHTML += tagsHtml;
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden';
}

// --- Moved from demo1.html ---
document.addEventListener("DOMContentLoaded", () => {
  // Leaflet map initialization
  if (window.L && document.getElementById('map')) {
    const map = L.map('map').setView([52.5200, 13.4050], 13); // Berlin
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([52.5200, 13.4050]).addTo(map)
      .bindPopup('ArchiWeb Office - Berlin')
      .openPopup();
  }

  // particlesJS background effect
  if (window.particlesJS && document.getElementById('particles-js')) {
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 3,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#ffffff",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          }
        }
      }
    });
  }
});
