# Custom HTML Video Player 

## Overview
This is a custom HTML5 video player built with HTML, CSS, and JavaScript. It provides a modern, user-friendly interface with essential video playback features, styled using custom CSS with a clean and responsive design. The player is designed to work in modern web browsers and supports a variety of controls for an enhanced viewing experience.

## Features
- **Play/Pause**: Toggle video playback with a button or by clicking the video.
- **Progress Bar**: Seek to specific points in the video by clicking or dragging the progress bar, with a hover preview of the time.
- **Volume Control**: Adjust volume using a slider or mute/unmute with a button.
- **Fullscreen Mode**: Toggle fullscreen display for an immersive experience.
- **Playback Speed**: Choose from multiple playback speeds (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x) via a settings menu.
- **Captions Toggle**: Enable/disable placeholder captions (extendable with WebVTT for real captions).
- **Loading Spinner**: Visual feedback during video buffering.
- **Responsive Design**: Adapts to different screen sizes, with adjustments for mobile devices.
- **Modern Styling**: Clean, minimalistic UI with hover effects, custom colors, and smooth transitions.

## Usage
- **Play/Pause**: Click the play button (▶/❚❚) or the video itself to toggle playback.
- **Seek**: Click or drag the progress bar to jump to a specific time. Hover over the progress bar to see a time preview.
- **Volume**: Use the volume slider to adjust audio levels or click the mute button (🔊/🔇) to toggle mute.
- **Fullscreen**: Click the fullscreen button (⛶) to enter/exit fullscreen mode.
- **Playback Speed**: Click the settings button (⚙️) to open the menu and select a playback speed.
- **Captions**: Click the captions button (CC) to toggle placeholder captions (extend with WebVTT for actual subtitles).
- **Responsive Behavior**: The player adjusts its layout and control sizes for smaller screens.

## Customization
- **Video Source**: Update the `<source>` tag in the `<video>` element to use your own video file.
- **Styling**: Modify CSS variables in the `:root` section (e.g., `--primary-color`, `--bg-color`) to change the color scheme.
- **Captions**: To add real captions, include a WebVTT file and add a `<track>` element to the `<video>` tag, e.g.:
  ```html
  <track src="captions.vtt" kind="subtitles" srclang="en" label="English">
  ```
- **Poster Image**: Replace the `poster` attribute in the `<video>` tag with your own image URL for the video thumbnail.
- **Additional Features**: Extend the JavaScript to add features like keyboard shortcuts, quality selection, or custom controls.

## Notes
- **Dependencies**: No external dependencies are required, as all styling and functionality are implemented with vanilla HTML, CSS, and JavaScript.
- **Limitations**:
  - The captions feature is a placeholder and requires a WebVTT file for full functionality.
  - Some browsers may restrict autoplay or fullscreen when not hosted on a server due to security policies.
- **Debugging**: Open the browser's developer tools (F12) to check the console for errors if any functionality doesn't work as expected.
- **Video Source**: a video from BYU class on creating a github repository

## Troubleshooting
- **Controls Not Working**: Ensure the video file is accessible and the browser supports HTML5 video. Check the console for errors.
- **Fullscreen Issues**: Some browsers require the page to be served over HTTP/HTTPS for fullscreen to work.
- **Duration Display Errors**: If the duration shows incorrectly, verify the video file's metadata is valid and the `loadedmetadata` event is firing.
- **Performance**: For large videos, ensure your server supports range requests to enable smooth seeking.

For further assistance or feature requests, feel free to modify the code or reach out for support!
