function birthdayCakeCandles(candles) {
    // Write your code here
    let c = 0 
    let max = null
    while(c<candles.length){
      candles[c] > max ? max = candles[c] : max
      c++
    }
    let x = 0
    let counter =0
    while(x < candles.length){
      if(candles[x] == max){
        counter++
      }
      x++
    }
    return counter
  }
  