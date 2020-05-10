class Solution:
    def uniqueMorseRepresentations(self, words: List[str]) -> int:
      morseMap = self.mapMorseToChar()
      uniq = set()
      
      # Iterate through the list, and convert each word to a morse code
      for word in words:
        uniq.add(self.convert(word, morseMap))
        
      return len(uniq)

    def convert(self, word: str, morse: dict) -> str:
      res = ''
      # Iterate through the word, and append
      for char in word:
        res += morse[char]
      return res
    
    # Maps morse code to individual characters
    def mapMorseToChar(self) -> dict:
      dict = {}
      morse = [
        ".-","-...","-.-.","-..",".","..-.","--.","....","..",
        ".---","-.-",".-..","--","-.","---",".--.","--.-",".-.",
        "...","-","..-","...-",".--","-..-","-.--","--.."]
      
      for i, char in enumerate(range(0,26)):
        if char not in dict:
          dict[chr(97 + int(char))] = morse[i]
      return dict
