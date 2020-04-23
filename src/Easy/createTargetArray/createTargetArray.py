class Solution:
    def createTargetArray(self, nums: List[int], index: List[int]) -> List[int]:
      """
      Python cannot dynamically resize arrays, so the following is impossible:
      arr = []
      arr[2] = 'Some value' # Will error out
      
      Therefore, you need to instantiate a list with n elements, or insert/appending
      to an existing list
      """
      res = []
      # use list.insert(index, element)
      for idx, num in enumerate(nums):
        res.insert(index[idx], num)
      return res
    