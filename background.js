// Initialize when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.clear(); // Clear any previous states
});

// Listen for messages to toggle dark mode
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.toggle !== undefined && sender.tab) {
    const tabId = sender.tab.id;

    // Store the dark mode state for this specific tab
    chrome.storage.local.set({ [tabId]: request.toggle }, () => {
      if (request.toggle) {
        // Inject dark mode CSS when toggled on
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          css: `
            body, * {
              background-color: #000000 !important;
              color: #FFFFFF !important;
            }
          `
        });
      } else {
        // Reload the tab to remove the dark mode CSS when toggled off
        chrome.tabs.reload(tabId);
      }
    });
  }
});

// Ensure dark mode persists when a tab is refreshed or updated
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading') {
    chrome.storage.local.get(tabId.toString(), (result) => {
      if (result[tabId]) {
        // Apply dark mode for this tab
        chrome.scripting.insertCSS({
          target: { tabId: tabId },
          css: `
            body, * {
              background-color: #000000 !important;
              color: #FFFFFF !important;
            }
          `
        });
      }
    });
  }
});
