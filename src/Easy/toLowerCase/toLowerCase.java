class Solution {
  public String toLowerCase(String str) {
    StringBuilder sb = new StringBuilder();
    for (int i = 0; i < str.length(); i++) {
      char ch = Character.toLowerCase(str.charAt(i));
      sb.append(ch);
    }
    return sb.toString();
  }
}