const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

yesBtn.addEventListener('click', () => {
  alert("Yay! I'm so happy! ❤️");
});

noBtn.addEventListener('mouseover', () => {
  const i = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
  const j = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
  noBtn.style.position = 'absolute';
  noBtn.style.left = i + 'px';
  noBtn.style.top = j + 'px';
});
