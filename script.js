(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('is-open', !expanded);
  });
  nav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.site-header')) closeMenu();
  });
  const mobileQuery = window.matchMedia('(max-width: 760px)');
  mobileQuery.addEventListener('change', closeMenu);
  document.documentElement.classList.add('has-js');

  const motionButton = document.querySelector('.motion-toggle');
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const setMotion = (paused) => {
    document.documentElement.classList.toggle('motion-paused', paused);
    motionButton.setAttribute('aria-pressed', String(paused));
    motionButton.textContent = paused ? 'Animations paused' : 'Pause animations';
  };
  motionButton.hidden = false;
  setMotion(motionQuery.matches);
  motionButton.addEventListener('click', () => setMotion(motionButton.getAttribute('aria-pressed') !== 'true'));
  motionQuery.addEventListener('change', (event) => setMotion(event.matches));

  const copyButton = document.querySelector('.copy-email');
  const copyStatus = document.querySelector('#copy-status');
  if (navigator.clipboard && window.isSecureContext) {
    copyButton.hidden = false;
    copyButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('plantboxstudio.contact@gmail.com');
        copyStatus.textContent = 'Email address copied.';
      } catch {
        copyStatus.textContent = 'Select the email address above to copy it, or open it in your mail app.';
      }
    });
  }

  const config = window.PLANT_BOX_CONFIG || {};
  if (config.robloxGameUrl) {
    try {
      const url = new URL(config.robloxGameUrl);
      if (url.protocol === 'https:' && ['www.roblox.com', 'roblox.com'].includes(url.hostname) && /^\/games\/\d+(?:\/|$)/.test(url.pathname) && !url.username && !url.password) {
        const link = document.querySelector('[data-game-link]');
        link.href = url.href;
        link.hidden = false;
      }
    } catch { /* An incomplete URL leaves the unconfirmed game link hidden. */ }
  }
  for (const [key, screenshot] of Object.entries(config.screenshots || {})) {
    if (!screenshot || !screenshot.src || !screenshot.alt) continue;
    const frame = [...document.querySelectorAll('[data-screenshot]')].find((item) => item.dataset.screenshot === key);
    if (!frame) continue;
    let url;
    try {
      url = new URL(screenshot.src, document.baseURI);
    } catch { continue; }
    if (url.origin !== window.location.origin || !/\.(?:webp|png|jpe?g)$/i.test(url.pathname)) continue;
    const image = new Image();
    image.alt = screenshot.alt;
    image.loading = 'lazy';
    image.addEventListener('load', () => {
      frame.querySelector('.placeholder-visual').replaceWith(image);
      frame.classList.add('has-screenshot');
      frame.querySelector('figcaption').firstElementChild.textContent = screenshot.caption || image.alt;
      frame.querySelector('figcaption').lastElementChild.textContent = 'In-game screenshot';
    });
    image.src = url.href;
  }
})();
