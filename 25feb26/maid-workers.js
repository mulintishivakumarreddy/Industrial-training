self.onmessage=()=>{
    var sum=0
    let a=1;
    let b=10;
    for(var i=a;i<=b;i++){
        sum+=i;
    }
    // console.log(`the sum of ${a}, ${b} is ${sum}`)
}
self.postMessage(sum)