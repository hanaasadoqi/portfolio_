export function toTitleCaseBasic(str: string) {
  return str
    .toLowerCase() // Convert the entire string to lowercase first
    .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize the first letter of each word
}


export function toTitleCase(str: string) {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.split(' ').map((word, index) => {
    if (index === 0 || !['the', 'and', 'of', 'in', 'for'].includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  }).join(' ');
}
