function timeConversion(s) {
    // Write your code here
    let str = s[0]+s[1]
    let str2= s[8]+s[9]

    if(str2== 'PM') {
        if(s == '12:00:00PM'){
            return '24'.concat(s.slice(2,8))
        }
        else if((Number.parseInt(str))>12){
            let result = (Number.parseInt(str) -12).toString()
            return result.concat(s.slice(2,8))
        }
        else if(str == '12'){
            return '12'.concat(s.slice(2,8))
        }
        else{
            let result = (Number.parseInt(str)+12).toString()
          
            return result.concat(s.slice(2,8))

        }
    }
    else if(str2== 'AM'){
        if(Number.parseInt(str)=='12'){
            return '00'.concat(s.slice(2,8))
        }
    }
    return s.slice(0,8)
}   