const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

// script.js

const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');
const musicPlayer = document.querySelector('.music-player');
const musicFolder = '../reproductor de musica/musica';

// Get a list of music files in the folder
fetch(musicFolder)
  .then(response => response.json())
  .then(musicFiles => {
    const musicList = musicFiles.map(file => {
      const fileName = file.name;
      const fileUrl = `${musicFolder}/${fileName}`;
      return {
        name: fileName.replace('.mp3', ''),
        url: fileUrl,
        cover: `${musicFolder}/${fileName.replace('.mp3', '.jpg')}`,
      };
    });

    // Create a list of music items in the sidebar
    const musicListHtml = musicList.map(musicItem => {
      return `
        <li>
          <img src="${musicItem.cover}" alt="${musicItem.name}">
          <span>${musicItem.name}</span>
        </li>
      `;
    }).join('');

    sidebar.innerHTML = musicListHtml;

    // Add event listeners to music items
    sidebar.querySelectorAll('li').forEach((musicItem, index) => {
      musicItem.addEventListener('click', () => {
        playMusic(musicList[index]);
      });
    });
  });

// Function to play music
function playMusic(musicItem) {
  const audio = new Audio(musicItem.url);
  audio.play();

  // Update music player with current music info
  musicPlayer.innerHTML = `
    <img src="${musicItem.cover}" alt="${musicItem.name}">
    <h2>${musicItem.name}</h2>
    <div class="controls">
      <button class="play-pause" aria-label="Play/Pause"></button>
      <button class="stop" aria-label="Stop"></button>
    </div>
  `;

  // Add event listeners to music player controls
  const playPauseButton = musicPlayer.querySelector('.play-pause');
  const stopButton = musicPlayer.querySelector('.stop');

  playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playPauseButton.ariaLabel = 'Pause';
    } else {
      audio.pause();
      playPauseButton.ariaLabel = 'Play';
    }
  });

  stopButton.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
  });
}