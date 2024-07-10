const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');

// script.js

const menuOpen = document.getElementById('menu-open');
const menuClose = document.getElementById('menu-close');
const sidebar = document.querySelector('.container .sidebar');
const musicPlayer = document.querySelector('.music-player');
const musicFolder = '../reproductor de musica/musica';
const musicFolder = '/api/music'

// Get a list of music files in the folder
fetch(musicFolder)
  .then(response => response.json())
  .then(musicFiles => {
    // ...
  });

// server.js (Node.js example)
const express = require('express');
const app = express();
const fs = require('fs');

app.get('/api/music', (req, res) => {
  const musicFolder = '../reproductor de musica/musica';
  fs.readdir(musicFolder, (err, files) => {
    if (err) {
      res.status(500).json({ error: 'Failed to read music folder' });
    } else {
      const musicFiles = files.map(file => {
        const fileName = file;
        const fileUrl = `/music/${fileName}`;
        return {
          name: fileName.replace('.mp3', ''),
          url: fileUrl,
          cover: `/music/${fileName.replace('.mp3', '.jpg')}`,
        };
      });
      res.json(musicFiles);
    }
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
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