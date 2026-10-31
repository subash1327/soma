const wins = [
  ['Car owner at 17','Confidence Chinedu Udeh','','22/11/2025','Your girl brought the car home. Thanks to AMB 3.0 for this amazing award. Blood of Jesus I am a car owner at age 17 🏆 … your girl old student is now a car owner at 17 through selling digital products online. Thanks to @ambprogram for bringing this dream to life.',['chinedu-0','chinedu-1','chinedu-2','chinedu-3']],
  ['₦50k in a week as a student','Ogunwole Iyaniwura Haleemah','@Earn…','','If you’re a student complaining of being broke all the time, start affiliate marketing and thank me later 😎 Soft 50,000 naira for the week, no stress.',['haleemah-0']],
  ['~₦470k in 2 days','Financial Bukunmi','@OLUWABUK…','13/10/2025','There was a time I used to earn 10k monthly as a private school teacher. Whenever my boss added 1k, I’d feel on top of the world. Now, I was paid almost 470k in 2 days from affiliate marketing 🥰. The internet has changed my story, and it can change yours too.',['bukunmi-0','bukunmi-1']],
  ['From hostel to home','Princess Oma','@Princes12009402','08/01/2024','Affiliate marketing has given comfortability!!! 🎉 It can only be GOD Almighty. A business I started with 20k made me a car owner and now took me from Hostel to Home.',['oma-0','oma-1']],
  ['200k+ in two weeks','Coach Divine','@MosesDivine01','','Another milestone crushed 🔥 I made over 200k in two weeks even as a very busy Nurse. As of last month, if someone told me I would start counting 6 figures, I would obviously not believe it. But, my online business made it possible 💯',['divine-0']],
  ['iPhone 11 from affiliate money','Precious Uwaoma','@CoachPre…','','Finally gotten my iPhone 11 😭 FROM AFFILIATE MARKETING MONEY 🥺 I started this business with a Nokia c21, now it’s an iPhone worth close to 300k. I’m so grateful I started this business.',['precious-0','precious-1']],
  ['20 months’ salary in one week','Israel Taiwo','@IsraelTaiwo04','19/01/2025','It can only be GOD + AFFILIATE MARKETING ✅💯🔥 That same undergraduate receiving ₦200 - ₦500 on a daily basis is now making his 20 months salary in one week. All thanks to God 🙏',['israel-0']],
  ['Back-to-back payouts, Uganda','Earn with Little miss','@earnwithlilmiss','10/03/2025','Alhamdulilah Ya Rabb another 80k landed in my account after getting paid 83k last week.',['lilmiss-0','lilmiss-1','lilmiss-2']],
  ['First $100','Agba Angel','@Angel__Digitals','13/05/2025','Congratulations to me 🎉🔥 I deserve a Cake 😄 I just crossed my first $100 in Affiliate marketing sales! It might not look like much to some people… But to me, it’s a big deal. Because it means this thing actually works.',[]],
];
const ini = n => n.split(' ').filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('');
const g = document.getElementById('wgrid');
g.innerHTML = wins.map(([h,n,u,d,q,m]) => `<article class="win reveal${m.length ? '' : ' textonly'}">
<header class="whead"><span class="av">${ini(n)}</span><span><b>${n}</b><small>${u}${u && d ? ' · ' : ''}${d}</small></span></header>
<h3>${h}</h3><p class="q">${q}</p>
${m.length ? `<div class="gal g${m.length}">${m.map(f => `<button class="shot" data-src="./wins/m/${f}.webp" aria-label="Open image from ${n}'s post"><img src="./wins/m/${f}.webp" alt="Image from ${n}'s post" loading="lazy" decoding="async"/></button>`).join('')}</div>` : ''}
</article>`).join('');
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
