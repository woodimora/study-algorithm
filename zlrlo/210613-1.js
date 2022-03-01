/**
 * @param {string}
 * @return {boolean}
 */
 var isValid = function(s) {
    let stack =[]; 
    let answer = true; 
    
    s.split('').forEach((ch, index) => {
        if(ch === '(' || ch === '[' || ch === '{') stack.push(ch);
        else {
            let pre = stack.pop();
            
            if(pre) {
                if(ch === ')' && pre !== '(') answer = false;
                if(ch === ']' && pre !== '[') answer = false; 
                if(ch === '}' && pre !== '{') answer = false; 
            }
            else answer = false; 
        }
    }); 
    
    if(stack.length !== 0) answer = false; 
    return answer;
};