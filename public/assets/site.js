document.documentElement.classList.add('js');

// An initializer can be disposed when the standalone preview changes language.
function initialize(root = document) {
  const controller = new AbortController();
  const { signal } = controller;
  const menu = root.querySelector('.menu-toggle');
  const nav = root.querySelector('#primary-nav');
  const closeMenu = () => {
    menu?.setAttribute('aria-expanded', 'false');
    nav?.classList.remove('open');
  };

  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('open', open);
    }, { signal });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu, { signal }));
    root.addEventListener('keydown', event => {
      if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        menu.focus();
      }
    }, { signal });
    const desktop = matchMedia('(min-width: 761px)');
    desktop.addEventListener('change', closeMenu, { signal });
  }

  const filters = [...root.querySelectorAll('[data-filter]')];
  const papers = [...root.querySelectorAll('.publication')];
  const search = root.querySelector('#publication-search');
  const count = root.querySelector('.publication-count');
  const empty = root.querySelector('.publication-empty');
  let selectedType = 'all';
  const filterPapers = () => {
    const words = (search?.value || '').trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    let matches = 0;
    for (const paper of papers) {
      const text = paper.dataset.search.toLocaleLowerCase();
      paper.hidden = (selectedType !== 'all' && paper.dataset.type !== selectedType) || !words.every(word => text.includes(word));
      if (!paper.hidden) matches++;
    }
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === selectedType)));
    if (count) count.textContent = count.dataset.template.replace('{count}', matches).replace('{total}', papers.length);
    if (empty) empty.hidden = matches !== 0;
  };
  filters.forEach(button => button.addEventListener('click', () => {
    selectedType = button.dataset.filter;
    filterPapers();
  }, { signal }));
  search?.addEventListener('input', filterPapers, { signal });
  root.querySelector('[data-reset-search]')?.addEventListener('click', () => {
    selectedType = 'all';
    search.value = '';
    filterPapers();
    search.focus();
  }, { signal });

  const motion = root.querySelector('.motion-control');
  const scene = root.querySelector('.observatory');
  if (motion && scene) {
    const media = matchMedia('(prefers-reduced-motion: reduce)');
    let paused = media.matches;
    const sync = () => {
      scene.classList.toggle('paused', paused);
      motion.setAttribute('aria-pressed', String(paused));
      motion.textContent = paused ? motion.dataset.play : motion.dataset.pause;
    };
    sync();
    motion.addEventListener('click', () => { paused = !paused; sync(); }, { signal });
    media.addEventListener('change', () => { paused = media.matches; sync(); }, { signal });
  }

  const language = root.querySelector('.language-switch');
  if (language && !document.body.hasAttribute('data-preview-language')) {
    language.addEventListener('click', () => { language.href = language.href.split('#')[0] + location.hash; }, { signal });
  }

  const links = [...root.querySelectorAll('#primary-nav a[href^="#"]')];
  const sections = links.map(link => root.querySelector(link.getAttribute('href')));
  let frame = 0;
  const updateNavigation = () => {
    frame = 0;
    let current = -1;
    sections.forEach((section, index) => {
      if (section && section.getBoundingClientRect().top <= 160) current = index;
    });
    links.forEach((link, index) => {
      if (index === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };
  const queueNavigation = () => { if (!frame) frame = requestAnimationFrame(updateNavigation); };
  addEventListener('scroll', queueNavigation, { passive: true, signal });
  addEventListener('resize', queueNavigation, { passive: true, signal });
  updateNavigation();

  return () => { controller.abort(); cancelAnimationFrame(frame); };
}

function revealHashTarget(scroll = false) {
  let id;
  try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
  const target = document.getElementById(id);
  if (target?.matches('.research-item')) target.querySelector('details').open = true;
  if (target && scroll) target.scrollIntoView({ behavior: 'instant' });
}

if (!document.body.hasAttribute('data-preview-language')) {
  initialize();
  revealHashTarget();
  addEventListener('hashchange', () => revealHashTarget());
}
