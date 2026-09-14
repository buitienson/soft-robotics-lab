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

// Hero robot arm — 2-link inverse kinematics, reaches for the cursor and
// folds at the elbow when the target is close to the shoulder.
const rbShoulder = document.getElementById("rbShoulder");
const rbElbow = document.getElementById("rbElbow");
if (rbShoulder && rbElbow) {
  const heroBot = document.querySelector(".hero-bot");
  const SHOULDER = { x: 470, y: 470 };
  const L1 = 165;
  const L2 = 135;
  const MAX_REACH = L1 + L2 - 1;
  const MIN_REACH = Math.abs(L1 - L2) + 1;

  const outerPetals = Array.from(document.querySelectorAll(".rb-petals-outer .rb-petal-g"));
  const innerPetals = Array.from(document.querySelectorAll(".rb-petals-inner .rb-petal-g"));
  const outerAngles = outerPetals.map((_, i) => -90 + i * (180 / (outerPetals.length - 1)));
  const innerAngles = innerPetals.map((_, i) => -72 + i * (144 / (innerPetals.length - 1)));

  function solveIK(tx, ty) {
    const dx = tx - SHOULDER.x;
    const dy = ty - SHOULDER.y;
    let d = Math.hypot(dx, dy);
    d = Math.max(MIN_REACH, Math.min(MAX_REACH, d));
    const a1 = Math.atan2(dy, dx);
    const cosA = (L1 * L1 + d * d - L2 * L2) / (2 * L1 * d);
    const a2 = Math.acos(Math.max(-1, Math.min(1, cosA)));
    const cosB = (L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2);
    const b = Math.acos(Math.max(-1, Math.min(1, cosB)));
    const elbowRel = Math.PI - b;

    // Two IK branches exist (elbow bends to either side of the shoulder-target
    // line). Pick whichever puts the elbow joint higher on screen (smaller y),
    // so the arm always keeps its elbow clear of the "table" — regardless of
    // which side the cursor is on — instead of a fixed branch that only looks
    // right for targets on one side.
    const candidates = [
      { shoulder: a1 + a2, elbow: -elbowRel },
      { shoulder: a1 - a2, elbow: elbowRel },
    ];
    let best = candidates[0];
    let bestY = Infinity;
    for (const c of candidates) {
      const elbowY = SHOULDER.y + L1 * Math.sin(c.shoulder);
      if (elbowY < bestY) {
        bestY = elbowY;
        best = c;
      }
    }
    return {
      shoulder: (best.shoulder * 180) / Math.PI,
      elbow: (best.elbow * 180) / Math.PI,
    };
  }

  const target = { x: 150, y: 120 }; // resting target before the first mousemove
  let curShoulder = 0;
  let curElbow = 0;
  {
    const rest = solveIK(target.x, target.y);
    curShoulder = rest.shoulder;
    curElbow = rest.elbow;
  }

  document.addEventListener("mousemove", (e) => {
    const rect = heroBot.getBoundingClientRect();
    if (!rect.width) return;
    const scale = 640 / rect.width;
    target.x = (e.clientX - rect.left) * scale;
    target.y = (e.clientY - rect.top) * scale;
  });

  const GRIPPER_PERIOD = 5.5; // seconds for one full open+close cycle
  const visibleQuery = window.matchMedia("(min-width: 1400px)");
  let rafId = null;

  // Shortest-path angle delta (-180..180), so lerping never spins the long
  // way around when the IK branch switch (or atan2 wraparound) jumps ~360deg.
  function angleDelta(from, to) {
    return ((((to - from) % 360) + 540) % 360) - 180;
  }

  function tick() {
    const goal = solveIK(target.x, target.y);
    curShoulder += angleDelta(curShoulder, goal.shoulder) * 0.09;
    curElbow += angleDelta(curElbow, goal.elbow) * 0.12;
    rbShoulder.setAttribute("transform", `rotate(${curShoulder} ${SHOULDER.x} ${SHOULDER.y})`);
    rbElbow.setAttribute("transform", `rotate(${curElbow})`);

    const t = performance.now() / 1000;
    const openness = (Math.sin((t / GRIPPER_PERIOD) * Math.PI * 2 - Math.PI / 2) + 1) / 2;
    outerPetals.forEach((g, i) => {
      const open = outerAngles[i];
      g.setAttribute("transform", `rotate(${open * (0.08 + 0.92 * openness)})`);
    });
    innerPetals.forEach((g, i) => {
      const open = innerAngles[i];
      g.setAttribute("transform", `rotate(${open * (0.08 + 0.92 * openness)})`);
    });

    rafId = requestAnimationFrame(tick);
  }

  function syncLoop(mq) {
    if (mq.matches && rafId === null) {
      rafId = requestAnimationFrame(tick);
    } else if (!mq.matches && rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
  }
  visibleQuery.addEventListener("change", () => syncLoop(visibleQuery));
  syncLoop(visibleQuery);
}

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
