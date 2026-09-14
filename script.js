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
  const card = el("div", "research-card");
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
const projectsGrid = document.getElementById("projects-grid");
PROJECTS.forEach((p, i) => {
  const card = el("div", "project-card" + (p.flagship ? " flagship-tag" : ""));
  card.appendChild(el("span", "idx mono", `P/${String(i + 1).padStart(2, "0")}${p.flagship ? " · FLAGSHIP" : ""}`));
  card.appendChild(el("h3", null, p.title));
  card.appendChild(el("p", null, p.body));
  projectsGrid.appendChild(card);
});

// Publications
const pubList = document.getElementById("pub-list");
const PUB_PREVIEW = 8;
PUBLICATIONS.forEach((p, i) => {
  const item = el("div", "pub-item" + (i >= PUB_PREVIEW ? " hidden" : ""));
  item.appendChild(el("div", "pub-meta mono", `${fmtDate(p.date)}<span class="venue">${p.venue}</span>`));
  const body = el("div");
  body.appendChild(el("h3", null, p.title));
  body.appendChild(el("p", "authors", p.authors));
  body.appendChild(el("p", "where", p.where));
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

// Team
const teamGrid = document.getElementById("team-grid");
MEMBERS.forEach((m) => {
  const card = el("div", "team-card");
  const initials = m.name.split(" ").slice(-2).map((w) => w[0]).join("").toUpperCase();
  card.appendChild(el("div", "avatar", initials));
  card.appendChild(el("span", "tag", m.tag));
  card.appendChild(el("h3", null, m.name));
  card.appendChild(el("p", "role", m.role));
  card.appendChild(el("p", null, m.body));
  teamGrid.appendChild(card);
});

// News
const newsList = document.getElementById("news-list");
NEWS.forEach((n) => {
  const item = el("div", "news-item");
  item.appendChild(el("span", "date mono", fmtDate(n.date)));
  item.appendChild(el("span", "tag", n.tag));
  item.appendChild(el("span", "body", n.body));
  newsList.appendChild(item);
});

// Honors
const honorsList = document.getElementById("honors-list");
HONORS.forEach((h) => honorsList.appendChild(el("li", null, h)));

const serviceList = document.getElementById("service-list");
SERVICE.forEach(([term, def]) => {
  serviceList.appendChild(el("dt", null, term));
  serviceList.appendChild(el("dd", null, def));
});

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
