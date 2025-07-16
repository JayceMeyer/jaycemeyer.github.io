// Single Page App redirect script for GitHub Pages
// This handles direct navigation to routes like /portfolio, /cv, etc.
(function() {
  // Don't run this script on the main domain - only on 404 page
  if (document.location.pathname !== '/404.html') {
    return;
  }

  // Get the current path (everything after the domain)
  var path = document.location.pathname;
  
  // Remove any trailing slash and the 404.html part
  path = path.replace(/\/404.html$/, '').replace(/\/$/, '');
  
  // If path is empty, redirect to the root
  if (path === '') {
    path = '/';
  }
  
  // Store the path in sessionStorage for the main page to use
  sessionStorage.setItem('redirect_path', path);
  
  // Redirect to the root of the site
  window.location.replace('/');
})();
