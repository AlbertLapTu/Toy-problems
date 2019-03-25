var commonCharacters = function(string1, string2) {
  let firstMap = new Map();
  let secondMap = new Map();
  let finalString = '';

  for (character of string1) {
    if (!firstMap.get(character)) {
      firstMap.set(character, character);
    }
  }

  for (character of string2) {
    if (!secondMap.get(character)) {
      secondMap.set(character, character);
    }
  }

  for (character of string1) {
    if (secondMap.get(character)) {
      finalString += secondMap.get(character);
    }
  }
  return finalString;
};

commonCharacters('acexivou', 'aegihobu');
