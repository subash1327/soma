document.getElementById('yr').textContent = new Date().getFullYear();
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => reduce ? el.classList.add('in') : io.observe(el));
const nav = document.querySelector('.nav');
if (!reduce) {
  const els = [...document.querySelectorAll('[data-speed]')];
  let ticking = false;
  const update = () => {
    const vh = innerHeight;
    els.forEach(el => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.speed);
      el.style.transform = `translate3d(0,${off.toFixed(1)}px,0)`;
    });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
  addEventListener('resize', update); update();
}
addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 20), { passive: true });
