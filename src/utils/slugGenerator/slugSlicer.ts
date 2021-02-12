const slugSlicer = (slug: string) => {
  const cuttedSlug = slug.slice(0, 40);
  const splittedSlug = cuttedSlug.split('_');

  if (splittedSlug.length < 2) return slug.slice(0, 40);

  const finalSlug = splittedSlug.slice(0, splittedSlug.length - 1);

  return finalSlug.join('_');
};

export default slugSlicer;
