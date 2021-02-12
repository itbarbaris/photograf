import shuffle from '../shuffler';

const getAlphanumeric = (): string => {
  const lowerAlphas = 'abcdefghijklmnopqrstuvwxyz';

  return `${lowerAlphas}${lowerAlphas.toUpperCase()}1234567890`;
};

const makeId = (length: number): string => {
  const chars = shuffle(getAlphanumeric());
  let result = '';
  //62
  for (let idx = 0; idx < length; idx += 1) {
    const randomIdx = Math.floor(Math.random() * chars.length);

    result += chars[randomIdx];
  }

  return result;
};

export default makeId;
