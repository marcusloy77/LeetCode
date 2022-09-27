var romanToInt = function(s) {
    
    
    // I -> III, then IV is 4, V 5, VI 6, VIII 8, IX 9
    
    
    //idea is to sum up like values, then pattern match so that smaller values before larger ones minus, after plus
    
    let romans = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }
    
    let current = s[0]
    let count = 0
    let total = 0
    
    while (s.length > 0) {
        
        if (s.length === 1) {
            if (current === s[0]) {
                count += 1
                total += count * romans[s[0]]
                break
            }
            else {
                if (romans[s[0]] > romans[current]) {
                    total = total - (count * romans[current])
                    total = total + romans[s[0]]
                    break
                }
                else {
                    total = total + (count * romans[current]) + romans[s[0]]
                    break
                }
            }
        }
        
        if (s[0] === current) {
            count += 1
        }
        else {
            if (romans[current] < romans[s[0]]) {
                console.log(romans[current] * count, 'minus')
                total = total - (romans[current] * count)
                console.log(total, romans[current] * count)
                
            }
            else {
                console.log(romans[current] * count, 'plus')
                total += (romans[current] * count)
                console.log(total, romans[current] * count)
            }
            current = s[0]
            count = 1
        }
        s = s.slice(1)
    }

    
    return total
};
