function plusMinus(arr) {
    // Write your code here
    let n =0
    let plus = 0
    let minus = 0
    let zero =0
    while(n<arr.length){
      if(arr[n]>0) plus++
      else if(arr[n]<0) minus++
      else zero++
      n++
    }
}