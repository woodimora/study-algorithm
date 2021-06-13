import java.util.*;
class Solution {
    public boolean isValid(String s) {
        boolean answer = false;
        Stack<Character> arr = new Stack<>();
        char ch = 0;

        for(int i = 0 ;i < s.length(); i++)
        {
            if(s.charAt(i) == '{' || s.charAt(i) == '[' || s.charAt(i) == '('){
                switch(s.charAt(i))
                {
                    case '{':
                        arr.push('}');
                        ch = '}';
                    break;
                    case '[':
                        arr.push(']');
                        ch = ']';
                    break;
                    case '(':
                        arr.push(')');
                        ch = ')';
                    break;
                }
            }
            if(s.charAt(i) == '}' || s.charAt(i)== ']' || s.charAt(i) == ')'){
                if(arr.isEmpty())
                {
                    return false;
                }
                else if(ch == s.charAt(i))
                {
                    arr.pop();
                    if(!arr.isEmpty())
                        ch = arr.peek();
                }
                else
                {
                    return false;
                }
            }
        }
        if(arr.isEmpty())
        {
            answer = true;
        }
        return answer;
    }
    public static void main(String[] arg){
        Solution T = new Solution();
        Scanner kb = new Scanner(System.in);
        String str = kb.nextLine();
        String input = str.substring(5,str.length() - 1);
        System.out.println(T.isValid(input));
    }
}