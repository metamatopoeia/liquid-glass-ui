# Liquid Glass UI — Best Practices

A concise guide to getting the most out of the library.

---

## 1. Use Textured or Photographic Backgrounds

Glass elements derive their entire visual character from what's behind them. Over a flat, solid-color background the effect is largely invisible — you'll see blur but no refraction, depth, or chromatic interest.

**Do:** Place glass components over gradients, photography, illustrations, noise textures, or gradient meshes.

```css
body {
  background: url("/hero.jpg") center / cover no-repeat fixed;
}
```

**Avoid:** Rendering glass surfaces over a uniform `background-color` with no variation beneath them.

---

## 2. Background Content Directly Drives Color Contrast

`backdrop-filter: blur()` samples and blurs whatever is rendered behind the element at paint time. This means:

- A light region of the background produces a light glass surface.
- A dark region produces a dark glass surface.
- The contrast between your text and the glass surface changes dynamically as users scroll or as backgrounds animate.

**Implication:** You cannot guarantee contrast ratios at design time. A button that reads clearly over your hero image may become illegible when it scrolls over a pale section. Audit contrast across every realistic background state your UI can encounter.

---

## 3. Build a Robust Visual Regression Test Suite

Because the background controls perceived contrast, a standard snapshot of a component in isolation is not sufficient. Your consuming app's test suite must cover glass components **in context**.

Recommended approach:
- Use **Playwright** or **Cypress** for screenshot-based visual regression.
- Test every glass component against both a light background region and a dark background region.
- Test light mode and dark mode explicitly — do not rely solely on `prefers-color-scheme` emulation.
- Include an accessibility audit (`axe` or `pa11y`) as part of CI so contrast failures are caught automatically.

---

## 4. Prefer Layered Typography Strategies for Legibility

Because text sits atop a surface whose effective brightness is unpredictable:

- Use `text-shadow` or a subtle scrim beneath text-heavy glass areas to improve legibility across variable backgrounds.
- The library's default tokens (`zinc-900` light / `zinc-100` dark) are chosen for maximum chromatic neutrality — avoid overriding text color with saturated hues on glass.
- Bold or semi-bold weight (`font-weight: 600+`) reads more reliably than thin weights on a blurred surface.

---

## 5. Match Glass Elevation to Content Importance

The library exposes three blur tiers via `Paper elevation` and the `--lg-blur` hierarchy. Use them intentionally:

| Tier | Blur | Use For |
| :--- | :--- | :--- |
| `thin` | `8px` | Background toolbars, breadcrumbs, subtle dividers |
| `regular` | `20px` | Cards, sidebars, navigation panels |
| `thick` | `40px` | Modals, popovers, action sheets |

Mixing elevations creates the illusion of depth. Applying `thick` everywhere flattens the hierarchy and degrades performance.

---

## 6. Respect Accessibility Media Queries — and Test Them

The library automatically responds to two OS-level preferences:

- **`prefers-reduced-motion`** — sets `--lg-transition-duration: 0ms`, disabling all glass transitions.
- **`prefers-reduced-transparency`** — disables `backdrop-filter` and raises `--lg-bg-opacity` to `0.98`, making surfaces opaque.

**Test both states in CI.** When transparency is reduced the glass aesthetic is deliberately replaced with a near-opaque surface — your layout must not depend on see-through rendering to convey information.

---

## 7. Scope Theme Overrides via `ThemeProvider`, Not Global CSS

Override design tokens through `createTheme()` and `ThemeProvider` rather than targeting `--lg-*` variables globally. Scoped injection ensures:

- Nested providers work correctly (e.g., a dark modal inside a light page).
- Overrides are tree-shaken per provider subtree and don't bleed into other parts of the document.

**[Full Theming Guide →](Theme.md)**

---

## 8. Avoid Stacking Glass Surfaces

Nesting a glass component inside another glass component (e.g., a `Card` inside a `Dialog`) means the inner element blurs an already-blurred background. This produces a muddy, washed-out result and roughly doubles GPU compositing cost.

If nesting is unavoidable, drop the inner element to the `thin` tier and remove its `backdrop-filter` via a scoped CSS override.

---

## 9. Defer `backdrop-filter` with `will-change` Only During Animation

`will-change: transform, opacity` promotes an element to its own compositor layer, which is beneficial during transitions but wastes VRAM when held permanently. The library applies it only during active transitions — do not override this to `will-change: backdrop-filter` statically.

---

## 10. Add the MCP Server to Your AI Coding Assistant

The library ships an MCP server that gives AI assistants (Windsurf, Cursor, Claude) live knowledge of every component, prop, and CSS variable. This eliminates hallucinated API shapes and keeps AI-generated code aligned with the actual library surface.

**[MCP Server Setup →](../README.md#mcp-server)**
