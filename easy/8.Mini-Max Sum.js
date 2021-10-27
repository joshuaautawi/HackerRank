function miniMaxSum(arr) {
    // Write your code here
    let min = arr.reduce((a,b)=>a+b)
    let max = 0

    let c = 0
    while(c<arr.length){
        let newArr =0
        newArr = arr.reduce((a,b)=>a+b) -arr[c]
        
        newArr> max ? max = newArr : max
        newArr<min ? min = newArr : min
        c++
    }
    console.log(min , max)
}