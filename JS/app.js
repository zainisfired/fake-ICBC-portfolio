// ==========================================
//  FTC TEAM PORTFOLIO — app.js
// ==========================================

// ---- PAGE NAVIGATION ----
function showPage(pageId) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelectorAll(".nav-link")
    .forEach((l) => l.classList.remove("active"));

  const page = document.getElementById(pageId);
  if (page) page.classList.add("active");

  const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (link) link.classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });

  // Close mobile menu
  document.getElementById("navLinks").classList.remove("open");
}

// ---- NAV LINK CLICKS ----
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

// ---- BRAND CLICK → HOME ----
document
  .querySelector(".nav-brand")
  .addEventListener("click", () => showPage("home"));

// ---- HAMBURGER ----
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// ---- SCROLL SHADOW ----
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 20);
});

// ==========================================
//  RENDER FUNCTIONS
// ==========================================

// ---- TEAM ----
function renderTeam() {
  const grid = document.getElementById("teamGrid");

  // Define the rows
  const rows = [
    [0, 1, 2], // Hamza, Ibrahim, Zain
    [3, 4, 5, 6], // Sereen, Safa, Nusaybah, Ihsan
    [7, 8, 9], // Zayd, Shaheen, Haani
  ];

  grid.innerHTML = rows
    .map((row) => {
      const rowMembers = row.map((index) => MEMBERS[index]);
      return `
      <div class="team-row">
        ${rowMembers
          .map(
            (m) => `
          <div class="member-card">
            <div class="img-placeholder member-photo">${m.name.split(" ")[0]}'s Photo</div>
            <div class="member-info">
              <div class="member-name">${m.name}</div>
              <div class="member-role">${m.role}</div>
              <div class="member-grade">${m.grade}</div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    `;
    })
    .join("");
}

// ---- MENTORS ----
function renderMentors() {
  const grid = document.getElementById("mentorsGrid");

  grid.innerHTML = `
    <div class="mentor-row">
      ${MENTORS.map(
        (m) => `
        <div class="mentor-card">
          <div class="img-placeholder mentor-photo">${m.name.split(" ")[1]}'s Photo</div>
          <div class="mentor-info">
            <div class="mentor-name">${m.name}</div>
            <div class="mentor-role">${m.role}</div>
            <div class="mentor-expertise">${m.expertise}</div>
          </div>
        </div>
      `,
      ).join("")}
    </div>
  `;
}

// ---- COMPETITION TIMELINE ----
function renderTimeline() {
  const tl = document.getElementById("timeline");
  tl.innerHTML = COMPETITIONS.map(
    (c, i) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="tc-date">${c.date}</div>
        <div class="tc-event">${c.event}</div>
        <div class="tc-location">📍 ${c.location}</div>
        <span class="tc-result ${c.resultType}">${c.result}</span>
        ${c.notes ? `<p style="color:var(--text-muted);font-size:0.85rem;margin-top:0.75rem;">${c.notes}</p>` : ""}
      </div>
    </div>
  `,
  ).join("");
}

// ---- AWARDS ----
function renderAwards() {
  const grid = document.getElementById("awardsGrid");
  grid.innerHTML = AWARDS.map(
    (a) => `
    <div class="award-card">
      <div class="award-icon">${a.icon}</div>
      <div class="award-content">
        <div class="award-title">${a.title}</div>
        <div class="award-event">${a.event}</div>
        <div class="award-date">${a.date}</div>
        <div class="award-description">${a.description}</div>
      </div>
    </div>
  `,
  ).join("");
}

// ---- OUTREACH ----
function renderOutreach() {
  const grid = document.getElementById("outreachGrid");
  grid.innerHTML = OUTREACH.map(
    (o) => `
    <div class="outreach-card">
      <div class="img-placeholder outreach-img">${o.title} Photo</div>
      <div class="outreach-body">
        <div class="outreach-tag">${o.tag}</div>
        <div class="outreach-title">${o.title}</div>
        <p class="outreach-desc">${o.desc}</p>
      </div>
    </div>
  `,
  ).join("");
}

// ---- SPONSORS ----
function renderSponsors() {
  const tiers = [
    { id: "goldSponsors", data: SPONSORS.gold, cls: "gold-card" },
    { id: "silverSponsors", data: SPONSORS.silver, cls: "silver-card" },
    { id: "bronzeSponsors", data: SPONSORS.bronze, cls: "bronze-card" },
  ];
  tiers.forEach(({ id, data, cls }) => {
    document.getElementById(id).innerHTML = data
      .map(
        (s) => `
      <div class="sponsor-card ${cls}">
        <div class="img-placeholder sponsor-logo">${s.name} Logo</div>
        <div class="sponsor-name">${s.name}</div>
        <div class="sponsor-type">${s.type}</div>
      </div>
    `,
      )
      .join("");
  });
}

// ---- INJECT TEAM INFO ----
function applyTeamInfo() {
  document.querySelectorAll(".nav-team-name").forEach((el) => {
    el.innerHTML = `Team <span class="accent">${TEAM.number}</span>`;
  });
  const cta = document.querySelector(".sponsor-cta a");
  if (cta) cta.href = `mailto:${TEAM.email}`;
}

// ==========================================
//  TYPING ANIMATION
// ==========================================
const typingPhrases = [
  "ICBC IRON-UMMAH",
  "Inspiring the next generation of innovators",
  "Engineering excellence, community impact.",
  "Building robots, building character.",
  "Innovate. Inspire. Win.",
];

function startTypingAnimation() {
  const el = document.querySelector(".hero-sub");
  if (!el) return;

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const TYPE_SPEED = 80; // ms per character when typing
  const DELETE_SPEED = 70; // ms per character when deleting
  const HOLD_DELAY = 2800; // ms to hold before deleting
  const NEXT_DELAY = 400; // ms pause before typing next phrase

  function tick() {
    const current = typingPhrases[phraseIndex];

    if (isDeleting) {
      charIndex--;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % typingPhrases.length;
        setTimeout(tick, NEXT_DELAY);
        return;
      }
      setTimeout(tick, DELETE_SPEED);
    } else {
      charIndex++;
      el.textContent = current.slice(0, charIndex);

      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(tick, HOLD_DELAY);
        return;
      }
      setTimeout(tick, TYPE_SPEED);
    }
  }

  tick();
}

// ==========================================
//  INIT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  applyTeamInfo();
  renderTeam();
  renderMentors();
  renderTimeline();
  renderAwards();
  renderOutreach();
  renderSponsors();
  startTypingAnimation();
});
