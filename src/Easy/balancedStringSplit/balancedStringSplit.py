class Solution:
    def balancedStringSplit(self, s: str) -> int:
        """
        R = +1
        L = - 1
        
        if the count is 0
        increase counter
        """
        counter = 0
        count = 0
        
        for char in s:
          if (char == 'R'):
            count += 1
          else:
            count -= 1
          if count == 0:
            counter += 1
            count = 0
        return counter
            