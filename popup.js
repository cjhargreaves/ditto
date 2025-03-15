document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on an Overleaf page
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    const currentTab = tabs[0];
    if (currentTab.url.includes('overleaf.com')) {
      document.getElementById('status').textContent = 'Connected to Overleaf';
    } else {
      document.getElementById('status').textContent = 'Please navigate to Overleaf to use this extension';
    }
  });
});

