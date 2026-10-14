/* FKTEN UniMAP — design prototype
   Shared header/footer are rendered here so every page stays in sync.
   (In the PHP version these become include files.) */

const ASSET = "https://fkten.unimap.edu.my/fkten2026/";

const icon = {
  chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  fax: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  fb: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-4 0-5 3-5 5v2H6v4h3v11h5V12h3.5l.5-4z"/></svg>',
  ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  yt: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.7 15.1V8.9L15.5 12z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.2 2h3.4l-7.4 8.5L23 22h-6.8l-5.3-7-6.1 7H1.4l7.9-9L1 2h7l4.8 6.4zm-1.2 18h1.9L7.1 4H5.1z"/></svg>',
};

const nav = [
  { id: "about", label: "About", href: "about.html", children: [
    ["Dean's Message", "about.html#dean"],
    ["Faculty Background", "about.html#background"],
    ["Mission & Vision", "about.html#mission"],
    ["Objectives", "about.html#objectives"],
    ["Client Charter", "about.html#charter"],
    ["Organisation Chart", "about.html#organisation"],
  ]},
  { id: "academics", label: "Academics", href: "programmes.html", mega: [
    ["Diploma", [["Diploma in Electronic Engineering", "programmes.html#diploma"]]],
    ["Bachelor's Degree", [
      ["B.Eng. Electronic Engineering", "programme-electronic-engineering.html"],
      ["B.Eng. Microelectronic Engineering", "programmes.html#bachelor"],
      ["B.Eng. Biomedical Electronic Engineering", "programmes.html#bachelor"],
      ["B.Eng.Tech. Electronic System", "programmes.html#bachelor"],
      ["B.Eng.Tech. Telecommunication Design", "programmes.html#bachelor"],
      ["B.Eng.Tech. Network Design", "programmes.html#bachelor"],
      ["B.Tech. Industrial Electronic Automation", "programmes.html#bachelor"],
    ]],
    ["Master's Degree", [
      ["MSc Communication Engineering", "programmes.html#master"],
      ["MSc Microelectronic / Photonic", "programmes.html#master"],
      ["MSc Biomedical Electronic", "programmes.html#master"],
      ["MSc Embedded System Design", "programmes.html#master"],
      ["MSc Microelectronic System Design", "programmes.html#master"],
      ["MSc Electrical & Electronic", "programmes.html#master"],
    ]],
    ["Doctoral (PhD)", [
      ["PhD Communication Engineering", "programmes.html#phd"],
      ["PhD Microelectronic / Photonic", "programmes.html#phd"],
      ["PhD Biomedical Electronic", "programmes.html#phd"],
      ["PhD Biomedical Engineering", "programmes.html#phd"],
      ["View all programmes →", "programmes.html"],
    ]],
  ]},
  { id: "research", label: "Research", href: "index.html#research", children: [
    ["Centres of Excellence", "index.html#research"],
    ["Research Management System", "https://rms-ftken.unimap.edu.my/v04/index.php"],
    ["Activity Management System", "https://fktensys.unimap.edu.my/fktenAMS/login.php"],
  ]},
  { id: "facilities", label: "Facilities", href: "index.html#facilities" },
  { id: "students", label: "Students", href: "index.html#quick" },
  { id: "news", label: "News", href: "index.html#news" },
  { id: "contact", label: "Contact", href: "contact.html" },
];

function renderHeader(active) {
  const items = nav.map(item => {
    const isActive = item.id === active ? " is-active" : "";
    const hasSub = item.children || item.mega;
    let sub = "";
    if (item.children) {
      sub = `<div class="dropdown">${item.children.map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</div>`;
    } else if (item.mega) {
      sub = `<div class="mega">${item.mega.map(([title, links]) =>
        `<div><h4>${title}</h4>${links.map(([t, h]) => `<a href="${h}">${t}</a>`).join("")}</div>`).join("")}</div>`;
    }
    return `<div class="nav__item${item.mega ? " nav__item--mega" : ""}">
      <a class="nav__link${isActive}" href="${item.href}">${item.label}${hasSub ? icon.chev : ""}</a>${sub}
    </div>`;
  }).join("");

  return `
  <div class="topbar">
    <div class="wrap">
      <div class="topbar__left">
        <span>${icon.phone}<a href="tel:+6049885509">04-988 5509 / 5515</a></span>
        <span>${icon.mail}<a href="mailto:fkten@unimap.edu.my">fkten@unimap.edu.my</a></span>
        <span>${icon.pin}Pauh Putra Campus, Arau, Perlis</span>
      </div>
      <div class="topbar__right">
        <a class="hide-sm" href="https://www.unimap.edu.my/" target="_blank" rel="noopener">UniMAP Portal</a>
        <a class="hide-sm" href="https://ebooking.unimap.edu.my/UCBS/index_ucbs.jsp" target="_blank" rel="noopener">Facility Booking</a>
        <span class="lang" aria-label="Language"><a href="#" class="is-active">EN</a><a href="#">BM</a></span>
      </div>
    </div>
  </div>
  <header class="header" id="header">
    <div class="wrap">
      <a class="brand" href="index.html" aria-label="FKTEN UniMAP home">
        <img src="${ASSET}unimap_logo_2025.png" alt="Universiti Malaysia Perlis">
        <span class="brand__divider"></span>
        <span class="brand__text">
          <span class="brand__name">FKTEN</span>
          <span class="brand__sub">Faculty of Electronic Engineering &amp; Technology</span>
        </span>
      </a>
      <nav class="nav" id="nav" aria-label="Main">
        ${items}
        <a class="btn btn--red btn--sm nav__cta" href="https://admission.unimap.edu.my/" target="_blank" rel="noopener">Apply Now</a>
      </nav>
      <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false">${icon.menu}</button>
    </div>
  </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="footer">
    <div class="footer__stripe"></div>
    <div class="wrap footer__top">
      <div class="footer__brand">
        <span class="brand__name">FKTEN</span>
        <p>Faculty of Electronic Engineering &amp; Technology, Universiti Malaysia Perlis. Developing technically excellent engineers and technologists for Malaysia's electronics industry.</p>
        <div class="social">
          <a href="https://www.facebook.com/fktenunimap" target="_blank" rel="noopener" aria-label="Facebook">${icon.fb}</a>
          <a href="https://www.instagram.com/fktenunimap/" target="_blank" rel="noopener" aria-label="Instagram">${icon.ig}</a>
          <a href="https://www.youtube.com/channel/UCy27Fr6poDAalI5zVieLr2A" target="_blank" rel="noopener" aria-label="YouTube">${icon.yt}</a>
          <a href="https://twitter.com/unimapofficial" target="_blank" rel="noopener" aria-label="X (UniMAP)">${icon.x}</a>
        </div>
      </div>
      <div>
        <h4>Explore</h4>
        <ul>
          <li><a href="about.html">About FKTEN</a></li>
          <li><a href="programmes.html">Programmes</a></li>
          <li><a href="index.html#research">Research</a></li>
          <li><a href="index.html#facilities">Facilities</a></li>
          <li><a href="index.html#news">News &amp; Events</a></li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="https://admission.unimap.edu.my/" target="_blank" rel="noopener">Admission Portal</a></li>
          <li><a href="https://opa.unimap.edu.my/" target="_blank" rel="noopener">Postgraduate Application</a></li>
          <li><a href="https://sites.google.com/unimap.edu.my/fktentimetable/home" target="_blank" rel="noopener">Faculty Timetable</a></li>
          <li><a href="https://www.unimap.edu.my/index.php/en/campus-life/reference/academic-calendar" target="_blank" rel="noopener">Academic Calendar</a></li>
          <li><a href="https://www.unimap.edu.my/" target="_blank" rel="noopener">Universiti Malaysia Perlis</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul class="footer__contact">
          <li>${icon.pin}<span>Faculty of Electronic Engineering &amp; Technology (FKTEN), Universiti Malaysia Perlis, Pauh Putra Campus, 02600 Arau, Perlis, Malaysia</span></li>
          <li>${icon.phone}<a href="tel:+6049885509">+604-988 5509 / 5515</a></li>
          <li>${icon.fax}<span>Fax: +604-988 5510</span></li>
          <li>${icon.mail}<a href="mailto:fkten@unimap.edu.my">fkten@unimap.edu.my</a></li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="wrap">
        <span>© ${year} Faculty of Electronic Engineering &amp; Technology, Universiti Malaysia Perlis. All rights reserved.</span>
        <span><a href="#">Privacy Policy</a> · <a href="#">Disclaimer</a> · <a href="#">Sitemap</a></span>
      </div>
    </div>
  </footer>
  <div class="proto-note" id="protoNote"><button aria-label="Dismiss">×</button><b>Design prototype.</b> Content from the current FKTEN site; not the live website.</div>`;
}

document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader(page);
  if (f) f.outerHTML = renderFooter();

  // Sticky header shadow
  const header = document.getElementById("header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile nav
  const toggle = document.getElementById("navToggle");
  const navEl = document.getElementById("nav");
  toggle?.addEventListener("click", () => {
    navEl.style.top = header.getBoundingClientRect().bottom + "px";
    const open = navEl.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.innerHTML = open ? icon.close : icon.menu;
    document.body.style.overflow = open ? "hidden" : "";
  });
  navEl?.querySelectorAll(".nav__item").forEach(item => {
    const link = item.querySelector(".nav__link");
    if (!item.querySelector(".dropdown, .mega")) return;
    link.addEventListener("click", e => {
      if (window.innerWidth > 1180) return;
      e.preventDefault();
      item.classList.toggle("is-open");
    });
  });

  // Tabs
  document.querySelectorAll("[data-tabs]").forEach(group => {
    const tabs = group.querySelectorAll(".tab");
    tabs.forEach(tab => tab.addEventListener("click", () => {
      tabs.forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      tab.classList.add("is-active");
      tab.setAttribute("aria-selected", "true");
      const scope = document.querySelector(group.dataset.tabs);
      scope.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("is-active", p.id === tab.dataset.target));
    }));
  });

  // Accordion
  document.querySelectorAll(".acc__btn").forEach(btn => btn.addEventListener("click", () => {
    const acc = btn.closest(".acc");
    acc.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", acc.classList.contains("is-open"));
  }));

  // Count-up numbers
  const counters = document.querySelectorAll("[data-count]");
  const countIO = new IntersectionObserver(entries => entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, end = +el.dataset.count, suffix = el.dataset.suffix || "";
    const t0 = performance.now(), dur = 1200;
    const step = now => {
      const p = Math.min((now - t0) / dur, 1);
      el.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))) + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    countIO.unobserve(el);
  }), { threshold: .5 });
  counters.forEach(c => countIO.observe(c));

  // Reveal on scroll
  const revealIO = new IntersectionObserver(entries => entries.forEach(en => {
    if (en.isIntersecting) { en.target.classList.add("is-in"); revealIO.unobserve(en.target); }
  }), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => revealIO.observe(el));

  // Sub-navigation scroll spy (programme page)
  const subLinks = document.querySelectorAll(".subnav a");
  if (subLinks.length) {
    const map = [...subLinks].map(a => [a, document.querySelector(a.getAttribute("href"))]).filter(([, s]) => s);
    const spy = () => {
      let current = map[0];
      map.forEach(pair => { if (pair[1].getBoundingClientRect().top < 200) current = pair; });
      subLinks.forEach(a => a.classList.toggle("is-active", a === current[0]));
    };
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }

  // Prototype note
  document.querySelector("#protoNote button")?.addEventListener("click", e => e.target.parentElement.remove());
});
