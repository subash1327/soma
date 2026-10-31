const wins = [
  ['chinedu','Car owner at 17','“Your girl brought the car home… a car owner at 17 through selling digital products online.” Thanks to @ambprogram (AMB 3.0 award).','Confidence Chinedu Udeh','','22/11/2025'],
  ['haleemah','₦50k in a week as a student','“If you’re a student complaining of being broke all the time, start affiliate marketing… Soft 50,000 naira for the week, no stress.”','Ogunwole Iyaniwura Haleemah','@Earn…',''],
  ['bukunmi','~₦470k in 2 days','“I used to earn 10k monthly as a private school teacher… Now, I was paid almost 470k in 2 days from affiliate marketing.”','Financial Bukunmi','@OLUWABUK…','13/10/2025'],
  ['oma','From hostel to home','“A business I started with 20k made me a car owner and now took me from Hostel to Home.”','Princess Oma','@Princes12009402','08/01/2024'],
  ['divine','200k+ in two weeks','“I made over 200k in two weeks even as a very busy Nurse… my online business made it possible.”','Coach Divine','@MosesDivine01',''],
  ['precious','iPhone 11 from affiliate money','“I started this business with a Nokia c21, now it’s an iPhone worth close to 300k.” Tags @earnerspay @ambprogram.','Precious Uwaoma','@CoachPre…',''],
  ['israel','A PromptEarn payout','“That same undergraduate receiving ₦200–₦500 on a daily basis is now making his 20 months salary in one week.” Screenshot shows ₦282,780.','Israel Taiwo','@IsraelTaiwo04','19/01/2025'],
  ['lilmiss','2 payouts in 2 weeks, Uganda','“Another 80k landed in my account after getting paid 83k last week.” (UGX, via Airtel UG)','Earn with Little miss','@earnwithlilmiss','10/03/2025'],
  ['angel','First $100','“I just crossed my first $100 in affiliate marketing sales! … it means this thing actually works.”','Agba Angel','@Angel__Digitals','13/05/2025'],
];
const g = document.getElementById('wgrid');
g.innerHTML = wins.map(([f,h,q,n,u,d]) => `<article class="win reveal"><button class="shot" data-src="./wins/${f}.webp" aria-label="Open ${n}'s post"><img src="./wins/${f}.webp" alt="Screenshot of ${n}'s post on X" loading="lazy" decoding="async"/></button><div class="wbody"><h3>${h}</h3><p>${q}</p><span class="who"><b>${n}</b> ${u}${d ? ' · ' + d : ''}</span></div></article>`).join('');
const lb = document.getElementById('lb');
g.addEventListener('click', e => { const b = e.target.closest('.shot'); if (!b) return; lb.querySelector('img').src = b.dataset.src; lb.showModal(); });
lb.addEventListener('click', e => { if (e.target === lb || e.target.classList.contains('x')) lb.close(); });

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
