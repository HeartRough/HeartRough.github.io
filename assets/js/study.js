(() => {
  const image = document.getElementById('studyAnimation');
  const button = document.getElementById('animationToggle');
  const status = document.getElementById('animationStatus');
  const poster = image.src;
  let playing = false;
  const stop = () => {
    playing = false;
    image.src = poster;
    button.textContent = '播放动画';
    button.setAttribute('aria-pressed', 'false');
  };
  button.hidden = false;
  button.addEventListener('click', () => {
    status.textContent = '';
    if (playing) { stop(); return; }
    playing = true;
    image.src = image.dataset.animation;
    button.textContent = '停止动画';
    button.setAttribute('aria-pressed', 'true');
  });
  image.addEventListener('error', () => {
    if (!playing) return;
    stop();
    status.textContent = '动画加载失败，请重试或打开原始 GIF。';
  });
})();
