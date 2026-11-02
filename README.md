# Into the Weather

A one-page Next.js site built around a full-screen parallax hero slider.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## Project structure

```
new_html/
├── public/images/            Background photos (Unsplash)
└── src/
    ├── app/
    │   ├── layout.tsx        <html>, fonts, metadata
    │   ├── page.tsx          Puts the page sections in order
    │   └── globals.css       Design tokens (colors, spacing) and base styles
    ├── data/
    │   ├── slides.ts         The slider scenes: copy, photo, tint, artwork, depth
    │   └── content.ts        All other page copy
    └── components/
        ├── TopBar/           Brand, tags, call-to-action button
        ├── HeroSlider/
        │   ├── HeroSlider.tsx       Slider container and pointer parallax
        │   ├── Slide.tsx            One scene
        │   ├── SliderControls.tsx   Dot rail, arrows, counter, social links
        │   ├── AboutDialog.tsx      "About" modal
        │   ├── useSlider.ts         Active slide state and transition lock
        │   ├── useSliderGestures.ts Wheel, keyboard and swipe input
        │   └── art/                 One SVG illustration per scene
        ├── Features/         Three feature cards
        ├── Spotlight/        "How it's built" with a code sample
        ├── Overview/         Scene thumbnails, benefits, closing banner
        ├── Resources/        Setup steps
        ├── CallToAction/     Final banner
        ├── Footer/
        └── ui/               Shared Button, SectionHeading and icons
```

Each component keeps its styles in a `*.module.css` file next to it.

## Editing

- **Change a scene:** edit `src/data/slides.ts`. Adding an entry adds a scene and a rail dot.
- **New illustration:** add a component in `src/components/HeroSlider/art/` and register it in `art/index.ts`.
- **Change page text:** edit `src/data/content.ts`.
- **Change colors or spacing:** edit the variables at the top of `src/app/globals.css`.

## Slider controls

- The slider moves on by itself every 9 seconds (`slideDuration` in `src/data/slides.ts`), looping forever. The thin bar on the right edge shows the time left. Autoplay pauses while the slider is scrolled out of view, the tab is hidden or the About dialog is open.
- Mouse wheel or the ↑ / ↓ keys move between scenes while the slider fills the screen. After the last scene, scrolling continues down the page.
- On touch screens, swipe left or right to change scenes.
- With reduced motion turned on, the entrance animations and parallax are switched off.
