class Solution:
    def findNumbers(self, nums: List[int]) -> int:
      # If just a single digit, check if its len is even
      if len(nums) == 1:
        return 1 if len(str(nums[0])) % 2 == 0 else 0
      
      total = 0
      # iterate over the array
      for num in nums:
        if (len(str(num)) % 2 == 0):
          total += 1
          
      return total

# Shorthand
class Solution:
  """
  Sum API: https://docs.python.org/3/library/functions.html#sum
  Iterable definition: https://docs.python.org/3/glossary.html

  In the shorthand solution below, we're making use of generator expressions. 
  Generator expressions returns an iterator, which looks like a normal expression
  that is then followed by a for clause, defining a loop variable, range, and an 
  optional if clause. 

  ex. sum(i * i for i in range(10)) -> Returns 285.
  multiplies i by i for every number from 0..9

  """ 
  def findNumbers(self, nums: List[int]) -> int:
    if len(nums) == 1:
      return 1 if len(str(nums[0])) % 2 == 0 else 0
    
    return sum(len(str(num)) % 2 == 0 for num in nums)
        
        