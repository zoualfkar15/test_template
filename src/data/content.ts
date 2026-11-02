// All page copy outside the slider lives here, so text can be changed
// without touching any component.

export const site = {
  name: "Into the Weather",
  tags: ["Hero", "Parallax", "Slider"],
  cta: { label: "Get the files", href: "#get-started" },
};

export type Feature = {
  icon: "eye" | "edit" | "devices";
  title: string;
  body: string;
};

export const features = {
  heading: "Why this hero works",
  intro: "Big type, slow motion and a little depth. Enough to make people stop scrolling, not so much that it gets in the way.",
  items: [
    {
      icon: "eye",
      title: "Stops the scroll",
      body: "Layers drift against the photograph as the pointer moves, so the first screen feels alive before anyone reads a word.",
    },
    {
      icon: "edit",
      title: "Edit in one place",
      body: "Every headline, line of copy, photo and illustration is listed in a single data file. Change it there and the slider follows.",
    },
    {
      icon: "devices",
      title: "Works everywhere",
      body: "Scroll, swipe, arrow keys or the on-screen controls. Layouts adapt to phones, and motion turns off for people who ask for less of it.",
    },
  ] satisfies Feature[],
};

export const spotlight = {
  label: "How it's built",
  heading: "Change a scene by changing data",
  body: [
    "Each scene is a small object: a kicker, a headline, a sentence, a photo, a tint and an illustration. Add one and a new scene appears, with its own dot on the rail.",
    "Layout, timing and motion stay in the component, so content edits can't break the design.",
  ],
  tip: "Hand src/data/slides.ts to whoever writes the copy. It's the only file they need.",
  code: `{
  id: "clouds",
  kicker: "Drift",
  title: "into the weather",
  lede: "A pale road, a pink sky…",
  image: "/images/sky-clouds.jpg",
  art: "clouds",
  depth: 1.8,
}`,
};

export const overview = {
  label: "Overview",
  heading: "A full-screen story in four scenes",
  body: "Clouds, a horizon, an orbit and a night field. Each scene pairs a photograph with a hand-drawn SVG layer and moves on its own depth, so the frame feels deeper than it is.",
  benefits: [
    {
      title: "Customization",
      body: "Swap photos in /public/images, redraw an illustration as a React component, or retune the parallax depth per scene.",
    },
    {
      title: "Accessibility",
      body: "Real buttons, labelled controls, a live slide counter and full support for reduced-motion preferences.",
    },
    {
      title: "Speed",
      body: "Photos are served through next/image and fonts through next/font, so the hero loads sharp without blocking the page.",
    },
  ],
  closing: {
    heading: "Made for scroll-driven storytelling",
    body: "Use it as a landing page hero, a portfolio opener or the first chapter of a longer story.",
    cta: { label: "Back to the slider", href: "#scenes" },
  },
};

export const resources = {
  heading: "Make it your own",
  intro: "Everything you need to run, change and ship the project.",
  items: [
    {
      title: "Run it locally",
      body: "Install dependencies with npm install, then start the dev server with npm run dev.",
      link: { label: "Next.js docs", href: "https://nextjs.org/docs" },
    },
    {
      title: "Edit the scenes",
      body: "Open src/data/slides.ts. Each entry is one scene, in the order it appears.",
      link: null,
    },
    {
      title: "Swap the photos",
      body: "Drop new images into public/images and point the scene at them. Wide, calm photos work best.",
      link: { label: "Unsplash license", href: "https://unsplash.com/license" },
    },
    {
      title: "Ship it",
      body: "Run npm run build to create an optimized production build you can deploy anywhere that runs Node.",
      link: { label: "Deploying Next.js", href: "https://nextjs.org/docs/app/getting-started/deploying" },
    },
  ],
};

export const callToAction = {
  id: "get-started",
  heading: "Ready to open with something better?",
  body: "Clone the project, change the words and pictures, and put it in front of people today.",
  primary: { label: "Back to the top", href: "#top" },
  secondary: { label: "Read the setup notes", href: "#resources" },
};

export const footer = {
  columns: [
    {
      title: "Project",
      links: [
        { label: "Scenes", href: "#scenes" },
        { label: "Features", href: "#features" },
        { label: "Overview", href: "#overview" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Setup notes", href: "#resources" },
        { label: "Next.js", href: "https://nextjs.org" },
        { label: "Unsplash", href: "https://unsplash.com" },
      ],
    },
  ],
  note: "Photographs from Unsplash. Drawings, layout and motion are original.",
};
