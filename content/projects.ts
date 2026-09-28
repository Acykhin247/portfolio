// Add a project = add one object to this array. New categories appear as filters automatically.
// Empty sections (text, lists) are hidden on the project page, so only fill what is true.
export type Project = {
  slug: string; title: string; category: string; year: number; status: "Completed" | "In progress" | "Planned";
  summary: string; problem: string; objective: string; process: string[]; tools: string[]; tags?: string[];
  images?: { src: string; alt: string }[]; kpis?: { label: string; value: string }[]; parts?: { name: string; detail: string }[]; files?: { label: string; href: string }[];
  insights: string[]; recommendations?: string[]; results: string; challenges: string[]; lessons: string[]; futureImprovements: string[];
  note?: string; links?: { github?: string; demo?: string; dashboard?: string; report?: string }; featured?: boolean; published?: boolean;
};
export const projects: Project[] = [
  { slug: "harvestlink-cooperative-analysis", title: "HarvestLink Cooperative Performance Analysis", category: "Data Analytics", year: 2026, status: "Completed", featured: true,
    summary: "End-to-end analysis of a farmer cooperative: Excel analysis, Power Query cleaning, a star-schema model, a 3-page Power BI dashboard and a 10-minute management briefing.",
    problem: "Yield and profitability vary by crop and district, post-harvest losses cut the quantity available to sell, farmers use market channels with different prices, and input costs are rising.",
    objective: "Answer management's question: how can data improve farmer profitability, reduce post-harvest losses and strengthen market decisions?",
    process: ["Analysed 505 raw farm records in Excel (SUMIFS, pivots) covering harvest, losses, sales, cost, price and revenue", "Cleaned in Power Query: standardised Market Channel text and removed 5 duplicates, leaving 500 records", "Built a star schema: Crops and Districts lookup tables around a Farm Records fact table", "Wrote DAX measures (Total Revenue, Total Gross Margin, Margin per Acre, Loss Rate %) and cross-checked them against Excel", "Designed three interactive dashboard pages: overview, district and efficiency, market channels and losses", "Presented the findings as a 10-minute briefing and prepared a Q&A defence guide"],
    tools: ["Power BI", "DAX", "Power Query", "Excel"], tags: ["agriculture", "star schema", "post-harvest loss", "capstone"],
    kpis: [{ label: "Farm records", value: "500" }, { label: "Total revenue", value: "GHS 84.55M" }, { label: "Gross margin", value: "GHS 79.6M" }, { label: "Post-harvest loss rate", value: "8.89%" }],
    parts: [{ name: "Excel analysis and cleaning", detail: "Raw and cleaned records, lookup tables and pivots." }, { name: "Power BI dashboard", detail: "Three interactive pages with crop, district and channel slicers." }, { name: "Management briefing", detail: "Slide deck for the 10-minute presentation." }, { name: "Q&A defence guide and script", detail: "Evidence and calculation notes behind each insight (kept private)." }],
    files: [{ label: "Dashboard export (PDF)", href: "/files/harvestlink-dashboard.pdf" }, { label: "Power BI file (.pbix)", href: "/files/harvestlink-dashboard.pbix" }, { label: "Briefing deck (.pptx)", href: "/files/harvestlink-briefing.pptx" }, { label: "Excel analysis (.xlsx)", href: "/files/harvestlink-analysis.xlsx" }],
    images: [{ src: "/img/harvestlink-1.png", alt: "Power BI dashboard, Overview page: KPIs, margin by crop, revenue by channel and month" },{ src: "/img/harvestlink-2.png", alt: "Power BI dashboard, District and efficiency page: margin per acre by district and crop" },{ src: "/img/harvestlink-3.png", alt: "Power BI dashboard, Market channels and post-harvest losses page" }],
    insights: ["Tomato (GHS 34.9M) and Pepper (GHS 23.0M) generate about 73% of total margin, and also convert the most revenue into margin.", "District efficiency depends on the crop: Techiman is weakest for Tomato (89.5% of average margin per acre) but strongest for Pepper (109.5%).", "Kintampo's low Tomato total reflects fewer planted acres, not weaker farming: it ranks second on margin per acre.", "Post-harvest losses are highest in Ejura (9.54%) and Kintampo (9.32%), and for Maize (9.35%).", "Processor is the weakest channel on price, revenue and loss rate (9.22% loss), while selling prices are otherwise nearly identical across channels."],
    recommendations: ["Expand acreage: grow Tomato in Kintampo and Pepper in Techiman, both efficient per acre and under-planted.", "Target losses where they concentrate: Ejura, Kintampo and Maize, not a blanket programme.", "Shift volume toward Wholesaler and plan working capital around the August to October dip."],
    results: "", challenges: [], lessons: [], futureImprovements: [] },
  { slug: "sales-inventory-tracker-toolkit", title: "Sales and Inventory Tracker Toolkit for Small Businesses", category: "Automation", year: 2026, status: "Completed", featured: true,
    summary: "A reusable Excel template that turns daily sales and stock entries into an auto-updating performance dashboard, shown as two client demos.",
    problem: "Small shop owners often cannot see where their money is (cash, MoMo or bank transfer) or which items are about to run out.",
    objective: "Give a business owner one place to record sales and stock, with everything else calculating automatically.",
    process: ["Sales Tracker: one row per sale; total revenue and profit calculate automatically, with cash, MoMo and bank transfer separated", "Inventory: stock in and out per item; rows turn red when stock drops below the reorder level", "Dashboard: updates itself from the two tabs, with nothing to edit", "Duplicate the workbook per client and replace the sample rows"],
    tools: ["Excel"], tags: ["dashboard", "template", "MoMo", "inventory"],
    parts: [{ name: "Adepa Fashion House demo", detail: "Fashion retail version of the template." }, { name: "Boateng Provisions & Wholesale demo", detail: "Wholesale version of the same template." }],
    files: [{ label: "Adepa Fashion House demo (.xlsx)", href: "/files/adepa-fashion-house-demo.xlsx" }, { label: "Boateng Wholesale demo (.xlsx)", href: "/files/boateng-wholesale-demo.xlsx" }],
    note: "Both workbooks are demo templates filled with sample data, not real client results.",
    insights: [], results: "", challenges: [], lessons: [], futureImprovements: [] },
  { slug: "customer-support-ticket-analysis", title: "Customer Support Ticket Analysis", category: "Data Analytics", year: 2026, status: "In progress",
    summary: "Analysis of 225 support tickets across agents, departments, channels, issue types, priorities, resolution times and satisfaction.",
    problem: "Add the question you are answering about support performance.", objective: "Add the goal of the analysis.",
    process: ["Raw dataset prepared: 225 tickets, 13 fields including resolution time, satisfaction, status, service level and customer feedback"],
    tools: ["Excel"], tags: ["customer support", "service level"], insights: [], results: "", challenges: [], lessons: [], futureImprovements: [] },
  { slug: "retail-sales-excel-analysis", title: "Retail Sales Excel Analysis (Week 2)", category: "Data Analytics", year: 2026, status: "In progress",
    summary: "Class exercise exploring 50 retail orders by region, salesperson, product category, discount and payment method.",
    problem: "", objective: "Practise exploring and summarising a sales dataset in Excel.", process: [], tools: ["Excel"], tags: ["coursework", "retail"],
    insights: [], results: "", challenges: [], lessons: [], futureImprovements: [] },
];
export const published = () => projects.filter((p) => p.published !== false);
export const bySlug = (s: string) => published().find((p) => p.slug === s);
