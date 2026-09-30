// Edit this file to change name, links, skills and status. Empty links are hidden.
export const site = {
  name: "Clement Yaw Amegashie",
  url: "https://portfolio-a4kf00s7k-acykhin247s-projects.vercel.app", // TODO: your real domain
  headline: "Turning data into decisions, systems into solutions.",
  intro: "I turn messy data into decisions people can act on. Information Technology student at UPSA, Accra, working across analytics, dashboards, databases and automation.",
  location: "Accra, Ghana",
  links: { email: "amegashieclementyaw@gmail.com", linkedin: "https://www.linkedin.com/in/clement-amegashie-40ab92394", github: "https://github.com/Acykhin247", whatsapp: "https://wa.me/233557571906", cv: "/cv.pdf", } as Record<string, string>, // cv: put cv.pdf in /public and set "/cv.pdf"
  openTo: ["Data analytics internships", "Freelance analytics projects", "Technical collaborations"],
  now: ["Data analytics", "Data visualization", "SQL", "Power BI", "Excel", "Database management"],
  next: ["Python", "Statistics", "Data science", "Machine learning"],
  later: ["AI", "Cloud", "Software engineering", "Data engineering"],
  experience: [{ role: "Campus Ambassador", org: "Worldview Findadmission", summary: "Connecting students with global education opportunities through peer outreach, digital content and community building." }],
  education: [{ school: "University of Professional Studies, Accra (UPSA)", detail: "BSc Information Technology", period: "In progress" }],
  certificates: [
    { title: "Data Analyst", issuer: "DataCamp", date: "June 12, 2026", credentialId: "DA0022642238714", file: "/files/data-analyst-certificate.pdf", image: "/img/cert-1.png" },
  ], // TODO: add more certificates the same way as you earn them
  // Levels: "Demonstrated in projects" only where a project on this site shows it.
  skills: [
    { group: "Analytics & BI", level: "Demonstrated in projects", items: ["Power BI", "DAX measures", "Power Query cleaning", "Star-schema data modelling", "Dashboard design", "Data storytelling"] },
    { group: "Excel", level: "Demonstrated in projects", items: ["SUMIFS", "Pivot tables", "Conditional formatting alerts", "Auto-updating dashboards"] },
    { group: "Databases and automation", level: "Currently developing", items: ["SQL", "Google Apps Script"] },
    { group: "Data science", level: "Currently developing", items: ["Python", "Statistics", "Machine learning"] },
  ],
  photo: "/img/profile.jpg",
  about: {
    paragraphs: [
      "I'm an Information Technology student at the University of Professional Studies, Accra, focused on data analytics, data visualization and database management. I like turning raw data into clear, actionable insights, using Power BI, Excel, SQL, Python and Google Apps Script to build dashboards, analyse datasets and automate workflows.",
      "Alongside my studies I serve as a Worldview Findadmission Campus Ambassador, connecting students with global education opportunities, and I create digital content for peer communities. Outside tech I enjoy custom tailoring, sartorial styling and horology.",
    ],
    drivers: [
      { title: "Curiosity", text: "I enjoy understanding how systems work and asking better questions." },
      { title: "Precision", text: "I care about accuracy, structure and attention to detail." },
      { title: "Problem solving", text: "I turn complex problems into practical solutions." },
      { title: "Continuous growth", text: "I keep exploring new technologies and ways of working." },
    ],
  },
  expertise: [
    { title: "Data Analytics", text: "Turning raw datasets into actionable insights.", icon: "analytics" },
    { title: "Data Visualization", text: "Building intuitive dashboards and visual stories.", icon: "visualization" },
    { title: "Database Management", text: "Designing, querying and managing structured data.", icon: "database" },
    { title: "Automation", text: "Reducing repetitive work through scripts and workflows.", icon: "automation" },
  ] as { title: string; text: string; icon: "analytics" | "visualization" | "database" | "automation" }[],
  interests: ["Custom tailoring", "Sartorial styling", "Horology", "Digital creativity"],
};
