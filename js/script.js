document.addEventListener('DOMContentLoaded', function () {
  // Mobile Menu
  const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  });
  
  // Video Modal
  const modal = document.getElementById('videoModal');
  const videoButton = document.querySelector('.preview__video-button');
  const closeButton = document.querySelector('.modal__close-button');
  const videoPlayer = document.getElementById('videoPlayer');
  
  // Check if video button exists
  if (videoButton) {
    // Open modal when clicked
    videoButton.addEventListener('click', function () {
      // Show modal
      modal.style.display = 'block';
      //Replace the src attribute with the video URL
      videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';
      
      // Close modal on close button click
      closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
        videoPlayer.src = '';
      });
      
      // Close modal on outter click
      window.addEventListener('click', function (event) {
        if (event.target == modal) {
          modal.style.display = 'none';
          videoPlayer.src = '';
        }
      });
    });
  }
});

// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});

// Botpress Webchat Toggle Function
function toggleBotpressWebchat() {
  window.botpressWebChat.sendEvent({ type: "LIFECYCLE.TOGGLE" });
}

// Add a floating button to toggle the chatbot if you don't want to use the default Botpress button
function addChatbotToggleButton() {
  const toggleButton = document.createElement('button');
  toggleButton.id = 'chatbot-toggle';
  toggleButton.innerHTML = '<i class="fas fa-comment"></i>';
  toggleButton.className = 'chatbot-toggle-btn';
  toggleButton.addEventListener('click', toggleBotpressWebchat);
  document.body.appendChild(toggleButton);
  
  // Add some styles for the button
  const style = document.createElement('style');
  style.textContent = `
    .chatbot-toggle-btn {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: #2563eb;
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    
    .chatbot-toggle-btn:hover {
      background-color: #1d4ed8;
    }
  `;
  document.head.appendChild(style);
}

// Uncomment the line below if you want to use a custom toggle button instead of the default Botpress button
document.addEventListener('DOMContentLoaded', addChatbotToggleButton);