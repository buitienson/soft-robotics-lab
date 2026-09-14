function el(tag, className, html) {
  const e = document.createElement(tag);
  if (className) e.className = className;
  if (html != null) e.innerHTML = html;
  return e;
}

function fmtDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// Research
const researchGrid = document.getElementById("research-grid");
RESEARCH.forEach((r) => {
  const card = el("div", "research-card reveal");
  card.appendChild(el("span", "tag mono", r.tag));
  card.appendChild(el("h3", null, r.title));
  card.appendChild(el("p", null, r.body));
  if (r.stats.length) {
    const stats = el("div", "stats");
    r.stats.forEach(([v, l]) => {
      const s = el("div", null, `<b>${v}</b>${l}`);
      stats.appendChild(s);
    });
    card.appendChild(stats);
  }
  researchGrid.appendChild(card);
});

// Projects
const PLAY_ICON = `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="11" fill="rgba(255,255,255,0.92)"/><path d="M10 8.5l6 3.5-6 3.5z" fill="#1a1a1a"/></svg>`;
const projectsGrid = document.getElementById("projects-grid");
PROJECTS.forEach((p, i) => {
  const isVideo = p.media && p.media.type === "video";
  const card = el(isVideo ? "button" : "div", "project-card reveal" + (p.flagship ? " flagship-tag" : ""));
  if (isVideo) {
    card.type = "button";
    card.dataset.youtube = p.media.youtube;
    card.addEventListener("click", () => openLightbox(p.media.youtube));
  }

  const media = el("div", "project-media");
  if (isVideo) {
    const img = el("img");
    img.src = p.media.thumb;
    img.alt = "";
    img.loading = "lazy";
    media.appendChild(img);
    media.appendChild(el("span", "play", PLAY_ICON));
  } else if (p.media && p.media.type === "letter") {
    media.appendChild(el("span", "letter", p.media.letter));
  }
  card.appendChild(media);

  const body = el("div", "project-body");
  body.appendChild(el("span", "idx mono", `P/${String(i + 1).padStart(2, "0")}${p.flagship ? " · FLAGSHIP" : ""}`));
  body.appendChild(el("h3", null, p.title));
  body.appendChild(el("p", null, p.body));
  card.appendChild(body);

  projectsGrid.appendChild(card);
});

// Publications
const pubList = document.getElementById("pub-list");
const PUB_PREVIEW = 8;
PUBLICATIONS.forEach((p, i) => {
  const item = el("div", "pub-item" + (i >= PUB_PREVIEW ? " hidden" : ""));
  const tierBadge = p.tier && p.tier !== "—" ? `<span class="tier">${p.tier}</span>` : "";
  item.appendChild(el("div", "pub-meta mono", `${p.year}${tierBadge}`));
  const body = el("div");
  let pubUrl = null;
  if (p.doi) {
    pubUrl = p.doi.startsWith("10.") ? `https://doi.org/${p.doi}` : `https://${p.doi}`;
  }
  const titleHtml = pubUrl
    ? `<a href="${pubUrl}" target="_blank" rel="noopener">${p.title}</a>`
    : p.title;
  body.appendChild(el("h3", null, titleHtml));
  if (p.authors) body.appendChild(el("p", "authors", p.authors));
  body.appendChild(el("p", "where", p.venue + (p.highlight ? ` · <span class="hl">${p.highlight}</span>` : "")));
  item.appendChild(body);
  pubList.appendChild(item);
});
const pubMoreBtn = document.getElementById("pub-more");
if (PUBLICATIONS.length <= PUB_PREVIEW) {
  pubMoreBtn.style.display = "none";
} else {
  pubMoreBtn.addEventListener("click", () => {
    document.querySelectorAll(".pub-item.hidden").forEach((n) => n.classList.remove("hidden"));
    pubMoreBtn.style.display = "none";
  });
}

// Patents
const patentsList = document.getElementById("patents-list");
PATENTS.forEach((p) => {
  const item = el("div", "patent-item reveal");
  const titleHtml = p.url
    ? `<a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>`
    : p.title;
  item.appendChild(el("h3", null, titleHtml));
  item.appendChild(el("p", "office mono", p.office));
  item.appendChild(el("p", "status", `${p.status} · ${p.detail}`));
  patentsList.appendChild(item);
});

// Team
const teamGrid = document.getElementById("team-grid");
MEMBERS.forEach((m) => {
  const card = el("div", "team-card reveal");
  const initials = m.name.split(" ").slice(-2).map((w) => w[0]).join("").toUpperCase();
  const avatar = m.photo
    ? el("img", "avatar photo")
    : el("div", "avatar", initials);
  if (m.photo) {
    avatar.src = m.photo;
    avatar.alt = m.name;
    avatar.loading = "lazy";
  }
  card.appendChild(avatar);
  card.appendChild(el("span", "tag", m.tag));
  card.appendChild(el("h3", null, m.name));
  card.appendChild(el("p", "role", m.role));
  card.appendChild(el("p", null, m.body));
  teamGrid.appendChild(card);
});

// News
const newsList = document.getElementById("news-list");
NEWS.forEach((n) => {
  const item = el("div", "news-item" + (n.photo ? " has-photo" : ""));
  item.appendChild(el("span", "date mono", fmtDate(n.date)));
  item.appendChild(el("span", "tag", n.tag));
  const bodyWrap = el("div", "body-wrap");
  bodyWrap.appendChild(el("span", "body", n.body));
  if (n.photo) {
    const img = el("img", "news-photo");
    img.src = n.photo;
    img.alt = "";
    img.loading = "lazy";
    bodyWrap.appendChild(img);
  }
  item.appendChild(bodyWrap);
  newsList.appendChild(item);
});

// Honors
const honorsList = document.getElementById("honors-list");
HONORS.forEach((h) => {
  const titleHtml = h.url
    ? `<a href="${h.url}" target="_blank" rel="noopener">${h.title}</a>`
    : h.title;
  honorsList.appendChild(el("li", null, `<b>${h.year}</b> — ${titleHtml}<span class="where">${h.where}</span>`));
});

const serviceList = document.getElementById("service-list");
SERVICE.forEach((s) => {
  const whereHtml = s.url
    ? `<a href="${s.url}" target="_blank" rel="noopener">${s.where}</a>`
    : s.where;
  serviceList.appendChild(el("li", null, `<b>${s.year}</b> — ${s.role}, ${whereHtml}`));
});
document.getElementById("reviewer-for").innerHTML = `<b>Reviewer for</b> ${REVIEWER_FOR}`;

// Clock (Asia/Ho_Chi_Minh)
function tickClock() {
  const el = document.getElementById("clock");
  if (!el) return;
  const now = new Date().toLocaleTimeString("en-GB", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
  });
  el.textContent = now;
}
tickClock();
setInterval(tickClock, 30000);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", () => {
  const open = header.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll(".site-nav a").forEach((a) =>
  a.addEventListener("click", () => header.classList.remove("open"))
);

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxIframe = document.getElementById("lightboxIframe");
function openLightbox(youtubeId) {
  lightboxIframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1`;
  lightbox.hidden = false;
}
function closeLightbox() {
  lightbox.hidden = true;
  lightboxIframe.src = "";
}
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
});

// Hero robot arm — ported from buitienson.com's own hero-robot script:
// a full-bleed procedural SVG (2-link IK arm + ROSE gripper) redrawn every
// frame from the hero section's own pixel size, not a fixed viewBox.
(function initRobotArm() {
  const svg = document.getElementById("heroRobot");
  const hero = svg && svg.closest(".hero");
  if (!svg || !hero) return;

  const $ = (id) => document.getElementById(id);
  const els = {
    shadow: $("rbBaseShadow"), base: $("rbBase"), baseTop: $("rbBaseTop"), block: $("rbBlock"),
    upper: $("rbUpper"), upperT: $("rbUpperT"), fore: $("rbFore"), foreT: $("rbForeT"),
    grip: $("rbGrip"), core: $("rbCore"),
    petals: [$("rbPet0"), $("rbPet1"), $("rbPet2"), $("rbPet3"), $("rbPet4"), $("rbPet5")],
    j1: $("rbJ1"), j1i: $("rbJ1i"), j2: $("rbJ2"), j2i: $("rbJ2i"), j3: $("rbJ3"), j3i: $("rbJ3i"),
  };

  let W = 0, H = 0, base = { x: 0, y: 0 }, L1 = 200, L2 = 175, GRIP = 46, factor = 1;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    W = hero.clientWidth;
    H = hero.clientHeight;
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    factor = Math.max(0.48, Math.min(1.08, Math.min(W / 1220, H / 820)));
    L1 = 252 * factor;
    L2 = 318 * factor;
    GRIP = 58 * factor;
    base.x = W - Math.max(150 * factor, W * 0.22);
    base.y = H - 156 * factor;

    const oval = (cx, cy, rx, ry) => {
      const k = 0.5522847498;
      return `M ${cx - rx} ${cy} C ${cx - rx} ${cy - ry * k} ${cx - rx * k} ${cy - ry} ${cx} ${cy - ry} C ${cx + rx * k} ${cy - ry} ${cx + rx} ${cy - ry * k} ${cx + rx} ${cy} C ${cx + rx} ${cy + ry * k} ${cx + rx * k} ${cy + ry} ${cx} ${cy + ry} C ${cx - rx * k} ${cy + ry} ${cx - rx} ${cy + ry * k} ${cx - rx} ${cy} Z`;
    };
    const bw = 136 * factor, topY = base.y + 82 * factor, bottomY = base.y + 118 * factor;
    if (els.shadow) {
      els.shadow.setAttribute("cx", base.x + 6 * factor);
      els.shadow.setAttribute("cy", bottomY + 12 * factor);
      els.shadow.setAttribute("rx", bw * 1.08);
      els.shadow.setAttribute("ry", 17 * factor);
    }
    els.base.setAttribute("d", `M ${base.x - bw} ${topY} C ${base.x - bw} ${topY - 18 * factor} ${base.x + bw} ${topY - 18 * factor} ${base.x + bw} ${topY} L ${base.x + bw * 0.94} ${bottomY} C ${base.x + bw * 0.94} ${bottomY + 15 * factor} ${base.x - bw * 0.94} ${bottomY + 15 * factor} ${base.x - bw * 0.94} ${bottomY} Z`);
    if (els.baseTop) els.baseTop.setAttribute("d", oval(base.x, topY, bw * 0.84, 18 * factor));
    els.block.setAttribute("x", base.x - 46 * factor);
    els.block.setAttribute("y", base.y - 42 * factor);
    els.block.setAttribute("width", 92 * factor);
    els.block.setAttribute("height", 128 * factor);
    els.block.setAttribute("rx", 18 * factor);
    [[els.j1, 36], [els.j2, 31], [els.j3, 27]].forEach(([c, r]) => c.setAttribute("r", r * factor));
    [[els.j1i, 13], [els.j2i, 12], [els.j3i, 9]].forEach(([c, r]) => c.setAttribute("r", r * factor));
  }

  const tgt = { x: 0, y: 0 }, cur = { x: 0, y: 0 };
  let haveMouse = false, lastMove = -9999;

  function setTargetFromClient(cx, cy) {
    const r = svg.getBoundingClientRect();
    tgt.x = cx - r.left;
    tgt.y = cy - r.top;
    haveMouse = true;
    lastMove = performance.now();
  }
  window.addEventListener("mousemove", (e) => setTargetFromClient(e.clientX, e.clientY), { passive: true });
  window.addEventListener("mouseleave", () => { haveMouse = false; });
  window.addEventListener(
    "touchmove",
    (e) => { if (e.touches && e.touches[0]) setTargetFromClient(e.touches[0].clientX, e.touches[0].clientY); },
    { passive: true }
  );

  function idleTarget(t) {
    const restX = base.x - (L1 + L2) * 0.58;
    const restY = base.y - (L1 + L2) * 0.62;
    const R = 44 * factor;
    return { x: restX + Math.cos(t * 0.0006) * R, y: restY + Math.sin(t * 0.0009) * R * 0.7 };
  }

  function solveAndDraw() {
    let dx = cur.x - base.x, dy = cur.y - base.y;
    let dist = Math.hypot(dx, dy);
    const maxR = L1 + L2 - 4, minR = Math.abs(L1 - L2) + 14;
    if (dist > maxR) { dx *= maxR / dist; dy *= maxR / dist; dist = maxR; }
    else if (dist < minR) { const s = dist === 0 ? 0 : minR / dist; dx *= s; dy *= s; dist = minR; }

    let D = (dist * dist - L1 * L1 - L2 * L2) / (2 * L1 * L2);
    D = Math.max(-1, Math.min(1, D));
    const a = Math.atan2(dy, dx);
    let bestElbow = null;
    [1, -1].forEach((sign) => {
      const q2 = sign * Math.acos(D);
      const q1 = a - Math.atan2(L2 * Math.sin(q2), L1 + L2 * Math.cos(q2));
      const ex = base.x + L1 * Math.cos(q1), ey = base.y + L1 * Math.sin(q1);
      if (!bestElbow || ex > bestElbow.ex) bestElbow = { ex, ey, q1, q2 };
    });
    const { ex, ey, q1, q2 } = bestElbow;
    const endA = q1 + q2;
    const wx = ex + L2 * Math.cos(endA), wy = ey + L2 * Math.sin(endA);

    const capsulePath = (x1, y1, x2, y2, width) => {
      const len = Math.max(1, Math.hypot(x2 - x1, y2 - y1));
      const nx = (-(y2 - y1) / len) * width * 0.5;
      const ny = ((x2 - x1) / len) * width * 0.5;
      return `M ${x1 + nx} ${y1 + ny} L ${x2 + nx} ${y2 + ny} Q ${x2} ${y2} ${x2 - nx} ${y2 - ny} L ${x1 - nx} ${y1 - ny} Q ${x1} ${y1} ${x1 + nx} ${y1 + ny} Z`;
    };
    const highlightPath = (x1, y1, x2, y2, trim) => {
      const len = Math.max(1, Math.hypot(x2 - x1, y2 - y1));
      const ux = (x2 - x1) / len, uy = (y2 - y1) / len;
      return `M ${x1 + ux * trim} ${y1 + uy * trim} L ${x2 - ux * trim} ${y2 - uy * trim}`;
    };
    const lowerW = 58 * factor, upperW = 52 * factor;
    els.upper.setAttribute("d", capsulePath(base.x, base.y, ex, ey, lowerW));
    els.upperT.setAttribute("d", highlightPath(base.x, base.y, ex, ey, lowerW * 0.78));
    els.fore.setAttribute("d", capsulePath(ex, ey, wx, wy, upperW));
    els.foreT.setAttribute("d", highlightPath(ex, ey, wx, wy, upperW * 0.82));

    els.j1.setAttribute("cx", base.x); els.j1.setAttribute("cy", base.y);
    els.j1i.setAttribute("cx", base.x); els.j1i.setAttribute("cy", base.y);
    els.j2.setAttribute("cx", ex); els.j2.setAttribute("cy", ey);
    els.j2i.setAttribute("cx", ex); els.j2i.setAttribute("cy", ey);
    els.j3.setAttribute("cx", wx); els.j3.setAttribute("cy", wy);
    els.j3i.setAttribute("cx", wx); els.j3i.setAttribute("cy", wy);

    // ROSE soft gripper: petals bloom open / close over time.
    const bloom = 0.5 + 0.5 * Math.sin(performance.now() * 0.0022);
    const spread = 0.12 + 0.52 * bloom;
    const PL = GRIP * (1.25 + 0.34 * bloom);
    const PW = GRIP * 0.42;
    const ca = Math.cos(endA), sa = Math.sin(endA);
    const n = els.petals.length;
    const toWorld = (lx, ly) => [wx + lx * ca - ly * sa, wy + lx * sa + ly * ca];
    const petalStyles = [
      "fill:#c9151b;stroke:#8f1010;opacity:.54",
      "fill:#e8272b;stroke:#9f1517;opacity:.64",
      "fill:#ff4a45;stroke:#a61718;opacity:.46",
      "fill:#d71920;stroke:#8f1010;opacity:.60",
      "fill:#ef3437;stroke:#9f1517;opacity:.66",
      "fill:#bd1018;stroke:#7f0d12;opacity:.50",
    ];
    for (let i = 0; i < n; i++) {
      const pa = (i - (n - 1) / 2) * spread;
      const dirx = Math.cos(pa), diry = Math.sin(pa);
      const nx = -Math.sin(pa), ny = Math.cos(pa);
      const tipL = PL, midL = PL * 0.5;
      const [bX, bY] = toWorld(0, 0);
      const [tX, tY] = toWorld(dirx * tipL, diry * tipL);
      const [c1X, c1Y] = toWorld(dirx * midL + nx * PW, diry * midL + ny * PW);
      const [c2X, c2Y] = toWorld(dirx * midL - nx * PW, diry * midL - ny * PW);
      els.petals[i].setAttribute(
        "d",
        `M ${bX.toFixed(1)} ${bY.toFixed(1)} Q ${c1X.toFixed(1)} ${c1Y.toFixed(1)} ${tX.toFixed(1)} ${tY.toFixed(1)} Q ${c2X.toFixed(1)} ${c2Y.toFixed(1)} ${bX.toFixed(1)} ${bY.toFixed(1)} Z`
      );
      els.petals[i].setAttribute("style", petalStyles[i % petalStyles.length]);
    }
    els.core.setAttribute("cx", wx);
    els.core.setAttribute("cy", wy);
    els.core.setAttribute("r", 9 * factor);
    els.core.setAttribute("style", "fill:#b90f18;stroke:#7f0d12;stroke-width:1;opacity:.72");
  }

  function frame(now) {
    const goal = haveMouse && now - lastMove < 2600 ? tgt : idleTarget(now);
    const ease = reduce ? 1 : 0.085;
    cur.x += (goal.x - cur.x) * ease;
    cur.y += (goal.y - cur.y) * ease;
    solveAndDraw();
    if (!reduce) requestAnimationFrame(frame);
  }

  function start() {
    resize();
    const g = idleTarget(performance.now());
    cur.x = g.x;
    cur.y = g.y;
    solveAndDraw();
    if (!reduce) requestAnimationFrame(frame);
  }

  let lastW = 0, lastH = 0;
  window.addEventListener(
    "resize",
    () => {
      const w = hero.clientWidth, h = hero.clientHeight;
      if (w === lastW && Math.abs(h - lastH) < 90) return;
      lastW = w; lastH = h;
      resize();
      solveAndDraw();
    },
    { passive: true }
  );

  if (document.readyState === "complete") start();
  else window.addEventListener("load", start);
  setTimeout(start, 300);
})();

// Scroll reveal
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
);
document.querySelectorAll(".reveal").forEach((elx) => revealObserver.observe(elx));
