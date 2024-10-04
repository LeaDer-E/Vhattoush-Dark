document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('activateBtn');
  const versionText = document.querySelector('.version');

  // Get the current active tab
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const currentTabId = tabs[0].id;

    // Check if dark mode is active for this tab
    chrome.storage.local.get(currentTabId.toString(), (result) => {
      const isActive = result[currentTabId];

      // Update button state based on dark mode status
      if (isActive) {
        button.classList.add('active');
        button.textContent = "Deactivate Me";
        versionText.style.color = "hotpink";
      } else {
        button.classList.remove('active');
        button.textContent = "Activate Me";
        versionText.style.color = "dimgray";
      }
    });

    // Add button click event listener
    button.addEventListener('click', () => {
      button.classList.toggle('active'); // Toggle button class
      const isActive = button.classList.contains('active');

      // Update button text and version color
      button.textContent = isActive ? "Deactivate Me" : "Activate Me";
      versionText.style.color = isActive ? "hotpink" : "dimgray";

      // Toggle dark mode for this tab
      chrome.storage.local.set({ [currentTabId]: isActive }, () => {
        // Send message to content script to toggle dark mode
        chrome.tabs.sendMessage(currentTabId, { toggle: isActive });
      });
    });
  });
});
