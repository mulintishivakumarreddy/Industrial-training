onmessage=(e)=>{
    sum=0;
    a=1;
    // b=e.data;
    b=10;
    for(var i=a;i<=b;i++)
        sum+=i
    // console.log(sum)
    self.postMessage(sum)
}
