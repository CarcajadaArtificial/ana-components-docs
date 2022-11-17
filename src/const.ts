import type { Colors } from './types.ts';

type Palette = {
  [key in Colors]: ColorData;
};

interface ColorData {
  hex: string;
  r: number;
  g: number;
  b: number;
  h: number;
  s: number;
  l: number;
}

export const palette: Palette = {
  detergente: { hex: '#1f84cc', r: 31, g: 132, b: 204, h: 205, s: 74, l: 46 },
  grafito: { hex: '#3d3640', r: 61, g: 54, b: 64, h: 282, s: 8, l: 23 },
  flan: { hex: '#fabb64', r: 250, g: 187, b: 100, h: 35, s: 94, l: 69 },
  chicle: { hex: '#f7577f', r: 247, g: 87, b: 127, h: 345, s: 91, l: 65 },
  ladrillo: { hex: '#cc5f29', r: 204, g: 95, b: 41, h: 20, s: 67, l: 48 },
  arandano: { hex: '#66050d', r: 102, g: 5, b: 13, h: 355, s: 91, l: 21 },
  jade: { hex: '#0f474d', r: 15, g: 71, b: 77, h: 186, s: 67, l: 18 },
  menta: { hex: '#1fcccc', r: 31, g: 204, b: 204, h: 180, s: 74, l: 46 },
  acero: { hex: '#aca1b3', r: 172, g: 161, b: 179, h: 277, s: 11, l: 67 },
  arena: { hex: '#fff7cc', r: 255, g: 247, b: 204, h: 51, s: 100, l: 90 },
  mantequilla: { hex: '#f7ff99', r: 247, g: 255, b: 153, h: 65, s: 100, l: 80 },
  chapopote: { hex: '#241f26', r: 36, g: 31, b: 38, h: 283, s: 10, l: 14 },
  uva: { hex: '#380899', r: 56, g: 8, b: 153, h: 260, s: 90, l: 32 },
  musgo: { hex: '#9eed77', r: 158, g: 237, b: 119, h: 100, s: 77, l: 70 },
  cobalto: { hex: '#1262b3', r: 18, g: 98, b: 179, h: 210, s: 82, l: 39 },
  hielo: { hex: '#7ae0f5', r: 122, g: 224, b: 245, h: 190, s: 86, l: 72 },
  mota: { hex: '#12b362', r: 18, g: 179, b: 98, h: 150, s: 82, l: 39 },
  vino: { hex: '#400020', r: 64, g: 0, b: 32, h: 330, s: 100, l: 13 },
  blanco: { hex: '#ffffff', r: 255, g: 255, b: 255, h: 0, s: 0, l: 100 },
  ambar: { hex: '#f59149', r: 245, g: 145, b: 73, h: 25, s: 90, l: 62 },
  lapis: { hex: '#000066', r: 0, g: 0, b: 102, h: 240, s: 100, l: 20 },
  marino: { hex: '#030f33', r: 3, g: 15, b: 51, h: 225, s: 89, l: 11 },
  fresa: { hex: '#e62e4d', r: 230, g: 46, b: 77, h: 350, s: 79, l: 54 },
  cedro: { hex: '#00806a', r: 0, g: 128, b: 106, h: 170, s: 100, l: 25 },
  bombon: { hex: '#fc7ea8', r: 252, g: 126, b: 168, h: 340, s: 95, l: 74 },
  pulpo: { hex: '#660546', r: 102, g: 5, b: 70, h: 320, s: 91, l: 21 },
  tortilla: { hex: '#ffea80', r: 255, g: 234, b: 128, h: 50, s: 100, l: 75 },
  manzana: { hex: '#b31b34', r: 179, g: 27, b: 52, h: 350, s: 74, l: 40 },
  turquesa: { hex: '#088199', r: 8, g: 129, b: 153, h: 190, s: 90, l: 32 },
  vinca: { hex: '#afbbfa', r: 175, g: 187, b: 250, h: 230, s: 88, l: 83 },
  pitahaya: { hex: '#b3128a', r: 179, g: 18, b: 138, h: 315, s: 82, l: 39 },
  obsidiana: { hex: '#0c0a0d', r: 12, g: 10, b: 13, h: 280, s: 13, l: 5 },
  kawaii: { hex: '#e9abf5', r: 233, g: 171, b: 245, h: 290, s: 79, l: 82 },
  limon: { hex: '#089969', r: 8, g: 153, b: 105, h: 160, s: 90, l: 32 },
  pastel: { hex: '#fa96c8', r: 250, g: 150, b: 200, h: 330, s: 91, l: 78 },
  papel: { hex: '#eee6f2', r: 238, g: 230, b: 242, h: 280, s: 32, l: 93 },
  hierro: { hex: '#796c80', r: 121, g: 108, b: 128, h: 279, s: 8, l: 46 },
  magia: { hex: '#a37af5', r: 163, g: 122, b: 245, h: 260, s: 86, l: 72 },
  cielo: { hex: '#7aadf5', r: 122, g: 173, b: 245, h: 215, s: 86, l: 72 },
  plata: { hex: '#d5ced9', r: 213, g: 206, b: 217, h: 278, s: 13, l: 83 },
  lavanda: { hex: '#6246eb', r: 98, g: 70, b: 235, h: 250, s: 80, l: 60 },
  cajeta: { hex: '#b36b24', r: 179, g: 107, b: 36, h: 30, s: 67, l: 42 },
  wasabi: { hex: '#d0fa7d', r: 208, g: 250, b: 125, h: 80, s: 93, l: 74 },
  princesa: { hex: '#d0bbfa', r: 208, g: 187, b: 250, h: 260, s: 86, l: 86 },
  nube: { hex: '#dfd9ff', r: 223, g: 217, b: 255, h: 249, s: 100, l: 93 },
};

export const orderedPalette: (Colors | null)[][] = [
  // prettier-ignore
  [null,'vino',null,null,null,null,'jade','marino',null,'obsidiana'],
  // prettier-ignore
  ['pulpo','arandano',null,null,null,'cedro',null,null,'lapis','chapopote'],
  // prettier-ignore
  ['pitahaya','manzana','ladrillo','cajeta',null,'limon','turquesa','cobalto','uva','grafito'],
  // prettier-ignore
  [null,'fresa',null,null,null,'mota',null,'detergente',null,'hierro'],
  // prettier-ignore
  [null,'chicle','ambar','flan',null,null,'menta',null,'lavanda','acero'],
  // prettier-ignore
  ['kawaii','bombon',null,'tortilla','wasabi','musgo','hielo','cielo','magia','plata'],
  // prettier-ignore
  [null,'pastel',null,null,'mantequilla',null,null,'vinca','princesa','papel'],
  // prettier-ignore
  [null,null,null,'arena',null,null,null,null,'nube','blanco'],
];

export const paletteDisplay: (Colors | null)[][] = [
  // prettier-ignore
  ['cielo','vinca','nube','kawaii','pastel',null,'pitahaya',null,'obsidiana',null],
  // prettier-ignore
  ['detergente',null,'princesa',null,'bombon',null,'pulpo',null,'chapopote',null],
  // prettier-ignore
  ['cobalto',null,'magia',null,'chicle',null,'vino',null,'grafito',null],
  // prettier-ignore
  ['lapis','uva','lavanda',null,'fresa','manzana','arandano',null,'hierro',null],
  // prettier-ignore
  ['marino',null,null,null,null,null,'ladrillo',null,'acero',null],
  // prettier-ignore
  ['jade','cedro','limon','mota',null,'cajeta','ambar',null,'plata',null],
  // prettier-ignore
  ['turquesa',null,null,'musgo',null,null,'flan',null,'papel',null],
  // prettier-ignore
  ['menta','hielo',null,'wasabi','mantequilla','arena','tortilla',null,'blanco',null],
];
