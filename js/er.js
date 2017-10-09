function tl(){
    var arr=[1,1,2,2,3,3,4,5,6,7];
    var brr=[];
    for(var i=0;i<arr.length;i++){
        if(brr.indexOf(arr[i])==-1){
            brr.push(arr[i]);
        }

    }
    return brr;


}
tl();