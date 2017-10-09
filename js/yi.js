function tq(){
    var arr=[1,1,3,4,6,6,,7,7,8];
    var brr=[];
    for(var i=0;i<arr.length;i++){
        if(brr.indexOf(arr[i])==-1){
            brr.push(arr[i]);
        }
    }
    return brr;

}
console.log(tq());