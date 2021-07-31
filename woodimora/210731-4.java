class Solution {
    public String solution(int n) {
        String answer = "";
        int res = n;
        while(res > 0){
            if(res % 3 == 0){
                answer = "4" + answer;
                res = ((res - 3) / 3);
            }
            else{
                answer = Integer.toString(res % 3) + answer;
                res = res / 3;
            }
        }
        return answer;
    }
}