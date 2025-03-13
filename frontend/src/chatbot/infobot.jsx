document.addEventListener('DOMContentLoaded', function () {
	// Mobile Menu
	const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
	const mobileMenu = document.querySelector('.navbar__mobile-menu-items');
  
	if (toggleButton) {
	  toggleButton.addEventListener('click', function () {
		mobileMenu.classList.toggle('active');
	  });
	}
  
	// Video Modal
	const modal = document.getElementById('videoModal');
	const videoButton = document.querySelector('.preview__video-button');
	const closeButton = document.querySelector('.modal__close-button');
	const videoPlayer = document.getElementById('videoPlayer');
  
	if (videoButton && modal && closeButton && videoPlayer) {
	  videoButton.addEventListener('click', function () {
		modal.style.display = 'block';
		videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';
  
		closeButton.addEventListener('click', function () {
		  modal.style.display = 'none';
		  videoPlayer.src = '';
		});
  
		window.addEventListener('click', function (event) {
		  if (event.target === modal) {
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
	if (navbar) {
	  navbar.classList.toggle('navbar--scroll', window.scrollY > 0);
	}
  });
  
  // ✅ Sicherstellen, dass der Botpress Webchat nur einmal hinzugefügt wird
  function toggleBotpressWebchat() {
	window.botpressWebChat.sendEvent({ type: "LIFECYCLE.TOGGLE" });
  }
  
  // ✅ Verhindern, dass der Button doppelt hinzugefügt wird
  function addChatbotToggleButton() {
	if (document.getElementById('chatbot-toggle')) {
	  return; // Falls der Button bereits existiert, abbrechen
	}
  
	const toggleButton = document.createElement('button');
	toggleButton.id = 'chatbot-toggle';
	toggleButton.innerHTML = '<i class="fas fa-comment"></i>';
	toggleButton.className = 'chatbot-toggle-btn';
	toggleButton.addEventListener('click', toggleBotpressWebchat);
	document.body.appendChild(toggleButton);
  
	// Styles für den Button
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
  
  // ✅ Botpress Webchat Initialisierung verhindern, falls bereits vorhanden
  (function () {
	if (!window.botpressWebChat) {
	  window.botpressWebChat = {}; // Sicherstellen, dass kein Fehler auftritt
	}
  
	if (!document.getElementById("webchat")) {
	  window.botpressWebChat.init({
		"botId": "2cecfc18-0dd9-40d4-9aff-671bf111803a",
		"configuration": {
		  "composerPlaceholder": "Geben Sie Ihre Nachricht ein",
		  "botName": "Bürgerdienst Assistent",
		  "botDescription": "Assistent-Chat",
		  "color": "#f53b3b",
		  "variant": "solid",
		  "themeMode": "light",
		  "fontFamily": "rubik",
		  "radius": 3,
		  "allowFileUpload": true
		},
		"clientId": "a7d07157-0a08-4434-b9f2-ac4f2fdd446c",
		"selector": "#webchat"
	  });
  
	  addChatbotToggleButton(); // Toggle-Button nur einmal hinzufügen
	}
  })();
  