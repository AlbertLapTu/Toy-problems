class Solution {
    public int numJewelsInStones(String J, String S) {
        int res = 0;
        HashSet<Character> set = new HashSet<Character>();
      
        for (char ch : J.toCharArray()) {
          set.add(ch);
        }
      
        for (char c: S.toCharArray()) {
          if (set.contains(c)) {
            res++;
          }
        }
        return res;
    }
}
