# Changelog

## v0.0.27

### Added ana dependencies to the import map
  - `import_map.json`

### Updated all imports of ana-components
  - `components/ColorBlock.tsx`
  - `components/Page.tsx`
  - `components/TextDoc.tsx`
  - `islands/ColorDisplay.tsx`
  - `islands/Navigation.tsx`
  - `islands/ThemeExample.tsx`
  - `routes/index.tsx`
  - `routes/atoms/button.tsx`
  - `routes/atoms/input.tsx`
  - `routes/atoms/text.tsx`
  - `routes/atoms/theme.tsx`
  - `routes/particles/color.tsx`
  - `src/links.ts`

### Added minor updates
  - `.gitignore`
  - `docs/atoms/input/button.md`
  - `docs/particles/color/turquesa.md`

### Comming soon (v0.1.0)

- Features
  - [x] Content driven documentation using Sanity.io or raw md files.
    - [x] Add gfm to import richer .md content.
  - [x] Migrate testing pages from the ana-components repo

- Fixes
  - [x] The Card component background dilemma.
  - [x] Button page scrolls down too far.
  - [ ] Create a component for the doc's footer.

- Documentation
  - Particles
    - [ ] Color
    - [ ] Typography
  - Atoms
    - [x] Text
    - [x] Button
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
