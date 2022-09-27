var intToRoman = function(num) {
    
    let size = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    let letter = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
    
    //idea - seperate it out into thousands, hundreds, tens and ones
    //loop over greater than numbers
    
    let roms = ''
    let i = 0
    while (i < size.length) {
        if (num >= size[i]) {
            roms = roms + letter[i]
            num -= size[i]
        }
        else {
            i = i+1
        }
    }
    return roms
};
