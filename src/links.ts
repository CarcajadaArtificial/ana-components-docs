//   _    _      _
//  | |  (_)_ _ | |__ ___
//  | |__| | ' \| / /(_-<
//  |____|_|_||_|_\_\/__/
//
import { ItemLink } from 'ana-components';

export const LINKS_PARTICLES: ItemLink[] = [
  {
    name: 'color',
    url: '/particles/color',
  },
  {
    name: 'font',
    // url: '/particles/font',
  },
  {
    name: '* spacing',
    // url: '/particles/spacing',
  },
  {
    name: '* strokes',
    // url: '/particles/strokes',
  },
];

export const LINKS_INTERACTIVE_ATOMS = [
  {
    name: 'button',
    url: '/atoms/button',
  },
  {
    name: 'input',
    url: '/atoms/input',
  },
  {
    name: '* spinner',
    // url: '/atoms/spinner',
  },
];

const LINKS_TEXTUAL_ATOMS = [
  {
    name: 'code',
    // url: '/atoms/card',
  },
  {
    name: 'link',
    // url: '/atoms/link',
  },
  {
    name: 'text',
    url: '/atoms/text',
  },
];

export const LINKS_ARCHITECTURE_ATOMS = [
  {
    name: 'layout',
    // url: '/particles/layout',
  },
  {
    name: 'page',
    // url: '/particles/page',
  },
  {
    name: 'panel',
    // url: '/particles/panel',
  },
  {
    name: 'main',
    // url: '/particles/main',
  },
  {
    name: 'separator',
    // url: '/particles/separator',
  },
];

export const LINKS_ATOMS: ItemLink[] = [
  {
    name: 'Interactive',
    children: LINKS_INTERACTIVE_ATOMS,
  },
  {
    name: 'Textual',
    children: LINKS_TEXTUAL_ATOMS,
  },
  {
    name: 'Architecture',
    children: LINKS_ARCHITECTURE_ATOMS,
  },
];

export const LINKS_MOLECULES: ItemLink[] = [
  {
    name: 'card',
    // url: '/atoms/card',
  },
  {
    name: 'fieldset',
    // url: '/particles/fieldset',
  },
  {
    name: 'footer',
    // url: '/particles/footer',
  },
  {
    name: 'header',
    // url: '/particles/header',
  },
  {
    name: 'linkmap',
    // url: '/particles/linkmap',
  },
  {
    name: 'menu',
    // url: '/particles/menu',
  },
  {
    name: 'navigation',
    // url: '/particles/navigation',
  },
];

export const LINKS_PARTICLE_COLOR = [
  {
    name: 'Color Selector',
    url: '#color-selector',
  },
  {
    name: 'Patterns',
    url: '#patterns',
    children: [
      {
        name: 'Mineral-Based',
        url: '#mineral-based',
      },
      {
        name: 'Fruit-Based',
        url: '#fruit-based',
      },
      {
        name: 'Plant-Based',
        url: '#plant-based',
      },
      {
        name: 'Based on human-made food',
        url: '#based-on-human-made-food',
      },
      {
        name: 'Based on human-made things',
        url: '#based-on-human-made-things',
      },
      {
        name: 'Based on human-made concepts',
        url: '#based-on-human-made-concepts',
      },
      {
        name: 'Based on landscape scenery elements',
        url: '#based-on-landscape-scenery-elements',
      },
    ],
  },
];

export const LINKS_COMPONENT_TEXT = [
  {
    name: 'type',
    url: '#type',
    children: [
      {
        name: 'display',
        url: '#display',
      },
      {
        name: 'title',
        url: '#title',
      },
      {
        name: 'heading',
        url: '#heading',
      },
      {
        name: 'subheading',
        url: '#subheading',
      },
      {
        name: 'paragraph',
        url: '#paragraph',
      },
      {
        name: 'small',
        url: '#small',
      },
    ],
  },
  {
    name: 'Component props',
    url: '#component-props',
    children: [
      {
        name: 'noMargins',
        url: '#noMargins',
      },
      {
        name: 'inheritColor',
        url: '#inheritcolor',
      },
      {
        name: 'compact',
        url: '#compact',
      },
      {
        name: 'single',
        url: '#single',
      },
    ],
  },
];

export const LINKS_COMPONENT_INPUT = [
  {
    name: 'Component props',
    url: '#component-props',
    children: [
      {
        name: 'label',
        url: '#label',
      },
      {
        name: 'error',
        url: '#error',
      },
      {
        name: 'maxWidth',
        url: '#maxwidth',
      },
    ],
  },
  {
    name: 'Component props',
    url: '#component-props',
    children: [
      {
        name: 'placeholder',
        url: '#placeholder',
      },
      {
        name: 'type',
        url: '#type',
      },
      {
        name: 'required',
        url: '#required',
      },
      {
        name: 'disabled',
        url: '#disabled',
      },
    ],
  },
  {
    name: 'Other inputs',
    url: '#other-inputs',
    children: [
      {
        name: 'Checkbox and Radios',
        url: '#checkbox-and-radios',
      },
      {
        name: 'button',
        url: '#button',
      },
    ],
  },
  {
    name: 'TextArea component',
    url: '#textarea',
    children: [
      {
        name: 'noResize',
        url: '#noresize',
      },
    ],
  },
  {
    name: 'Select component',
    url: '#select',
    children: [
      {
        name: 'options',
        url: '#options',
      },
    ],
  },
];

export const LINKS_COMPONENT_BUTTON: ItemLink[] = [
  {
    name: 'color',
    url: '#color',
  },
  {
    name: 'Input buttons',
    url: '#input-buttons',
  },
];
