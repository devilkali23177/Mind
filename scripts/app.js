// Main application file
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Firebase
  firebaseInit();
  
  // Initialize UI components
  initUI();
  
  // Initialize node management
  initNodeManager();
  
  // Initialize layout manager
  initLayoutManager();
  
  // Check if user is logged in
  checkAuthState();
  
  // Focus on email input when auth container is displayed
  const authContainer = document.getElementById('auth-container');
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.attributeName === 'style') {
        const displayStyle = authContainer.style.display;
        if (displayStyle === 'flex') {
          document.getElementById('email-input').focus();
        }
      }
    });
  });
  
  observer.observe(authContainer, { attributes: true });
});