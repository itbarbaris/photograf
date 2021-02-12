const shuffler = <T>(toShuffle: T[] | string) => {
  //copy array/split the string
  let shuffled =
    typeof toShuffle === 'string' ? toShuffle.split('') : [...toShuffle];
  const len = shuffled.length - 1;
  //replacing el[idx] with el[randomIdx] thus shuffling the array
  for (let idx = len; idx > 0; idx -= 1) {
    const randomIdx = Math.floor(Math.random() * (len + 1));
    [shuffled[idx], shuffled[randomIdx]] = [shuffled[randomIdx], shuffled[idx]];
  }

  return typeof toShuffle === 'object' ? shuffled : shuffled.join('');
};

export default shuffler;
