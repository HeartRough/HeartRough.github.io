(() => {
  const lightbox = document.getElementById('lightbox');
  // Keep ordinary original-image links usable when dialog is unsupported.
  if (!lightbox || typeof lightbox.showModal !== 'function') return;
  const image = document.getElementById('lightboxImg');
  const status = document.getElementById('lightboxStatus');
  let trigger;

  image.addEventListener('load', () => { status.textContent = ''; });
  image.addEventListener('error', () => {
    if (!lightbox.open) return;
    image.hidden = true;
    status.textContent = '原图加载失败，请关闭预览后重试。';
  });
  document.querySelectorAll('.gallery-item a').forEach(link => {
    link.addEventListener('click', event => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
      event.preventDefault();
      trigger = link;
      status.textContent = '正在加载原图…';
      image.alt = link.querySelector('img').alt;
      image.hidden = false;
      image.src = link.href;
      lightbox.showModal();
    });
  });
  document.getElementById('lightboxClose').addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', event => {
    if (event.target === lightbox) lightbox.close();
  });
  // The close button is the only control; keep Tab from moving to browser chrome.
  lightbox.addEventListener('keydown', event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      document.getElementById('lightboxClose').focus();
    }
  });
  // Native dialog handles Escape; return to the original gallery link on close.
  lightbox.addEventListener('close', () => {
    image.hidden = true;
    image.removeAttribute('src');
    status.textContent = '';
    trigger?.focus({ preventScroll: true });
  });
})();
