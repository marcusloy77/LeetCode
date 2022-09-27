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
    
    s = s.replace('IV', 'IIII').replace('IX', 'VIIII').replace('XL', 'XXXX').replace('XC','LXXXX').replace('CD','CCCC').replace('CM','DCCCC')
    
    console.log(s)
    return s.split('').reduce((total, rom) => {
        total += romans[rom]
        return total
    }, 0)
    
};
