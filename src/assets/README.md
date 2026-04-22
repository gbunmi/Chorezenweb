# Drop your SVGs here

The page renders placeholder boxes labeled `hero`, `hero-plant-left`, `hero-plant-right`,
`product-standard`, `product-movein`, `product-extra`, `how-showcase`, and `cta`.

Two ways to wire them in:

## Option A — import the SVG as a React component

Put `hero.tsx` (or similar) here exporting a React component, then in the section file use:

```tsx
import { HeroArt } from '../assets/HeroArt';

<Illustration name="hero">
  <HeroArt />
</Illustration>
```

## Option B — import the SVG file as a URL

```tsx
import heroUrl from '../assets/hero.svg';

<Illustration name="hero" src={heroUrl} />
```

Both paths skip the placeholder and render your artwork in place.
