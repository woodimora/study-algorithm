import java.util.*;
class Solution {
    public int solution(String s) {
        int length = s.length()/2;
        int ls = 0;
        int answer = s.length();
        while(length > 0){
            int count = 0;
            int res = s.length();
            for(int i = 0; i <= s.length() - (length * 2); i=i+length){
                ls = i;
                int flag = 0;
                for(int j = i + length; j < s.length() - length + 1; j=j+length){
                    for(int k = j; k < j + length; k++){
                        if(s.charAt(ls++) != s.charAt(k)){
                            flag = 1;
                            break;
                        }
                    }
                    ls = i;
                    if(flag == 1){
                        break;
                    }
                    count++;
                }
                if(count != 0){
                    res = res - (length * count) + Integer.toString(count + 1).length();
                    answer = Math.min(res, answer);
                    //System.out.println(length + "," + count + "," + res + "," + answer );
                    i = i + (count - 1) * length;
                    count = 0;
                }
            }
            length--;
        }
        
        return answer;
    }
}