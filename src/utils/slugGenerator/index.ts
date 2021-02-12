import characters from './chars';
import sliceSlug from './slugSlicer';

const slugify = (str: string): string => {
  str = str.trim().toLowerCase();
  const chars = Object.keys(characters);

  chars.forEach((char) => {
    characters[char].forEach((swap) => {
      str = str.replace(new RegExp(swap, 'g'), char);
    });
  });

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, '')
    .replace(/-/g, '_');

  return sliceSlug(str);
};

export default slugify;

// other implementations: https://gist.github.com/codeguy/6684588
