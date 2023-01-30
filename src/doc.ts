import { join } from 'std/path/mod.ts';

export const getDoc = async (
  directory: string,
  slug: string
): Promise<string> =>
  await Deno.readTextFile(join('./docs', directory, `${slug}.md`));
