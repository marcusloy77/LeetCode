var longestCommonPrefix = function(strs) {
    
    let retStr = ''
    let lastChar = ''
    
    for (let i = 0; i < strs[0].length; i++) {
        let lastChar = strs[0][i]
        console.log('here', strs[0][i])
        
        for (let j = 0; j < strs.length; j++) {

            if (strs[j][i] !== lastChar) {
                return retStr
            }
        }
        
        retStr = retStr + lastChar
        
    }
    return retStr
    
};
