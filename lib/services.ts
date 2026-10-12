// Service landing pages. Each targets the searches a Nigerian buyer actually
// types ("website design Abuja", "mobile app developers Nigeria"), so the copy
// leads with the place and the outcome, not just the craft.

export type Faq = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;          // short name, used in nav/cards
  h1: string;
  metaTitle: string;     // rendered through the "%s | Nexxra Digital" template
  metaDescription: string;
  keywords: string[];
  video: string;
  intro: string[];
  includes: { title: string; text: string }[];
  forWho: string[];
  stack: string[];
  timeline: string;
  faqs: Faq[];
  related: string[];     // slugs
};

export const SERVICES: Service[] = [
  {
    slug: 'website-development-abuja',
    name: 'Website Development',
    h1: 'Website Development Company in Abuja',
    metaTitle: 'Website Development & Web Design Company in Abuja, Nigeria',
    metaDescription:
      'Nexxra Digital builds fast, modern, mobile-first websites for businesses in Abuja and across Nigeria — corporate sites, landing pages and web portals. Free consultation, fixed quotes.',
    keywords: ['website development Abuja', 'web design Abuja', 'website design company in Abuja', 'web developer Abuja', 'website design Nigeria', 'business website Nigeria'],
    video: '/services/website.mp4',
    intro: [
      'Your website is usually the first thing a customer checks before they call you. If it loads slowly on a phone, looks dated, or doesn’t say clearly what you do, they move on to the next result on Google.',
      'Nexxra Digital is a CAC-registered web development company in Abuja. We design and build websites that load fast on Nigerian mobile networks, rank on Google, and turn visitors into enquiries — then we hand you a site you can actually update yourself.',
    ],
    includes: [
      { title: 'Custom design, not a template', text: 'We design your pages around your brand and your customers. You approve the mockups before any code is written.' },
      { title: 'Mobile-first and fast', text: 'Most Nigerian visitors are on phones and mobile data. We build with Next.js, optimise every image, and test on real mid-range Android devices.' },
      { title: 'SEO built in from day one', text: 'Clean page structure, proper titles and descriptions, a sitemap, Google Business-ready contact details and schema markup — so Google understands what you do and where.' },
      { title: 'Enquiry and WhatsApp integration', text: 'Contact forms that actually reach your inbox, click-to-call, WhatsApp buttons and booking forms, so every visitor has an easy next step.' },
      { title: 'Easy updates', text: 'Change your text, prices, team and blog posts yourself through a simple content editor — no developer needed for day-to-day edits.' },
      { title: 'Hosting, domain and SSL set up', text: 'We register or connect your domain, set up business email, secure hosting and HTTPS, and keep backups.' },
    ],
    forWho: ['Companies that need a credible corporate website', 'SMEs replacing an old, slow or broken site', 'Startups launching a product and landing page', 'Schools, clinics, NGOs, churches and professional firms'],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Headless CMS', 'Vercel', 'Google Analytics'],
    timeline: 'Most business websites go live in 2–4 weeks from approved design.',
    faqs: [
      { q: 'How much does a website cost in Abuja?', a: 'It depends on the number of pages and features. A professional business website with us starts around ₦500k; larger portals, e-commerce or custom features cost more. You get a fixed quote after a free consultation, before any work starts.' },
      { q: 'How long does it take to build a website?', a: 'A typical business website takes 2–4 weeks once the design is approved. Bigger sites with custom functionality take longer — we agree the timeline with you upfront.' },
      { q: 'Will my website show up on Google?', a: 'Every site we build is set up for search: fast loading, proper page titles and descriptions, a sitemap, schema markup and Google Search Console. Ranking for competitive terms also takes good content and time, which we can help with.' },
      { q: 'Can I update the website myself?', a: 'Yes. We set up a simple editor so you can change text, images, prices and blog posts without touching code, and we show you how.' },
      { q: 'Do you only work with businesses in Abuja?', a: 'No — we are based in Abuja but build websites for clients in Lagos, Port Harcourt and across Nigeria, as well as internationally.' },
    ],
    related: ['ui-ux-design-nigeria', 'ecommerce-website-development-nigeria', 'digital-marketing-seo-abuja'],
  },
  {
    slug: 'mobile-app-development-nigeria',
    name: 'Mobile App Development',
    h1: 'Mobile App Development Company in Nigeria',
    metaTitle: 'Mobile App Development Company in Abuja & Nigeria — iOS & Android',
    metaDescription:
      'We design and build iOS and Android apps for Nigerian startups and businesses — fintech, delivery, booking and marketplace apps with a backend that scales. Based in Abuja.',
    keywords: ['mobile app development Nigeria', 'app developers in Nigeria', 'mobile app development Abuja', 'iOS app developer Nigeria', 'Android app development Nigeria', 'React Native developer Nigeria'],
    video: '/services/mobile.mp4',
    intro: [
      'A good app is more than screens — it needs a reliable backend, payments that work with Nigerian banks and cards, push notifications, and an experience that feels effortless on a mid-range Android phone.',
      'Nexxra Digital builds iOS and Android apps end to end: product design, the app itself, the backend and admin dashboard, and App Store and Google Play launch. We have shipped consumer fintech, events and ticketing products, so we know what it takes to go from idea to real users.',
    ],
    includes: [
      { title: 'One codebase, both platforms', text: 'We build with React Native (or Flutter where it fits), so you launch on iOS and Android together without paying for two separate apps.' },
      { title: 'Product and UX design', text: 'We map user flows and design every screen first, then test the prototype with you before development starts.' },
      { title: 'Backend, API and admin dashboard', text: 'Secure user accounts, databases, APIs and a web dashboard for your team to manage users, orders and content.' },
      { title: 'Payments and integrations', text: 'Paystack, Flutterwave and bank transfers, maps, SMS and WhatsApp notifications, identity verification and third-party APIs.' },
      { title: 'App Store and Play Store launch', text: 'We prepare store listings, handle review submissions and set up crash reporting and analytics.' },
      { title: 'Support after launch', text: 'Bug fixes, OS updates and new features through ongoing maintenance, so your app keeps working as phones and stores change.' },
    ],
    forWho: ['Startups building an MVP to raise or launch', 'Fintech, wallet and payments products', 'Delivery, logistics, booking and marketplace apps', 'Businesses adding an app for existing customers'],
    stack: ['React Native', 'Expo', 'Flutter', 'Node.js', 'Supabase / PostgreSQL', 'Firebase'],
    timeline: 'An MVP typically takes 6–12 weeks depending on features.',
    faqs: [
      { q: 'How much does it cost to build an app in Nigeria?', a: 'App costs depend mostly on features — user accounts, payments, real-time tracking and admin dashboards each add work. We scope your idea in a free call and give you a fixed quote, often starting with a focused MVP to keep the first version affordable.' },
      { q: 'How long does it take to build a mobile app?', a: 'A focused MVP usually takes 6–12 weeks. We release in milestones, so you see working builds on your own phone every week or two.' },
      { q: 'Do you build for both iOS and Android?', a: 'Yes. We build cross-platform with React Native or Flutter, so one project ships to both the App Store and Google Play.' },
      { q: 'Can you integrate Paystack or Flutterwave?', a: 'Yes — card payments, bank transfers, subscriptions and payouts through Paystack, Flutterwave and other providers are standard for us.' },
      { q: 'Who owns the app and the code?', a: 'You do. On final payment you get full ownership of the code, the store accounts and all assets.' },
    ],
    related: ['saas-development-nigeria', 'ui-ux-design-nigeria', 'business-automation-nigeria'],
  },
  {
    slug: 'ui-ux-design-nigeria',
    name: 'UI/UX Design',
    h1: 'UI/UX Design Agency in Nigeria',
    metaTitle: 'UI/UX Design Agency in Abuja, Nigeria — Product & App Design',
    metaDescription:
      'Product, app and website design from Abuja: user research, wireframes, Figma prototypes and design systems that make your product easy to use and easy to build.',
    keywords: ['UI UX design Nigeria', 'UI/UX designer Abuja', 'product design agency Nigeria', 'app design Nigeria', 'Figma designer Nigeria'],
    video: '/services/design.mp4',
    intro: [
      'Users judge a product in seconds. Confusing sign-up, cluttered screens or a checkout that fails quietly costs you customers, no matter how good the idea is.',
      'Our design team turns your idea into clear, tested screens — from early wireframes to a polished, clickable Figma prototype and a design system your developers can build from without guesswork.',
    ],
    includes: [
      { title: 'Research and user flows', text: 'We learn who your users are and map the journeys that matter: sign-up, purchase, booking, payment.' },
      { title: 'Wireframes', text: 'Low-fidelity layouts to agree structure and content before visual design.' },
      { title: 'High-fidelity UI design', text: 'Polished screens for mobile and web that match your brand and feel modern.' },
      { title: 'Clickable prototypes', text: 'Test the experience on your phone and with real users before a line of code is written.' },
      { title: 'Design systems', text: 'Reusable components, colours and type in Figma so your product stays consistent as it grows.' },
      { title: 'Redesigns and UX audits', text: 'We review your existing product, find where users drop off, and fix it.' },
    ],
    forWho: ['Founders preparing an MVP or investor demo', 'Teams with an app that users find confusing', 'Businesses rebranding or modernising a product', 'Developers who need production-ready designs'],
    stack: ['Figma', 'FigJam', 'Prototyping', 'Design systems', 'Usability testing'],
    timeline: 'Most design projects take 2–6 weeks depending on the number of screens.',
    faqs: [
      { q: 'Can you design without building?', a: 'Yes. Many clients hire us for design only and hand the Figma files to their own developers. We can also build it for you.' },
      { q: 'What do I receive at the end?', a: 'Organised Figma files with every screen, a clickable prototype, a component library and developer hand-off specs.' },
      { q: 'How many revisions are included?', a: 'We work in review rounds at each stage — wireframes, visual design and prototype — so changes happen early, when they are cheap.' },
      { q: 'Do you redesign existing apps and websites?', a: 'Yes. We start with a UX audit of your current product, then redesign the parts that are costing you users.' },
    ],
    related: ['mobile-app-development-nigeria', 'website-development-abuja', 'saas-development-nigeria'],
  },
  {
    slug: 'real-estate-website-development-nigeria',
    name: 'Real Estate Solutions',
    h1: 'Real Estate Websites & Software in Nigeria',
    metaTitle: 'Real Estate Website & Property Portal Development in Abuja, Nigeria',
    metaDescription:
      'Property listing websites, real estate portals, agent CRMs and lead generation for Nigerian developers, agencies and property managers. Built in Abuja.',
    keywords: ['real estate website Nigeria', 'real estate website design Abuja', 'property portal development Nigeria', 'real estate software Abuja', 'property management software Nigeria'],
    video: '/services/realestate.mp4',
    intro: [
      'Buyers and tenants in Abuja, Lagos and beyond start their search online. A property website that is slow, out of date or hard to search sends those leads straight to your competitors.',
      'We build real estate websites and software for Nigerian developers, agencies and property managers — listings that are easy to search and update, enquiries that go straight to your agents, and tools that keep deals moving.',
    ],
    includes: [
      { title: 'Property listing websites', text: 'Searchable listings with filters for location, price, bedrooms and property type, plus photo galleries, video tours and maps.' },
      { title: 'Estate and project microsites', text: 'Dedicated pages for new developments with floor plans, payment plans, progress updates and brochure downloads.' },
      { title: 'Lead capture and WhatsApp', text: 'Every enquiry is routed to the right agent by email and WhatsApp, with the property and the buyer’s details attached.' },
      { title: 'Agent CRM', text: 'Track leads, inspections, offers and follow-ups in one place instead of scattered spreadsheets and chats.' },
      { title: 'Property management tools', text: 'Tenant records, rent reminders, payment tracking and maintenance requests for landlords and facility managers.' },
      { title: 'Local SEO', text: 'Area and property pages structured to rank for searches like “3 bedroom flat for rent in Gwarinpa”.' },
    ],
    forWho: ['Real estate developers selling off-plan', 'Estate agencies and realtors', 'Property and facility managers', 'Landlords with multiple properties'],
    stack: ['Next.js', 'Headless CMS', 'Maps', 'PostgreSQL', 'WhatsApp & email automation'],
    timeline: 'Listing websites typically launch in 3–5 weeks; custom CRMs and portals take longer.',
    faqs: [
      { q: 'Can I add and edit property listings myself?', a: 'Yes. You and your agents get a simple dashboard to add, edit, feature and mark listings as sold or let — no developer needed.' },
      { q: 'Can buyers pay or book inspections online?', a: 'Yes. We can add inspection booking, and deposits or instalment payments through Paystack or Flutterwave.' },
      { q: 'Will my listings show on Google?', a: 'We structure each listing and area page for search, with property schema and fast loading, so they can be found for local searches.' },
      { q: 'Do you build property management software?', a: 'Yes — tenant management, rent tracking and maintenance workflows for landlords and facility managers.' },
    ],
    related: ['website-development-abuja', 'business-automation-nigeria', 'digital-marketing-seo-abuja'],
  },
  {
    slug: 'saas-development-nigeria',
    name: 'SaaS Development',
    h1: 'SaaS Development Company in Nigeria',
    metaTitle: 'SaaS & Web Application Development in Nigeria — Custom Software, Abuja',
    metaDescription:
      'Custom SaaS platforms and web applications for Nigerian startups and enterprises: subscriptions and billing, dashboards, multi-tenant architecture and cloud infrastructure.',
    keywords: ['SaaS development Nigeria', 'custom software development Abuja', 'web application development Nigeria', 'software company Abuja', 'software development company Nigeria'],
    video: '/services/saas.mp4',
    intro: [
      'Turning a workflow or an idea into a subscription product takes more than a website: user accounts and roles, billing, dashboards, reporting, and infrastructure that stays fast as customers grow.',
      'Nexxra Digital designs and builds SaaS platforms and custom web applications for startups and established businesses — from the first MVP to a production system your team can run with confidence.',
    ],
    includes: [
      { title: 'MVP scoping', text: 'We help you decide what to build first so you can launch, learn from real customers and avoid paying for features nobody uses.' },
      { title: 'Multi-tenant architecture', text: 'Organisations, teams, roles and permissions designed in from the start, with each customer’s data kept separate and secure.' },
      { title: 'Subscriptions and billing', text: 'Plans, trials, invoices and recurring payments in naira and dollars via Paystack, Flutterwave or Stripe.' },
      { title: 'Dashboards and reporting', text: 'Clear analytics, exports and admin tools for you and your customers.' },
      { title: 'APIs and integrations', text: 'Public APIs, webhooks and integrations with accounting, CRM, messaging and banking services.' },
      { title: 'Cloud, security and scale', text: 'Automated deployments, backups, monitoring and security best practice from day one.' },
    ],
    forWho: ['Founders building a B2B or B2C SaaS product', 'Businesses replacing spreadsheets with custom software', 'Companies digitising an internal process to sell as a service', 'Teams that need an MVP for investors'],
    stack: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'Supabase', 'Vercel / AWS'],
    timeline: 'An MVP typically takes 6–12 weeks; we then ship in regular releases.',
    faqs: [
      { q: 'What does it cost to build a SaaS product?', a: 'It depends on scope. We usually start with a focused MVP covering the core workflow, accounts and billing, then grow it based on customer feedback. You get a fixed quote for each phase.' },
      { q: 'Can you work with our existing developers?', a: 'Yes. We can lead the build, add capacity to your team, or review and improve an existing codebase.' },
      { q: 'Which payment providers do you support?', a: 'Paystack, Flutterwave and Stripe are the most common; we can integrate others your customers need.' },
      { q: 'Will the platform scale as we grow?', a: 'We design for growth from the start — sensible data models, caching, background jobs and cloud hosting that scales — without over-engineering version one.' },
    ],
    related: ['mobile-app-development-nigeria', 'business-automation-nigeria', 'ui-ux-design-nigeria'],
  },
  {
    slug: 'ecommerce-website-development-nigeria',
    name: 'E-Commerce',
    h1: 'E-Commerce Website Development in Nigeria',
    metaTitle: 'E-Commerce Website Development in Nigeria — Online Stores, Abuja',
    metaDescription:
      'Online stores and marketplaces for Nigerian businesses with Paystack and Flutterwave payments, delivery options, inventory and WhatsApp order alerts. Built in Abuja.',
    keywords: ['ecommerce website development Nigeria', 'online store Nigeria', 'ecommerce website design Abuja', 'Paystack website integration', 'marketplace development Nigeria'],
    video: '/services/ecommerce.mp4',
    intro: [
      'Selling on Instagram and WhatsApp works — until you’re answering the same price questions all day and losing orders in the chat. An online store takes orders and payments for you, around the clock.',
      'We build e-commerce websites and marketplaces for Nigerian brands, with local payments, delivery options and stock management that fit how you actually sell.',
    ],
    includes: [
      { title: 'Beautiful product catalogue', text: 'Fast, searchable product pages with variants, sizes and colours, built to look great on phones.' },
      { title: 'Local payments', text: 'Card, bank transfer and USSD through Paystack or Flutterwave, plus pay-on-delivery if you offer it.' },
      { title: 'Delivery and shipping', text: 'Delivery zones and fees by state or area, pickup options and integration with logistics partners.' },
      { title: 'Orders and inventory', text: 'An admin dashboard to manage stock, orders, refunds and customers, with WhatsApp and email order alerts.' },
      { title: 'Discounts and loyalty', text: 'Coupon codes, flash sales, bundles and abandoned-cart reminders to recover lost sales.' },
      { title: 'Marketplaces', text: 'Multi-vendor stores with seller accounts, commissions and payouts.' },
    ],
    forWho: ['Fashion, beauty and lifestyle brands', 'Retailers and distributors', 'Food and grocery businesses', 'Founders building a multi-vendor marketplace'],
    stack: ['Next.js', 'Shopify (where it fits)', 'Paystack', 'Flutterwave', 'Headless CMS'],
    timeline: 'Most online stores launch in 3–6 weeks.',
    faqs: [
      { q: 'Which payment methods can my store accept?', a: 'Cards, bank transfers and USSD through Paystack or Flutterwave, and pay-on-delivery if you want it.' },
      { q: 'Can I manage products and orders myself?', a: 'Yes — you get an admin dashboard to add products, update stock and process orders, and we train your team.' },
      { q: 'Do you use Shopify or build custom?', a: 'Both. Shopify is great for straightforward stores; we build custom when you need marketplaces, special pricing or deeper integrations. We recommend whichever fits your business and budget.' },
      { q: 'Can you connect delivery companies?', a: 'Yes. We can calculate delivery fees by location and integrate with logistics providers for tracking.' },
    ],
    related: ['website-development-abuja', 'digital-marketing-seo-abuja', 'business-automation-nigeria'],
  },
  {
    slug: 'business-automation-nigeria',
    name: 'Business Automation',
    h1: 'Business Automation & Integrations in Nigeria',
    metaTitle: 'Business Process Automation in Nigeria — CRM, Workflow & API Integration',
    metaDescription:
      'Automate repetitive work for your Nigerian business: CRM and workflow automation, WhatsApp and email automation, reporting, and integrations between the tools you already use.',
    keywords: ['business automation Nigeria', 'workflow automation Nigeria', 'CRM development Nigeria', 'API integration Nigeria', 'WhatsApp automation Nigeria'],
    video: '/services/automation.mp4',
    intro: [
      'Copying data between spreadsheets, chasing payments by hand and answering the same messages all day quietly eat your team’s week.',
      'We find the repetitive work in your business and automate it — connecting your tools, building simple internal systems and setting up messages and reports that run on their own.',
    ],
    includes: [
      { title: 'Process review', text: 'We map how work actually flows through your business and show you where automation saves the most time.' },
      { title: 'Custom CRM and internal tools', text: 'Simple systems for leads, customers, inventory, staff and approvals that replace scattered spreadsheets.' },
      { title: 'WhatsApp, SMS and email automation', text: 'Automatic confirmations, reminders, follow-ups and receipts sent at the right time.' },
      { title: 'Integrations', text: 'Connect your website, payments, accounting, forms and spreadsheets so data moves between them automatically.' },
      { title: 'Automated reporting', text: 'Daily or weekly dashboards and reports delivered to your inbox without anyone compiling them.' },
      { title: 'AI where it helps', text: 'AI assistants for support, document processing and data entry — used where it is reliable, not for its own sake.' },
    ],
    forWho: ['Growing SMEs drowning in manual admin', 'Sales teams that lose track of leads', 'Operations, logistics and service businesses', 'Companies with many disconnected tools'],
    stack: ['Node.js', 'APIs & webhooks', 'WhatsApp Business API', 'Google Workspace', 'PostgreSQL', 'AI models'],
    timeline: 'Focused automations go live in 1–3 weeks; larger systems are delivered in phases.',
    faqs: [
      { q: 'What can be automated in my business?', a: 'Commonly: lead follow-ups, invoicing and payment reminders, order processing, appointment reminders, reporting and moving data between tools. We review your processes and recommend what will save the most time.' },
      { q: 'Do I have to replace my current software?', a: 'Usually not. We connect the tools you already use wherever possible, and only build new systems where they clearly save time or money.' },
      { q: 'Can you automate WhatsApp messages?', a: 'Yes, through the official WhatsApp Business API — order confirmations, reminders and notifications, with opt-in from your customers.' },
      { q: 'How quickly will we see results?', a: 'Small automations often pay back within weeks. We start with the change that saves the most time, then build from there.' },
    ],
    related: ['saas-development-nigeria', 'real-estate-website-development-nigeria', 'mobile-app-development-nigeria'],
  },
  {
    slug: 'digital-marketing-seo-abuja',
    name: 'Digital Marketing & SEO',
    h1: 'Digital Marketing & SEO Agency in Abuja',
    metaTitle: 'SEO & Digital Marketing Agency in Abuja, Nigeria',
    metaDescription:
      'Get found on Google and turn traffic into customers: SEO, Google Business Profile, Google and Meta ads, and content marketing for Nigerian businesses. Based in Abuja.',
    keywords: ['SEO agency Abuja', 'digital marketing agency Abuja', 'SEO services Nigeria', 'Google ads Nigeria', 'social media marketing Abuja', 'local SEO Nigeria'],
    video: '/services/marketing.mp4',
    intro: [
      'When someone in your city searches for what you sell, you want to be the business they find. Most customers never scroll past the first few results — or the map pack.',
      'We help Nigerian businesses get found and grow: technical SEO, Google Business Profile, content, and paid campaigns on Google, Instagram and Facebook, all measured against real enquiries and sales.',
    ],
    includes: [
      { title: 'SEO audit and fixes', text: 'We find what is holding your site back on Google — speed, structure, indexing, content gaps — and fix it.' },
      { title: 'Local SEO and Google Business Profile', text: 'Set up and optimise your Google Business Profile, reviews and local listings so you show up in maps and “near me” searches.' },
      { title: 'Content that ranks', text: 'Service pages, guides and blog posts targeting what your customers actually search for.' },
      { title: 'Google and Meta ads', text: 'Search, Instagram and Facebook campaigns with clear budgets, tracking and weekly optimisation.' },
      { title: 'Analytics and tracking', text: 'Google Analytics, Search Console and conversion tracking so you know which channels bring customers.' },
      { title: 'Monthly reporting', text: 'Plain-language reports on rankings, traffic, leads and spend — no vanity metrics.' },
    ],
    forWho: ['Local businesses that want more calls and walk-ins', 'Companies with a website that gets no traffic', 'Brands launching a product or service', 'Businesses spending on ads without clear results'],
    stack: ['Google Search Console', 'Google Analytics 4', 'Google Business Profile', 'Google Ads', 'Meta Ads'],
    timeline: 'Ads can bring traffic in days; SEO typically shows meaningful results in 3–6 months.',
    faqs: [
      { q: 'How long does SEO take to work?', a: 'Quick technical fixes can help within weeks, but ranking for competitive searches usually takes 3–6 months of consistent work. Paid ads can bring traffic immediately while SEO builds.' },
      { q: 'Can you get my business on Google Maps?', a: 'Yes. We set up and optimise your Google Business Profile, which is what makes you appear in the map results for local searches.' },
      { q: 'Do you run Instagram and Facebook ads?', a: 'Yes — we plan, run and optimise Meta and Google ad campaigns, with tracking so you see the enquiries and sales they bring.' },
      { q: 'Do I need a new website for SEO?', a: 'Not always. We audit your current site first; if it is fundamentally slow or broken we will tell you honestly, otherwise we improve what you have.' },
    ],
    related: ['website-development-abuja', 'ecommerce-website-development-nigeria', 'real-estate-website-development-nigeria'],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

/** Home-page card title → service slug, for linking the cards. */
export const SLUG_BY_NAME: Record<string, string> = {
  'Website Development': 'website-development-abuja',
  'UI/UX Design': 'ui-ux-design-nigeria',
  'Mobile App Development': 'mobile-app-development-nigeria',
  'Mobile Apps': 'mobile-app-development-nigeria',
  'Real Estate Solutions': 'real-estate-website-development-nigeria',
  'Real Estate Tech': 'real-estate-website-development-nigeria',
  'SaaS Development': 'saas-development-nigeria',
  'E-Commerce': 'ecommerce-website-development-nigeria',
  'Business Automation': 'business-automation-nigeria',
  'Digital Marketing': 'digital-marketing-seo-abuja',
};
