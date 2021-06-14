import java.util.*;
class Main {
    public String[] solution(String[] record) {
        String[] answer = {};
    
        ArrayList<String[]>order = new ArrayList<>();
        Map<String,String> m = new HashMap<>();
        for(int i = 0 ;i < record.length; i++)
        {
            String[] tmp = record[i].split(" ");
            String[] task = new String[2];
            if(tmp[0].equals("Enter"))
            {
                m.put(tmp[1], tmp[2]);
                task[0] = tmp[0];
                task[1] = tmp[1];
                order.add(task);
            }
            else if(tmp[0].equals("Leave")){
                task[0] = tmp[0];
                task[1] = tmp[1];
                order.add(task);
            }
            else{
                m.put(tmp[1], tmp[2]);
            }
        }
        ArrayList<String> res = new ArrayList<>();
        for(int i = 0;i < order.size() ; i++)
        {
            if(order.get(i)[0].equals("Enter")){
                res.add(m.get(order.get(i)[1]) + "님이 들어오셨습니다.");
            }
            else{
                res.add(m.get(order.get(i)[1]) + "님이 나가셨습니다.");
            }
        }
        answer = new String[res.size()];
        res.toArray(answer);
        return answer;
    }

    public static void main(String[] args)
    {
        Main T = new Main();
        String[] arr = {"Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"};

        for(String str : T.solution(arr))
        {
            System.out.println(str);
        }
    }
}