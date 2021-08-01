//프로그래머스 : 더 맵게

import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        int answer = 0;
        PriorityQueue<Integer> q = new PriorityQueue<>();
        for(int x : scoville)
        {
            q.add(x);
        }
        while(q.peek() < K){
            if(q.size() == 1){
                return -1;
            }
            int a = q.poll();
            int res = a + q.poll() * 2;
            q.add(res);
            answer++;
        }
        return answer;
    }
}
