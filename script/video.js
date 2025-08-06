

        document.addEventListener('DOMContentLoaded', function() {
            const video = document.querySelector('.video'); 
            const playBtn = document.querySelector('.play-btn');
            const muteBtn = document.querySelector('.mute-btn');
            const volumeSlider = document.querySelector('.volume-slider');
            const progressContainer = document.querySelector('.progress-container');
            const progressBar = document.querySelector('.progress-bar');
            const progressTime = document.querySelector('.progress-time');
            const timeDisplay = document.querySelector('.time-display');
            const fullscreenBtn = document.querySelector('.fullscreen-btn');
            const captionsBtn = document.querySelector('.captions-btn');
            const captionsDisplay = document.querySelector('.captions');
            const loadingSpinner = document.querySelector('.loading-spinner');
            const playbackSpeeds = document.querySelectorAll('.playback-speed');
            const settingsBtn = document.querySelector('.settings-btn');
            const videoContainer = document.querySelector('.video-container');

            // Play/Pause
            playBtn.addEventListener('click', togglePlay);
            video.addEventListener('click', togglePlay);
            
            function togglePlay() {
                if (video.paused) {
                    video.play();
                    playBtn.textContent = '❚❚';
                    playBtn.title = 'Pause';
                } else {
                    video.pause();
                    playBtn.textContent = '▶';
                    playBtn.title = 'Play';
                }
            }

            // Mute/Unmute 
            muteBtn.addEventListener('click', toggleMute);
            
            function toggleMute() {
                video.muted = !video.muted;
                muteBtn.textContent = video.muted ? '🔇' : '🔊';
                muteBtn.title = video.muted ? 'Unmute' : 'Mute';
            }

            // Volume control
            volumeSlider.addEventListener('input', function() {
                video.volume = this.value;
                video.muted = this.value === '0';
                muteBtn.textContent = video.muted ? '🔇' : '🔊';
            });

            // Progress bar
            video.addEventListener('timeupdate', updateProgress);
            
            function updateProgress() {
                const percent = (video.currentTime / video.duration) * 100;
                progressBar.style.width = `${percent}%`;
                
                // Update time display
                timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
            }

            // Click on progress bar to seek
            progressContainer.addEventListener('click', function(e) {
                const width = this.clientWidth;
                const clickX = e.offsetX;
                const duration = video.duration;
                video.currentTime = (clickX / width) * duration;
            });

            // Hover on progress bar to preview time
            progressContainer.addEventListener('mousemove', function(e) {
                const width = this.clientWidth;
                const clickX = e.offsetX;
                const duration = video.duration;
                const previewTime = (clickX / width) * duration;
                
                progressTime.textContent = formatTime(previewTime);
                progressTime.style.left = `${(clickX / width) * 100}%`;
            });

            // Format time as MM:SS
            function formatTime(seconds) {
                const minutes = Math.floor(seconds / 60);
                seconds = Math.floor(seconds % 60);
                return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            }

            // Fullscreen
            fullscreenBtn.addEventListener('click', toggleFullscreen);
            
            function toggleFullscreen() {
                if (!document.fullscreenElement) {
                    videoContainer.requestFullscreen().catch(err => {
                        console.error(`Error attempting to enable fullscreen: ${err.message}`);
                    });
                    fullscreenBtn.textContent = '⛶';
                } else {
                    document.exitFullscreen();
                    fullscreenBtn.textContent = '⛶';
                }
            }

            // Captions (simplified - in a real app you'd use WebVTT)
            captionsBtn.addEventListener('click', function() {
                captionsDisplay.style.display = captionsDisplay.style.display === 'block' ? 'none' : 'block';
                captionsBtn.classList.toggle('active');
            });

            // Loading state
            video.addEventListener('waiting', function() {
                loadingSpinner.style.display = 'block';
            });

            video.addEventListener('playing', function() {
                loadingSpinner.style.display = 'none';
            });

            // Playback speed
            playbackSpeeds.forEach(speed => {
                speed.addEventListener('click', function() {
                    video.playbackRate = parseFloat(this.dataset.speed);
                    
                    // Update active state
                    playbackSpeeds.forEach(s => s.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Hide settings menu
                    document.querySelector('.settings-content').style.display = 'none';
                });
            });

            // Settings menu toggle
            settingsBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                const settingsMenu = document.querySelector('.settings-content');
                settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
            });

            // Close settings when clicking elsewhere
            document.addEventListener('click', function() {
                document.querySelector('.settings-content').style.display = 'none';
            });

            // Initialize
            timeDisplay.textContent = `00:00 / ${formatTime(video.duration)}`;
        });
    