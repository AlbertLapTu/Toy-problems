var uniqueMorseRepresentations = function(words) {
  let morseCode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ];
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let morseCodes = [];
  let hashMap = {};

  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    if (!hashMap[letter]) {
      hashMap[letter] = morseCode[i];
    }
  }

  const calculateMorseCode = word => {
    let split = word.split('');
    let result = '';

    for (let i = 0; i < split.length; i++) {
      result += hashMap[split[i]];
    }
    return result;
  };

  //Iterate over words
  for (let i = 0; i < words.length; i++) {
    let morseVersion = calculateMorseCode(words[i]);
    morseCodes.push(morseVersion);
  }

  return new Set(morseCodes).size;
};
