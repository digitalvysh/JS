function CreateObject(arr) {
    // Write your code here
    let k=[];
    let v=[];
    let ob={};
    for(let i=0;i<arr.length;i++)
    {
        if(i%2==0){
            k.push(arr[i]);
        }
        else{
            v.push(arr[i]);
        }
    }
    k.forEach((key,i)=>ob[key]=v[i])
    return ob
}

module.exports = CreateObject;
