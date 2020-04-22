class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    dict = {}

    for i, num in enumerate(nums):
      compliment = target-num

      if compliment in dict:
        return [dict[compliment], i]
      dict[num] = i