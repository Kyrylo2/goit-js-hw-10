export { getStingFromArray };

function getStingFromArray(languages) {
  return Object.values(languages).join(', ').trim().slice(0, -1);
}
