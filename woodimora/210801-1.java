import java.util.*;
class Solution {
    public int[][] check;
    public boolean checkAround(char[][] table, int y, int x){
        int[][] dir1 = {{1,0},{-1,0},{0,1},{0,-1}};
        int[][] dir2 = {{1,1},{-1,1},{-1,-1},{1,-1}};
        for(int i = 0; i < 4; i++){
            int dy = y + dir1[i][0];
            int dx = x + dir1[i][1];
            if(dy < 0 || dx < 0 || dy >=5 || dx >= 5 || check[dy][dx] == 1) continue;
            if(table[dy][dx] == 'P'){
                return false;
            }
            else if(table[dy][dx] == 'X'){
                continue;
            }
            else{
                dy += dir1[i][0];
                dx += dir1[i][1];
                if(dy < 0 || dx < 0 || dy >=5 || dx >= 5 || check[dy][dx] == 1) continue;
                if(table[dy][dx] == 'P'){
                    return false;
                }
            }
        }
        for(int i = 0; i < 4; i++){
            int dy = y + dir2[i][0];
            int dx = x + dir2[i][1];
            if(dy < 0 || dx < 0 || dy >=5 || dx >= 5 || check[dy][dx] == 1) continue;
            if(table[dy][dx] == 'P'){
                if(table[dy][dx - dir2[i][1]] != 'X' || table[dy - dir2[i][0]][dx] != 'X'){
                    return false;
                }
            }
        }
        return true;
    }
    public boolean isPossible(String[] place){
        char[][] table = new char[5][5];
        check = new int[5][5];
        for(int i = 0; i < 5; i++){
            for(int j = 0; j < 5; j++){
                table[i][j] = place[i].charAt(j);
            }
        }
        for(int i = 0; i < 5; i ++){
            for(int j = 0; j < 5; j++){
                if(check[i][j] == 0){
                    if(table[i][j] == 'P' && !checkAround(table, i, j)){
                        return false;
                    }
                    check[i][j] = 1;
                }
            }
        }
        return true;
    }
    public int[] solution(String[][] places) {
        int[] answer = {};
        ArrayList<Integer> arr = new ArrayList<>();
        for(int i = 0 ;i < 5;i ++){
            if(isPossible(places[i])){
                arr.add(1);
            }else{
                arr.add(0);
            }
        }
        
        answer = new int[5];
        for(int i = 0; i < 5; i++){
            answer[i] = arr.get(i);
        }
        return answer;
    }
}