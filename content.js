// Listen for dark mode toggle messages to apply or remove styles dynamically
chrome.runtime.onMessage.addListener((request) => {
  if (request.toggle !== undefined) {
    if (!request.toggle) {
      // Optionally, remove the styles if dark mode is turned off
      const styleElements = document.head.getElementsByTagName('style');
      for (let i = styleElements.length - 1; i >= 0; i--) {
        if (styleElements[i].textContent.includes('background-color: #000000')) {
          document.head.removeChild(styleElements[i]);
        }
      }
    }
  }
});
