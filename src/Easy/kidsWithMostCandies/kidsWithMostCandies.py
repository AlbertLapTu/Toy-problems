class Solution:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        max_candies = max(candies)
        # res = [True if kid + extraCandies >= max_candies else False for kid in candies]
        return [True if kid + extraCandies >= max_candies else False for kid in candies]