export const lebronify = (word: string): string => {
  const cleaned = word.trim().toLowerCase();
  const first = cleaned[0];
  const second = cleaned[1];

  if (first == "o") {
    return `LeBr${cleaned}`;
  } else if (second == "o") {
    return `LeBr${cleaned.slice(1)}`;
  } else if (first == "i") {
    return `Le${capitalize(cleaned.slice(1))}`;
  } else if (first == "e") {
    return `Le${cleaned.slice(1)}`;
  } else {
    return `Le${capitalize(cleaned)}`;
  }
}

const capitalize = (word: string): string => {
  return word[0].toUpperCase() + word.slice(1);
}