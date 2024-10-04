# Vhattoush Dark v1.3.6

**Vhattoush Dark** is a Chrome extension that enables a dark mode for web pages. With a simple toggle, users can switch between light and dark themes, improving the browsing experience, especially in low-light environments.

## Features

- **Toggle Dark Mode**: Easily switch between light and dark modes with a button click.
- **Per-Tab Functionality**: Activate dark mode on a specific tab without affecting other tabs.
- **Persistent State**: Dark mode state is maintained across page reloads and navigation.
- **Immediate Feedback**: The dark mode is applied immediately when activated without a page refresh.

## Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** by toggling the switch in the top right corner.
4. Click on **Load unpacked** and select the directory where the extension files are located.
5. The extension should now be loaded and visible in your extensions list.

## Usage

1. Click on the **Vhattoush Dark** extension icon in the Chrome toolbar.
2. Press the **Activate Me** button to enable dark mode on the current tab.
3. Press the **Deactivate Me** button to return to the default light mode.
4. The state of dark mode will persist as you navigate between pages within the same tab.

## How It Works

- The extension uses **content scripts** to inject custom CSS styles that change the background color and text color of web pages.
- It employs **Chrome's storage API** to save the dark mode state for each tab individually, ensuring that users can toggle dark mode without interference between tabs.

## Code Structure

The extension consists of the following files:

- `manifest.json`: Configuration file for the Chrome extension.
- `background.js`: Background script that manages the extension state.
- `content.js`: Content script that injects dark mode styles into the web pages.
- `popup.html`: HTML file for the extension popup interface.
- `popup.js`: Script that handles user interactions in the popup.
- `style.css`: Styles for the popup interface.

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.


## Contact

For questions or inquiries, please contact Eslam Mustafa at eslaam.mustafa@gmail.com.
