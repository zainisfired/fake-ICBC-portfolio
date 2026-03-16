const TEAM = {
  number: "#27859",
  name: "ICBC IRON-UMMAH",
  season: "2024–2025",
  email: "team@example.com",
};

const MEMBERS = [
  {
    name: "Hamza R",
    role: "Captain / Software Lead / Driver",
    grade: "12th Grade",
  },
  {
    name: "Ibrahim Syed",
    role: "Autonomous / Teleop",
    grade: "11th Grade",
  },
  {
    name: "Zain Qadri",
    role: "Autonomous Lead",
    grade: "8th Grade",
  },
  {
    name: "Sereen S",
    role: "Hardware Lead / Robot CAD / Assembly",
    grade: "11th Grade",
  },
  {
    name: "Safa K",
    role: "Robot Assembly",
    grade: "8th Grade",
  },
  {
    name: "Nusaybah K",
    role: "Robot Assembly",
    grade: "8th Grade",
  },
  {
    name: "Ihsan K",
    role: "Robot Assembly",
    grade: "8th Grade",
  },
  {
    name: "Zayd S",
    role: "Robot CAD",
    grade: "8th Grade",
  },
  {
    name: "Shaheen S",
    role: "Robot CAD",
    grade: "8th Grade",
  },
  {
    name: "Haani S",
    role: "Robot CAD",
    grade: "11th Grade",
  },
];

const MENTORS = [
  {
    name: "Brother Mohib",
    role: "Lead Software Mentor",
    expertise: "Software Engineering",
  },
  {
    name: "Brother Hawzin",
    role: "Lead Hardware Mentor",
    expertise: "Mechanical Design",
  },
  {
    name: "The Parents",
    role: "Supporting the Team Throughout the Entire Season",
    expertise: "Motivation",
  },
];

const COMPETITIONS = [
  {
    date: "Oct 12, 2024",
    event: "Qualifier #1 — Lincoln High School",
    location: "Springfield, IL",
    result: "1st Place",
    resultType: "win",
    notes: "Kicked off the season strong with a flawless auto run.",
  },
  {
    date: "Nov 2, 2024",
    event: "Qualifier #2 — Riverside Invitational",
    location: "Riverside, CA",
    result: "Finalist Alliance",
    resultType: "place",
    notes: "Reached the finals and earned the Think Award.",
  },
  {
    date: "Nov 23, 2024",
    event: "Scrimmage — Tech Valley",
    location: "Albany, NY",
    result: "Attended",
    resultType: "attend",
    notes: "Used this to test new intake mechanism.",
  },
  {
    date: "Jan 18, 2025",
    event: "Regional Championship",
    location: "Houston, TX",
    result: "2nd Place Alliance",
    resultType: "place",
    notes: "Advanced to State Championship!",
  },
  {
    date: "Feb 8, 2025",
    event: "State Championship",
    location: "Austin, TX",
    result: "Top 8 Alliance",
    resultType: "place",
    notes: "Best finish in team history.",
  },
  {
    date: "Apr 16, 2025",
    event: "FIRST World Championship",
    location: "Houston, TX",
    result: "Attended",
    resultType: "attend",
    notes: "Represented our region on the world stage.",
  },
];

const AWARDS = [
  {
    icon: "🏆",
    title: "Inspire Award — 1st Place",
    event: "Regional Championship",
    date: "Jan 2025",
    description:
      "Most prestigious award recognizing team excellence in robot design, engineering notebook, community outreach, and overall team performance.",
  },
  {
    icon: "🥇",
    title: "1st Place Alliance Captain",
    event: "Qualifier #1",
    date: "Oct 2024",
    description:
      "Led the winning alliance as captain, demonstrating strategic gameplay and strong robot performance in elimination matches.",
  },
  {
    icon: "💡",
    title: "Think Award",
    event: "Qualifier #2",
    date: "Nov 2024",
    description:
      "Awarded for exceptional engineering documentation, design process, and reflection in the team's engineering notebook.",
  },
  {
    icon: "🎨",
    title: "Design Award",
    event: "State Championship",
    date: "Feb 2025",
    description:
      "Recognizes innovative and functional robot design, including mechanical build quality and creative problem-solving.",
  },
  {
    icon: "🤝",
    title: "Connect Award",
    event: "Qualifier #1",
    date: "Oct 2024",
    description:
      "Honors teams that make connections with engineering professionals and serve as STEM ambassadors in their community.",
  },
  {
    icon: "🌟",
    title: "Motivate Award — 2nd Place",
    event: "Regional Championship",
    date: "Jan 2025",
    description:
      "Celebrates team spirit, enthusiasm, and the ability to share excitement about robotics with others.",
  },
  {
    icon: "🔩",
    title: "Innovate Award",
    event: "Qualifier #2",
    date: "Nov 2024",
    description:
      "Recognizes creative and innovative solutions to game challenges, showing original thinking in robot design or strategy.",
  },
  {
    icon: "🌐",
    title: "World Championship Qualifier",
    event: "State Championship",
    date: "Feb 2025",
    description:
      "Advanced to represent our region at the FIRST World Championship in Houston, Texas.",
  },
];

const OUTREACH = [
  {
    tag: "STEM Workshop",
    title: "Elementary School Robot Demo",
    desc: "We visited 3 local elementary schools and introduced over 200 students to robotics, coding, and the engineering design process.",
  },
  {
    tag: "FTC Mentorship",
    title: "Rookie Team Mentorship",
    desc: "We helped begin 2 FTC teams and multiple FLL teams in our local area. Some of the FTC teams we helped include #31675, and #32738",
  },
  {
    tag: "Community Event",
    title: "Public Library STEM Night",
    desc: "Hosted a hands-on STEM night at the local library, with activities for kids aged 6–14, reaching over 150 families.",
  },
  {
    tag: "FLL Judging",
    title: "FLL Tournament Volunteering",
    desc: "Seven team members volunteered as judges and referees at the regional FLL tournament, supporting 30 junior teams.",
  },
  {
    tag: "School Program",
    title: "After-School Robotics Club",
    desc: "Founded and ran a weekly after-school robotics club at a local middle school, mentoring 25 students across the year.",
  },
  {
    tag: "Fundraiser",
    title: "STEM Scholarship Drive",
    desc: "Organized a community fundraiser that raised $2,400 for local students pursuing STEM education.",
  },
];

const SPONSORS = {
  gold: [
    { name: "Apple", type: "Technology Partner" },
    { name: "Qualcomm", type: "Technology Partner" },
  ],
  silver: [
    { name: "Kumon", type: "Education Partner" },
    { name: "AMD", type: "Technology Support" },
    { name: "International Foods", type: "Community Partner" },
  ],
  bronze: [
    { name: "Kabaji Grill", type: "Food Sponsor" },
    { name: "Phoenicia", type: "Food Sponsor" },
    { name: "Academix Tutoring", type: "Education Support" },
    { name: "The Rahman Family", type: "Family Support" },
  ],
};
