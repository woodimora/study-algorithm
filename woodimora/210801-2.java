import java.util.*;
class Solution {
    
    public boolean isCorrect(String str) {
        if(str.equals("")) return true;
        Stack<Character> stack = new Stack<>();
        for(char x : str.toCharArray()){
            if(x == '(') {
                stack.add(x);
            }else {
                if(stack.isEmpty()) return false;
                stack.pop();
            }
        }
        if(stack.isEmpty()) return true;
        else return false;
    }
    
    public String DFS(String str){
        if(isCorrect(str)) return str;
        int count = 0;
        String u = "";
        String v = "";
        int flag = 0;
        for(char x : str.toCharArray()){
            if(x == '(') {
                count++;
            }else {
                count--;
            }
            if(flag == 0){
                u = u + x;
            }
            else{
                v = v + x;
            }
            if(count == 0) {
                flag = 1;
            }
        }
        String res = "";
        if(!isCorrect(u)){
            String reverseBuf = u.substring(1, u.length() - 1);
            reverseBuf = reverseBuf.replace(')',']');
            reverseBuf = reverseBuf.replace('(',')');
            reverseBuf = reverseBuf.replace(']','(');
            res = '(' + DFS(v) + ')' + reverseBuf;
        }
        else{
            res = u + DFS(v);
        }
        return res;
    }
    
    public String solution(String p) {
        String answer = "";
        answer = DFS(p);
        return answer;
    }
}