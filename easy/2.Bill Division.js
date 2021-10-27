function bonAppetit(bill, k, b) {
    // Write your code here
    let n= bill[k]
    let a = bill.reduce((a,b)=>a+b)
    let c = (a-n)/2
    let r = a/2
    if(c == b)return "Bon Appetit"
    else return r-c
  }