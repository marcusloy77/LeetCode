//this function takes an input string such as '07:00:00PM" and converts it to 24 hours time in the form of '19:00:00'
//initial idea was to cast the hours to a number, then add 12 if it was PM, however there were some edge cases missing 
//from that idea (12:00:01PM => 12:00:01), (12:00:01AM => 00:00:01), there was also problems converting single digit numbers into double digit strings

function timeConversion(s) {
    // Write your code here
    let ampm = s.slice(8)
    let time = s.slice(0, 8)
    if (ampm === 'AM') {
        let time1 = Number(time.slice(0,2))
        let time2 = (time.slice(3,5))
        let time3 = (time.slice(6,8))
    

        if (time1 === 12) {
            time1 = '00'
        }
        else if (time1 < 10) {
            time1 = '0' + String(time1)
        }
        return `${time1}:${time2}:${time3}`
    }
    else {
        let time1 = Number(time.slice(0,2))
        let time2 = Number(time.slice(3,5))
        let time3 = Number(time.slice(6,8))
        
        if (time1 == 12 && (time2 > 0 || time3 > 0)) {
            time1 = 0
        }
        time1 = time1 + 12
        let timeReturn = String(time1) + time.slice(2)
        return timeReturn
    }
}
