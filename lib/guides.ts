// Long-form guides that answer what buyers search before they hire anyone.
// Prices quoted are Nexxra's own published starting point, nothing invented.

export type Block = { h2: string; p?: string[]; list?: string[]; after?: string[] }; // p → list → after
export type Guide = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  published: string; // ISO date
  updated: string;
  readMins: number;
  intro: string[];
  blocks: Block[];
  faqs: { q: string; a: string }[];
  related: string[]; // service slugs
};

export const GUIDES: Guide[] = [
  {
    slug: 'how-much-does-a-website-cost-in-nigeria',
    title: 'How Much Does a Website Cost in Nigeria? (2026 Guide)',
    metaTitle: 'How Much Does a Website Cost in Nigeria in 2026?',
    description: 'What actually drives the price of a website in Nigeria — pages, features, design, content, hosting and maintenance — and how to get a fair, fixed quote from a developer.',
    keywords: ['how much does a website cost in Nigeria', 'website cost in Nigeria', 'website design price in Nigeria', 'cost of website in Abuja', 'website development cost Nigeria 2026'],
    published: '2026-10-12',
    updated: '2026-10-12',
    readMins: 7,
    intro: [
      'Ask five developers in Nigeria for a website price and you will get five very different numbers. That is not because someone is lying — it is because “a website” can mean anything from a one-page profile to a full online store with payments and a customer dashboard.',
      'This guide explains what you are actually paying for, so you can compare quotes properly and avoid the two classic mistakes: paying too little for a site that hurts your business, or paying for features you don’t need.',
    ],
    blocks: [
      {
        h2: 'The short answer',
        p: [
          'At Nexxra Digital, a professional business website starts around ₦500,000. Sites with more pages, custom features, e-commerce or integrations cost more, and we always give a fixed quote before work starts.',
          'Very cheap offers usually mean a reused template, no real design work, slow hosting and no support after launch. Very expensive quotes should come with a clear breakdown of what is included. Either way, the factors below are what move the price.',
        ],
      },
      {
        h2: '1. The type of website',
        list: [
          'Landing page or one-page profile — one focused page for a product, event or campaign.',
          'Business / corporate website — typically 5–10 pages: home, about, services, projects, contact, maybe a blog.',
          'E-commerce store — product catalogue, cart, Paystack or Flutterwave payments, delivery fees and an order dashboard.',
          'Portal or web application — user accounts, dashboards, bookings, listings or anything with logins and data.',
        ],
        after: ['Each step up adds design, development and testing time, which is the main thing you are paying for.'],
      },
      {
        h2: '2. Custom design vs. template',
        p: [
          'A template can be cheaper and faster, but your site will look like many others and is often harder to change later. Custom design means your pages are planned around your brand and customers, and you approve mockups before development. For most established businesses, custom design is worth it because it directly affects whether visitors trust you enough to call.',
        ],
      },
      {
        h2: '3. Features and integrations',
        p: ['Every feature beyond static pages adds cost. Common ones in Nigeria include:'],
        list: [
          'Online payments (Paystack, Flutterwave, bank transfer)',
          'WhatsApp chat buttons and enquiry routing',
          'Booking and appointment forms',
          'Property, product or job listings with search and filters',
          'Customer or staff logins',
          'Multi-language content',
          'Connections to a CRM, accounting or email marketing tool',
        ],
      },
      {
        h2: '4. Content: text, photos and video',
        p: [
          'Someone has to write the words and provide the images. If you supply ready content, the project is faster. If you need copywriting, product photography or video, budget for it — good content is one of the biggest factors in both conversions and Google rankings.',
        ],
      },
      {
        h2: '5. SEO and speed',
        p: [
          'A site that is not set up for search will struggle to be found. A proper build includes page titles and descriptions, a sitemap, schema markup, Google Search Console and fast loading on mobile data. Ongoing SEO — content, local listings and link building — is a separate monthly service.',
        ],
      },
      {
        h2: '6. Running costs after launch',
        list: [
          'Domain name (.com or .com.ng) — renewed yearly',
          'Hosting — monthly or yearly depending on traffic and features',
          'Business email — per mailbox',
          'Maintenance — updates, backups, fixes and small changes',
        ],
        after: ['Ask any developer to list these clearly so there are no surprises in year two.'],
      },
      {
        h2: 'How to get an accurate quote',
        list: [
          'List the pages you think you need and two or three websites you like.',
          'Write down must-have features (payments, booking, WhatsApp, listings).',
          'Say whether you have content ready or need help with it.',
          'Share your deadline and budget range — a good developer will tell you what fits.',
          'Ask for a fixed quote with milestones, and what support is included after launch.',
        ],
      },
    ],
    faqs: [
      { q: 'How much does a simple website cost in Nigeria?', a: 'At Nexxra Digital a professional business website starts around ₦500,000. The final price depends on pages, features and content, and you get a fixed quote before work begins.' },
      { q: 'Are there yearly costs after the website is built?', a: 'Yes — domain renewal, hosting and business email are recurring, plus optional maintenance. A good developer lists these clearly upfront.' },
      { q: 'Why do website quotes vary so much in Nigeria?', a: 'Because quotes cover very different things: template vs custom design, number of pages, features like payments and bookings, content creation, SEO setup and support after launch.' },
      { q: 'How long does it take to build a website?', a: 'A typical business website takes 2–4 weeks after the design is approved; e-commerce and custom portals take longer.' },
    ],
    related: ['website-development-abuja', 'ecommerce-website-development-nigeria', 'digital-marketing-seo-abuja'],
  },
  {
    slug: 'how-to-choose-a-web-development-company-in-abuja',
    title: 'How to Choose a Web Development Company in Abuja',
    metaTitle: 'How to Choose a Web Development Company in Abuja (Checklist)',
    description: 'A practical checklist for hiring a web or app developer in Abuja: what to check, what to ask, red flags to avoid, and how to protect your project and your money.',
    keywords: ['web development company in Abuja', 'best web developers in Abuja', 'how to choose a web developer Nigeria', 'hire app developer Abuja', 'software company Abuja'],
    published: '2026-10-12',
    updated: '2026-10-12',
    readMins: 6,
    intro: [
      'Hiring the wrong developer is expensive twice: once for the project that fails, and again to rebuild it properly. Most horror stories — missed deadlines, half-finished sites, developers who disappear with the login details — are avoidable if you ask the right questions upfront.',
      'Here is the checklist we would use if we were hiring a web development company in Abuja ourselves.',
    ],
    blocks: [
      {
        h2: '1. Check they are a real, registered business',
        p: ['Ask for the company’s CAC registration number and verify it on the CAC public search. A registered company has an identity, an address and a reputation to protect — which matters if something goes wrong.'],
      },
      {
        h2: '2. Look at live work, not just screenshots',
        p: ['Ask for links to live websites and apps they built, open them on your phone, and check how fast they load. If possible, speak to one or two past clients.'],
      },
      {
        h2: '3. Ask how they work',
        list: [
          'Do they design first and get your approval before coding?',
          'How often will you see progress — is there a staging link?',
          'Who is your point of contact, and how quickly do they respond?',
          'What happens if you want changes halfway through?',
        ],
      },
      {
        h2: '4. Get a fixed, written scope',
        p: ['A professional quote lists the pages and features included, the timeline, the payment milestones and what is not included. Vague quotes lead to arguments later.'],
      },
      {
        h2: '5. Make sure you own everything',
        list: [
          'The domain should be registered in your name or company name.',
          'You should get admin access to hosting, the website and any app store accounts.',
          'The source code and design files should be handed over on final payment.',
        ],
      },
      {
        h2: '6. Ask about SEO, speed and mobile',
        p: ['Your site should load quickly on mobile data and be set up for Google from day one: page titles, descriptions, a sitemap and Search Console. If a developer cannot explain how they handle this, your site may be invisible.'],
      },
      {
        h2: '7. Clarify support after launch',
        p: ['Bugs appear after launch, and you will want small changes. Ask how long free support lasts and what ongoing maintenance costs.'],
      },
      {
        h2: 'Red flags',
        list: [
          'Full payment upfront before any design work',
          'No written scope or contract',
          'Refusing to register the domain in your name',
          'No live examples of previous work',
          'A price that seems far too good to be true',
        ],
      },
    ],
    faqs: [
      { q: 'How do I verify a tech company in Nigeria?', a: 'Ask for their CAC registration (RC) number and check it on the Corporate Affairs Commission public search portal, then look at their live portfolio and speak to past clients.' },
      { q: 'Should I pay a developer everything upfront?', a: 'No. A normal structure is a deposit to start, then payments tied to milestones such as approved design and launch.' },
      { q: 'Who should own my domain and code?', a: 'You should. Make sure the domain is registered to you and that code, design files and account access are handed over on final payment.' },
    ],
    related: ['website-development-abuja', 'mobile-app-development-nigeria', 'saas-development-nigeria'],
  },
];

export const guideBySlug = (slug: string) => GUIDES.find((g) => g.slug === slug);
