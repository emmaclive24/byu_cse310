# Overview

This project is a **Custom HTML5 Video Player** developed to deepen my understanding of the JavaScript language and its application in building interactive web interfaces. As a web development student, my goal was to create a feature-rich, responsive video player without relying on external libraries, using only HTML, CSS, and JavaScript. 

Through this project, I explored DOM manipulation, event handling, media API controls, and responsive design techniques. The end result is a customizable, accessible video player that mimics modern media controls with a clean UI and smooth user experience.

[Software Demo Video](https://youtu.be/4qC470xvVoQ ) 

# Development Environment

- **Code Editor:** Visual Studio Code  
- **Browser for Testing:** Google Chrome, Firefox  
- **Version Control:** Git + GitHub  
- **Design Tools:** Figma (for UI planning)

**Languages and Tools Used:**
- HTML5 – For structure and embedding the `<video>` element.
- CSS3 – For styling the player interface and responsiveness.
- JavaScript (Vanilla) – To handle playback controls, events, and dynamic UI updates.

# Useful Websites

- [MDN Web Docs – HTML Video Element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video)
- [W3Schools – HTML5 Video](https://www.w3schools.com/html/html5_video.asp)
- [CSS Tricks – Creating a Custom Video Player](https://css-tricks.com/custom-controls-in-html5-video-full-screen/)
- [JavaScript Info – Event Handling](https://javascript.info/introduction-browser-events)

  
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


# Future Work

- Add real subtitle support using WebVTT format and `<track>` elements.
- Implement keyboard accessibility (e.g., spacebar to play/pause, arrow keys to seek).
- Add quality selection options (e.g., 480p, 720p, 1080p).
- Enhance styling with animated transitions for better user experience.
- Add dark mode support and theme toggling.
- Save user preferences (volume, speed) using localStorage.

