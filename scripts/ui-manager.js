// ... (existing code) ...

function initAuthUI() {
  document.getElementById('login-btn').addEventListener('click', handleLogin);
  document.getElementById('signup-btn').addEventListener('click', handleSignup);
  document.getElementById('guest-btn').addEventListener('click', handleGuestLogin);
  
  // Add event listeners for Enter key in auth form
  document.getElementById('email-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleLogin();
    }
  });
  
  document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      handleLogin();
    }
  });
}

// ... (rest of the file remains the same) ...