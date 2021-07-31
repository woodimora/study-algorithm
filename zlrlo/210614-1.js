function solution(record) {
    let answer = [];
    
    let order = []; 
    let map = {};
    
    record.forEach((data) => {
        const splitData = data.split(' ');
        
        const state = splitData[0];
        const id = splitData[1];
        const nickname = splitData[2];
        
        order.push({state, id});   
        
        if(state === 'Enter' || state === 'Change') {
            map[id] = nickname; 
        }
    }); 
    
    
    order.forEach((data) => {
        const {state, id} = data; 
    
        if(state === 'Enter' || state === 'Leave') {
            const lastStr = state === 'Enter' ? '들어왔습니다.' : '나갔습니다.';
            const finalStr = `${map[id]}님이 ${lastStr}`;
            answer.push(finalStr);
        }
    }); 
    
    return answer;
}