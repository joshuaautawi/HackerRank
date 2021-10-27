function compareTriplets(a, b) {
    // Write your code here
    let c = 0
    let m = 0
    let n = 0
    let newArr = []
    while(c<a.length){
        a[c] < b[c] ? n++ : a[c]==b[c] ? 0 : m++
        c++
    }
    newArr.push(m,n)
    return newArr
  }