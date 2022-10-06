export { getStingFromArray };

function getStingFromArray(languages) {
  const arrLanguages = Object.values(languages);
  return arrLanguages.length === 1
    ? arrLanguages[0]
    : arrLanguages.join(', ').trim().slice(0, -1);
}
