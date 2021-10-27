
function hurdleRace(k, height) {
    // Write your code here
    let c =0
    for(let i = 0 ; i< height.length ; i++){
      if((k-height[i])<0){
        c = c > Math.abs(height[i]-k) ? c : height[i]-k
      }
    }
    return c
  }