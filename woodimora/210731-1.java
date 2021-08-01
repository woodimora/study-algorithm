//프로그래머스 : 오픈카톡방

import java.util.*;

class Process{
    String id;
    String act;
    Process(String id, String act){
        this.id = id;
        this.act = act;
    }
}

class Solution {
    public String[] solution(String[] record) {
        String[] answer = {};
        ArrayList<String> arr = new ArrayList<>();
        Queue<Process> q = new LinkedList<>();
        Map<String, String> map = new HashMap<>();
        for(String x : record){
            String[] parse = x.split(" ");
            if(parse[0].equals("Enter")){
                q.add(new Process(parse[1], parse[0]));
                map.put(parse[1], parse[2]);
            }
            else if(parse[0].equals("Leave")){
                q.add(new Process(parse[1],parse[0]));
            }
            else{
                map.put(parse[1],parse[2]);
            }
        }
        int size = q.size();
        for(int i = 0 ; i < size; i++){
            Process p = q.poll();
            String id = p.id;
            String act = p.act;
            if(act.equals("Enter")){
                arr.add(map.get(id) + "님이 들어왔습니다.");
            }
            else {
                arr.add(map.get(id) + "님이 나갔습니다.");
            }
        }
        answer = new String[arr.size()];
        arr.toArray(answer);
        return answer;
    }
}
