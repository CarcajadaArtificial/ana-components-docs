# Changelog

## v0.0.18

### Added `PAGE_THEME` enum
  - `~/components/Page.tsx`

### Added `TEXT_TYPES` enum
  - `~/components/TextDoc.tsx`
  - `~/islands/ColorDisplay.tsx`
  - `~/islands/ThemeExample.tsx`

### Added `LAYOUT_TYPES` enum
  - `~/islands/ColorDisplay.tsx`
  - `~/islands/ThemeExample.tsx`

### Updated routes to use new enums
  - `~/routes/color.tsx`
  - `~/routes/input.tsx`
  - `~/routes/text.tsx`
  - `~/routes/theme.tsx`
  - `~/routes/button.tsx`


### Comming soon (v0.1.0)

- Features
  - [ ] Content driven documentation using Sanity.io or raw md files.
    - [ ] Add gfm to import richer .md content.
  - [x] Migrate testing pages from the ana-components repo

- Fixes
  - [ ] The Card component background dilemma.
  - [ ] Button page scrolls down too far.
  - [ ] Create a component for the doc's footer.

- Documentation
  - Particles
    - [ ] Color
    - [ ] Typography
  - Atoms
    - [x] Text
    - [ ] Button
    - [ ] Card
    - [ ] Code
    - [ ] Link
    - [ ] Main
    - [ ] Separator
    - [x] Input
      - [ ] Select
      - [ ] TextArea
  - Molecules
    - [ ] Page
    - [ ] Footer
    - [ ] Header
    - [ ] Layout
    - [ ] Menu
    - [ ] Navigation
