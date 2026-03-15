function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

  const page = document.getElementById(pageId);
  if (page) page.classList.add('active');

  const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (link) link.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('navLinks').classList.remove('open');
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    showPage(link.dataset.page);
  });
});

document.querySelector('.nav-brand').addEventListener('click', () => showPage('home'));

document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

function renderTeam() {
  const grid = document.getElementById('teamGrid');
  grid.innerHTML = MEMBERS.map(m => `
    <div class="member-card">
      <div class="img-placeholder member-photo">${m.name.split(' ')[0]}'s Photo</div>
      <div class="member-info">
        <div class="member-name">${m.name}</div>
        <div class="member-role">${m.role}</div>
        <div class="member-grade">${m.grade}</div>
      </div>
    </div>
  `).join('');
}

function renderTimeline() {
  const tl = document.getElementById('timeline');
  tl.innerHTML = COMPETITIONS.map((c, i) => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="tc-date">${c.date}</div>
        <div class="tc-event">${c.event}</div>
        <div class="tc-location">📍 ${c.location}</div>
        <span class="tc-result ${c.resultType}">${c.result}</span>
        ${c.notes ? `<p style="color:var(--text-muted);font-size:0.85rem;margin-top:0.75rem;">${c.notes}</p>` : ''}
      </div>
    </div>
  `).join('');
}

function renderAwards() {
  const grid = document.getElementById('awardsGrid');
  grid.innerHTML = AWARDS.map(a => `
    <div class="award-card">
      <div class="award-icon">${a.icon}</div>
      <div>
        <div class="award-title">${a.title}</div>
        <div class="award-event">${a.event}</div>
        <div class="award-date">${a.date}</div>
      </div>
    </div>
  `).join('');
}

function renderOutreach() {
  const grid = document.getElementById('outreachGrid');
  grid.innerHTML = OUTREACH.map(o => `
    <div class="outreach-card">
      <div class="img-placeholder outreach-img">${o.title} Photo</div>
      <div class="outreach-body">
        <div class="outreach-tag">${o.tag}</div>
        <div class="outreach-title">${o.title}</div>
        <p class="outreach-desc">${o.desc}</p>
      </div>
    </div>
  `).join('');
}

function renderSponsors() {
  const tiers = [
    { id: 'goldSponsors',   data: SPONSORS.gold,   cls: 'gold-card'   },
    { id: 'silverSponsors', data: SPONSORS.silver, cls: 'silver-card' },
    { id: 'bronzeSponsors', data: SPONSORS.bronze, cls: 'bronze-card' },
  ];
  tiers.forEach(({ id, data, cls }) => {
    document.getElementById(id).innerHTML = data.map(s => `
      <div class="sponsor-card ${cls}">
        <div class="img-placeholder sponsor-logo">${s.name} Logo</div>
        <div class="sponsor-name">${s.name}</div>
        <div class="sponsor-type">${s.type}</div>
      </div>
    `).join('');
  });
}

function applyTeamInfo() {
  document.querySelectorAll('.nav-team-name').forEach(el => {
    el.innerHTML = `Team <span class="accent">${TEAM.number}</span>`;
  });
  const cta = document.querySelector('.sponsor-cta a');
  if (cta) cta.href = `mailto:${TEAM.email}`;
}

document.addEventListener('DOMContentLoaded', () => {
  applyTeamInfo();
  renderTeam();
  renderTimeline();
  renderAwards();
  renderOutreach();
  renderSponsors();
});