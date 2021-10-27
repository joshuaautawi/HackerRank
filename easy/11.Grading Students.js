function gradingStudents(grades) {
    // Write your code here
    let c = 0
    let result = []
    while(c<grades.length){
        if(grades[c] >= 38){
            if(grades[c] % 5 >= 3){
                if(grades[c] % 5 ==3){
                result.push(grades[c]+ 2)
                }
                else {
                result.push(grades[c] +1) 
                }
            }
            else{
                result.push(grades[c])    
            }
        }
        else{
            result.push(grades[c])  
        }
        c++
    }
    return result
}