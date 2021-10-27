function staircase(n) {
    // Write your code here
    let c = 0
    let str= ""
    while (c< n){
        c==0? str+=" ".repeat(n-(c+1))+"#".repeat(c+1): str+="\n"+" ".repeat(n-(c+1))+"#".repeat(c+1)  
        c++
    }
    console.log(str)
}